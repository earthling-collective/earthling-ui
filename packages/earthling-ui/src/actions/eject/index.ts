import { confirm, isCancel } from "@clack/prompts";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { loadConfig } from "../init";
import { inspectComponent, resolveSourceImport } from "../../utils/catalog";
import { getPackageRoot } from "../../utils/package-root";

type EjectOptions = {
  dryRun?: boolean;
  json?: boolean;
  overwrite?: boolean;
  install?: boolean;
};

function destination(root: string, directory: string, file: string) {
  const target = path.resolve(root, directory, file);
  const relative = path.relative(root, target);
  if (
    !relative ||
    relative === ".." ||
    relative.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relative)
  )
    throw new Error("Eject destinations must stay inside the project.");
  for (
    let current = target;
    current !== root;
    current = path.dirname(current)
  ) {
    if (fs.existsSync(current) && fs.lstatSync(current).isSymbolicLink())
      throw new Error(`Cannot eject through a symbolic link: ${current}`);
  }
  return target;
}

export async function ejectAction(
  componentName: string,
  options: EjectOptions = {},
) {
  const root = getPackageRoot();
  const component = inspectComponent(componentName, root);
  const loaded = loadConfig();
  if (!loaded)
    throw new Error(
      "No valid earthling-ui.config.json found. Run earthling-ui init.",
    );
  const { config, configDir } = loaded;
  const files = component.files.map((source) => {
    const utility = source.startsWith("src/utils/");
    const target = destination(
      configDir,
      utility ? config.utilsDir : config.componentDir,
      source.replace(/^src\/(utils|components)\//, ""),
    );
    return { source, target, exists: fs.existsSync(target), utility };
  });
  if (new Set(files.map((file) => file.target)).size !== files.length)
    throw new Error("Component and utility destinations overlap.");
  const warnings = files
    .filter(
      (file) =>
        file.exists &&
        file.utility &&
        fs.readFileSync(file.target, "utf8") !==
          fs.readFileSync(path.join(root, file.source), "utf8"),
    )
    .map(
      (file) =>
        `Preserving customized helper ${file.target}; verify its exports and dependencies.`,
    );
  const plan = {
    component: component.name,
    files,
    dependencies: component.dependencies,
    warnings,
  };
  if (options.dryRun) {
    console.log(
      options.json
        ? JSON.stringify(plan, null, 2)
        : files
            .map(
              (file) => `${file.exists ? "exists" : "create"} ${file.target}`,
            )
            .join("\n"),
    );
    return;
  }
  const conflicts = files.filter((file) => file.exists && !file.utility);
  if (conflicts.length && !options.overwrite) {
    if (!process.stdin.isTTY || options.json)
      throw new Error(
        "Component files already exist. Inspect --dry-run, then use --overwrite to replace them.",
      );
    const answer = await confirm({
      message: `Overwrite ${conflicts.length} existing component file(s)?`,
    });
    if (isCancel(answer) || !answer) return;
  }
  for (const file of files) {
    if (file.exists && file.utility) continue;
    let source = fs.readFileSync(path.join(root, file.source), "utf8");
    source = source.replace(
      /((?:\bfrom\s*|\bimport\s*)["'])([^"']+)(["'])/g,
      (match, prefix, specifier, quote) => {
        if (!specifier.startsWith(".") && !specifier.startsWith("@/"))
          return match;
        const resolved = resolveSourceImport(
          specifier,
          path.join(root, file.source),
          root,
        );
        const dependency = files.find(
          (item) => path.join(root, item.source) === resolved,
        );
        if (!dependency)
          throw new Error(`Unplanned source dependency: ${specifier}`);
        let relative = path
          .relative(path.dirname(file.target), dependency.target)
          .replace(/\\/g, "/")
          .replace(/\.tsx?$/, "");
        if (!relative.startsWith(".")) relative = `./${relative}`;
        return `${prefix}${relative}${quote}`;
      },
    );
    fs.mkdirSync(path.dirname(file.target), { recursive: true });
    fs.writeFileSync(file.target, source);
  }
  const dependencies = Object.entries(component.dependencies).map(
    ([name, version]) => `${name}@${version}`,
  );
  if (options.install !== false && dependencies.length) {
    let directory = configDir;
    let manager = "npm";
    while (true) {
      const detected = [
        ["bun.lock", "bun"],
        ["bun.lockb", "bun"],
        ["pnpm-lock.yaml", "pnpm"],
        ["yarn.lock", "yarn"],
        ["package-lock.json", "npm"],
      ].find(([lock]) => fs.existsSync(path.join(directory, lock!)));
      if (detected) {
        manager = detected[1]!;
        break;
      }
      const parent = path.dirname(directory);
      if (parent === directory) break;
      directory = parent;
    }
    // Windows package managers use .cmd shims; arguments come from shipped metadata.
    execFileSync(
      manager,
      [manager === "npm" ? "install" : "add", ...dependencies].map(
        (argument) =>
          process.platform === "win32" ? `"${argument}"` : argument,
      ),
      {
        cwd: configDir,
        stdio: options.json ? "pipe" : "inherit",
        shell: process.platform === "win32",
      },
    );
  }
  if (!options.json) for (const warning of warnings) console.warn(warning);
  console.log(
    options.json
      ? JSON.stringify(
          {
            ...plan,
            written: files
              .filter((file) => !file.exists || !file.utility)
              .map((file) => file.target),
          },
          null,
          2,
        )
      : `Component "${componentName}" ejected successfully.\nKeep earthling-ui/index.css in your Tailwind stylesheet.`,
  );
}
