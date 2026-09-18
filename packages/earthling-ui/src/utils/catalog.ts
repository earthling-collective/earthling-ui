import fs from "node:fs";
import path from "node:path";
import { getPackageRoot } from "./package-root";

export function listComponents(root = getPackageRoot()) {
  return fs
    .readdirSync(path.join(root, "src/components"), { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(
          path.join(root, "src/components", entry.name, "index.tsx"),
        ),
    )
    .map((entry) => entry.name)
    .sort();
}

export function inspectComponent(name: string, root = getPackageRoot()) {
  if (!listComponents(root).includes(name))
    throw new Error(`Unknown component "${name}". Run earthling-ui list.`);
  const files = new Map<string, string>();
  const dependencies = new Set<string>();
  const visit = (file: string) => {
    const relative = path.relative(root, file).replace(/\\/g, "/");
    if (
      !relative.startsWith("src/components/") &&
      !relative.startsWith("src/utils/")
    ) {
      throw new Error(`Unsupported source dependency: ${relative}`);
    }
    if (files.has(relative)) return;
    const source = fs.readFileSync(file, "utf8");
    files.set(relative, source);
    for (const match of source.matchAll(
      /(?:\bfrom\s*|\bimport\s*)["']([^"']+)["']/g,
    )) {
      const specifier = match[1]!;
      if (specifier.startsWith(".") || specifier.startsWith("@/")) {
        visit(resolveSourceImport(specifier, file, root));
      } else {
        const dependency = specifier.startsWith("@")
          ? specifier.split("/").slice(0, 2).join("/")
          : specifier.split("/")[0]!;
        if (dependency !== "react" && dependency !== "react-dom")
          dependencies.add(dependency);
      }
    }
  };
  const entry = `src/components/${name}/index.tsx`;
  visit(path.join(root, entry));
  const source = files.get(entry)!;
  const exports = new Set<string>();
  for (const match of source.matchAll(
    /export\s+(?:declare\s+)?(?:interface|type|const|function|class)\s+(\w+)/g,
  ))
    exports.add(match[1]!);
  for (const match of source.matchAll(/export\s*\{([^}]+)\}/g)) {
    for (const item of match[1]!.split(",")) {
      const name = item
        .trim()
        .replace(/^type\s+/, "")
        .split(/\s+as\s+/)
        .pop();
      if (name) exports.add(name);
    }
  }
  const pkg = JSON.parse(
    fs.readFileSync(path.join(root, "package.json"), "utf8"),
  );
  const versions = {
    ...pkg.devDependencies,
    ...pkg.peerDependencies,
    ...pkg.dependencies,
  };
  return {
    name,
    import: `earthling-ui/${name}`,
    exports: [...exports].sort(),
    source: entry,
    types: `dist/components/${name}/index.d.ts`,
    dependencies: Object.fromEntries(
      [...dependencies].sort().map((dependency) => {
        if (!versions[dependency])
          throw new Error(`Undeclared source dependency: ${dependency}`);
        return [dependency, versions[dependency] as string];
      }),
    ),
    files: [...files.keys()].sort(),
  };
}

export function resolveSourceImport(
  specifier: string,
  file: string,
  root: string,
) {
  const base = specifier.startsWith("@/")
    ? path.join(root, "src", specifier.slice(2))
    : path.resolve(path.dirname(file), specifier);
  const resolved = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, "index.tsx"),
    path.join(base, "index.ts"),
  ].find(
    (candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile(),
  );
  if (!resolved) throw new Error(`Cannot resolve ${specifier} from ${file}`);
  return resolved;
}
