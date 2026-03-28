import {
  intro,
  outro,
  confirm,
  isCancel,
  cancel,
  log,
  spinner,
} from "@clack/prompts";
import { execSync } from "node:child_process";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { loadConfig } from "../init";

/**
 * Resolve the earthling-ui package source directory.
 * This file lives at src/actions/eject/index.ts, so
 * the package root is three levels up.
 */
function getPackageSrcDir(): string {
  // import.meta.dir is the directory of this file
  // Go up: eject → actions → src (which is the src directory)
  return path.resolve(import.meta.dir, "../..");
}

/**
 * List all available component directory names.
 */
function listComponents(componentsDir: string): string[] {
  return fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

/**
 * Extract npm package names from import statements in source code.
 * Skips relative imports, react, and react-dom.
 */
function extractDeps(source: string): string[] {
  const importRegex = /import\s+[\s\S]*?from\s+["']([^"'.][^"']*)["']/g;
  const deps = new Set<string>();
  let match;
  while ((match = importRegex.exec(source)) !== null) {
    const specifier = match[1];
    if (specifier.startsWith("@")) {
      // Scoped package: @scope/package
      deps.add(specifier.split("/").slice(0, 2).join("/"));
    } else {
      // Unscoped package
      deps.add(specifier.split("/")[0]);
    }
  }
  // Remove peer deps consumers should already have
  deps.delete("react");
  deps.delete("react-dom");
  return [...deps];
}

/**
 * Detect which package manager the project uses based on lockfiles.
 */
function detectPackageManager(projectRoot: string): string {
  if (fs.existsSync(path.join(projectRoot, "bun.lockb"))) return "bun";
  if (fs.existsSync(path.join(projectRoot, "bun.lock"))) return "bun";
  if (fs.existsSync(path.join(projectRoot, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(projectRoot, "yarn.lock"))) return "yarn";
  return "npm";
}

/**
 * Recursively copy a directory.
 */
async function copyDir(src: string, dest: string) {
  await fsp.mkdir(dest, { recursive: true });
  const entries = await fsp.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

/**
 * Rewrite `@/utils/...` imports to relative paths in a file.
 */
async function rewriteImports(
  filePath: string,
  targetUtilsDir: string
) {
  let content = await fsp.readFile(filePath, "utf8");

  // Compute relative path from the file to the utils directory
  const fileDir = path.dirname(filePath);
  const relativeToUtils = path
    .relative(fileDir, targetUtilsDir)
    .replace(/\\/g, "/");
  const utilsPrefix = relativeToUtils.startsWith(".")
    ? relativeToUtils
    : "./" + relativeToUtils;

  // Replace @/utils/ imports with the computed relative path
  content = content.replace(
    /from\s+["']@\/utils\/([^"']*)["']/g,
    (_, utilName) => {
      // Strip .ts/.tsx extension if present in the import
      const cleanName = utilName.replace(/\.(ts|tsx)$/, "");
      return `from "${utilsPrefix}/${cleanName}"`;
    }
  );

  await fsp.writeFile(filePath, content, "utf8");
}

export async function ejectAction(componentName: string) {
  intro(`Ejecting "${componentName}"`);

  // 1. Load config
  const result = loadConfig();
  if (!result) {
    log.error(
      "Could not find earthling-ui.config.json in any parent directory."
    );
    log.info("Run `bun earthling-ui init` to create one.");
    cancel("Eject cancelled.");
    process.exit(1);
  }

  const { config, configDir } = result;

  // 2. Resolve paths
  const packageSrcDir = getPackageSrcDir();
  const sourceComponentsDir = path.join(packageSrcDir, "components");
  const sourceUtilsDir = path.join(packageSrcDir, "utils");

  const targetComponentDir = path.resolve(configDir, config.componentDir);
  const targetUtilsDir = path.resolve(configDir, config.utilsDir);

  // 3. Validate component exists
  const componentSrcDir = path.join(sourceComponentsDir, componentName);
  if (
    !fs.existsSync(componentSrcDir) ||
    !fs.statSync(componentSrcDir).isDirectory()
  ) {
    const available = listComponents(sourceComponentsDir);
    log.error(`Component "${componentName}" not found.`);
    log.info(`Available components:\n  ${available.join(", ")}`);
    cancel("Eject cancelled.");
    process.exit(1);
  }

  // 4. Check if component already exists at target
  const componentDestDir = path.join(targetComponentDir, componentName);
  if (fs.existsSync(componentDestDir)) {
    const overwrite = await confirm({
      message: `"${componentName}" already exists at ${componentDestDir}. Overwrite?`,
    });
    if (isCancel(overwrite) || !overwrite) {
      cancel("Eject cancelled.");
      process.exit(0);
    }
    // Remove existing before copy
    await fsp.rm(componentDestDir, { recursive: true, force: true });
  }

  // 5. Copy component folder
  const s = spinner();
  s.start(`Copying ${componentName} component`);

  await copyDir(componentSrcDir, componentDestDir);

  // 6. Copy cn.ts utility if not present
  const cnTargetPath = path.join(targetUtilsDir, "cn.ts");
  let cnWasCopied = false;
  if (!fs.existsSync(cnTargetPath)) {
    await fsp.mkdir(targetUtilsDir, { recursive: true });
    await fsp.copyFile(path.join(sourceUtilsDir, "cn.ts"), cnTargetPath);
    cnWasCopied = true;
  }

  // 7. Rewrite @/utils/ imports in all copied files
  s.message("Rewriting imports");

  const copiedFiles = await fsp.readdir(componentDestDir);
  for (const file of copiedFiles) {
    const filePath = path.join(componentDestDir, file);
    const stat = await fsp.stat(filePath);
    if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(file)) {
      await rewriteImports(filePath, targetUtilsDir);
    }
  }

  // 8. Detect dependencies
  s.message("Detecting dependencies");

  // Collect deps from the component file(s)
  const allDeps = new Set<string>();
  for (const file of copiedFiles) {
    const filePath = path.join(componentDestDir, file);
    const stat = await fsp.stat(filePath);
    if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(file)) {
      const source = await fsp.readFile(filePath, "utf8");
      for (const dep of extractDeps(source)) {
        allDeps.add(dep);
      }
    }
  }

  // If we copied cn.ts, also add its dependencies
  if (cnWasCopied) {
    const cnSource = await fsp.readFile(cnTargetPath, "utf8");
    for (const dep of extractDeps(cnSource)) {
      allDeps.add(dep);
    }
  }

  // Remove class-variance-authority internal alias if present
  allDeps.delete("class-variance-authority/types");

  // 9. Install dependencies
  const depsToInstall = [...allDeps];
  if (depsToInstall.length > 0) {
    const pm = detectPackageManager(configDir);
    const installCmd =
      pm === "npm"
        ? `npm install ${depsToInstall.join(" ")}`
        : `${pm} add ${depsToInstall.join(" ")}`;

    s.message(`Installing dependencies with ${pm}`);

    try {
      execSync(installCmd, { cwd: configDir, stdio: "pipe" });
    } catch (err: any) {
      s.stop("Dependencies could not be auto-installed");
      log.warning(
        `Failed to install dependencies automatically.\nRun manually: ${installCmd}`
      );
      log.info(`\nEjected files:`);
      log.info(`  Component: ${componentDestDir}`);
      if (cnWasCopied) log.info(`  Utility:   ${cnTargetPath}`);
      outro("Eject completed with warnings.");
      return;
    }
  }

  s.stop("Done");

  // 10. Summary
  log.success(`Component "${componentName}" ejected successfully.`);
  log.info(`  Component: ${componentDestDir}`);
  if (cnWasCopied) log.info(`  Utility:   ${cnTargetPath}`);
  if (depsToInstall.length > 0) {
    log.info(`  Installed: ${depsToInstall.join(", ")}`);
  }

  outro("Happy building!");
}
