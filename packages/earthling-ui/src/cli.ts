import { Command } from "commander";
import fs from "node:fs";
import path from "node:path";
import pkg from "../package.json";
import { createAction } from "./actions/create";
import { ejectAction } from "./actions/eject";
import { initAction } from "./actions/init";
import { inspectComponent, listComponents } from "./utils/catalog";
import { getPackageRoot } from "./utils/package-root";

const program = new Command()
  .name("earthling-ui")
  .description("Import or own your Earthling UI components")
  .version(pkg.version);

program
  .command("create [template] [destination]")
  .description("Create a new earthling-ui project")
  .action(createAction);
program
  .command("init")
  .description("Initialize earthling-ui config for your project")
  .action(initAction);

program
  .command("list")
  .description("List components from this installed version")
  .option("--json", "Print machine-readable component names")
  .action((options) => {
    const components = listComponents();
    console.log(
      options.json ? JSON.stringify(components) : components.join("\n"),
    );
  });

program
  .command("info <component>")
  .description("Inspect exports, dependencies, and source paths")
  .option("--json", "Print machine-readable metadata")
  .option("--source", "Include component and helper source")
  .action((name, options) => {
    const component = inspectComponent(name);
    const result = options.source
      ? {
          ...component,
          content: Object.fromEntries(
            component.files.map((file) => [
              file,
              fs.readFileSync(path.join(getPackageRoot(), file), "utf8"),
            ]),
          ),
        }
      : component;
    console.log(
      options.json || options.source
        ? JSON.stringify(result, null, 2)
        : `${component.import}\nExports: ${component.exports.join(", ")}\nTypes: ${component.types}\nSource: ${component.source}`,
    );
  });

program
  .command("eject <component>")
  .description("Copy a component and its source dependencies into your project")
  .option(
    "--dry-run",
    "Preview files and dependencies without writing or installing",
  )
  .option("--json", "Print machine-readable output without interactive prompts")
  .option(
    "--overwrite",
    "Replace existing component files; preserve shared utilities",
  )
  .option("--no-install", "Copy source without installing npm dependencies")
  .action(ejectAction);

program.parseAsync(process.argv).catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(
    process.argv.includes("--json")
      ? JSON.stringify({ error: message })
      : message,
  );
  process.exitCode = 1;
});
