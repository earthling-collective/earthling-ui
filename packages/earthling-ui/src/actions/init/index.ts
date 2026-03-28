import {
  intro,
  outro,
  text,
  confirm,
  isCancel,
  cancel,
  log,
} from "@clack/prompts";
import findParentDir from "find-parent-dir";
import fs from "node:fs";
import path from "node:path";

export type EarthlingUIConfig = {
  componentDir: string;
  utilsDir: string;
};

export function findConfigDir(): string | null {
  return findParentDir.sync(process.cwd(), "earthling-ui.config.json");
}

export function loadConfig(): {
  config: EarthlingUIConfig;
  configDir: string;
} | null {
  const configDir = findConfigDir();
  if (!configDir) return null;

  try {
    const configPath = path.join(configDir, "earthling-ui.config.json");
    const raw = fs.readFileSync(configPath, "utf8");
    return { config: JSON.parse(raw) as EarthlingUIConfig, configDir };
  } catch {
    return null;
  }
}

export async function initAction() {
  intro("earthling-ui init");

  // Find project root (nearest package.json)
  const projectRoot = findParentDir.sync(process.cwd(), "package.json");
  if (!projectRoot) {
    cancel("Could not find a package.json in any parent directory.");
    process.exit(1);
  }

  const configPath = path.join(projectRoot, "earthling-ui.config.json");

  // Check if config already exists
  if (fs.existsSync(configPath)) {
    const overwrite = await confirm({
      message: "earthling-ui.config.json already exists. Overwrite?",
    });
    if (isCancel(overwrite) || !overwrite) {
      cancel("Init cancelled.");
      process.exit(0);
    }
  }

  log.info(`Project root: ${projectRoot}`);

  // Prompt for component directory
  const componentDir = await text({
    message: "Where should ejected components be placed?",
    placeholder: "src/components",
    defaultValue: "src/components",
  });
  if (isCancel(componentDir)) {
    cancel("Init cancelled.");
    process.exit(0);
  }

  // Prompt for utils directory
  const utilsDir = await text({
    message: "Where should shared utilities (like cn.ts) be placed?",
    placeholder: "src/utils",
    defaultValue: "src/utils",
  });
  if (isCancel(utilsDir)) {
    cancel("Init cancelled.");
    process.exit(0);
  }

  // Write config
  const config: EarthlingUIConfig = {
    componentDir: componentDir as string,
    utilsDir: utilsDir as string,
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n", "utf8");

  outro(`Config saved to ${configPath}`);
}
