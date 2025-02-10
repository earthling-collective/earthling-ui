import { Command } from "commander";
import pkg from "../package.json";
import { copy } from "copy-paste";
import path from "node:path";
import findParentDir from "find-parent-dir";
import { join } from "node:path";
import fs from "node:fs";
import { clone } from "isomorphic-git";
import http from "isomorphic-git/http/node";
import { intro, outro, spinner } from "@clack/prompts";
import { type PackageJson } from "type-fest";
import { log } from "@clack/prompts";

const handleSigTerm = () => process.exit(0);
process.on("SIGINT", handleSigTerm);
process.on("SIGTERM", handleSigTerm);

const program = new Command();

program
  .name("earthling-ui")
  .description("A CLI for earthling-ui")
  .version(pkg.version);

const templateCfg = {
  ssr: {
    type: "app",
  },
  spa: {
    type: "app",
  },
  db: {
    type: "package",
  },
  lib: {
    type: "package",
  },
  cli: {
    type: "package",
  },
  monorepo: {
    type: "repo",
  },
};

program
  .command("create [template] [destination]")
  .description("Create a new earthling-ui project")
  .configureOutput({
    writeErr: (str) => log.error(str),
  })
  .action(async (template: string, destination: string, options) => {
    intro(`Creating a new earthling-ui monorepo`);

    //default to monorepo
    if (!template) template = "monorepo";
    //check if template is valid
    if (!Object.keys(templateCfg).includes(template))
      throw new Error(`Invalid template: ${template}`);

    //get template config
    const cfg = templateCfg[template as keyof typeof templateCfg];

    const s = spinner();

    //check for existing parent
    s.message(`Determining destination directory`);
    const parentPkgDir = findParentDir.sync(process.cwd(), "package.json");
    const parentPkgPath = parentPkgDir && join(parentPkgDir, "package.json");

    if (parentPkgPath) {
      log.info(`Found parent package at ${parentPkgPath}`);

      const parentPkg = JSON.parse(
        fs.readFileSync(parentPkgPath, "utf8")
      ) as PackageJson;

      if (cfg.type === "repo")
        throw new Error(`Cannot create a repo project inside another project`);

      if (!Array.isArray(parentPkg.workspaces))
        throw new Error(
          `Workspaces field is not an array in ${parentPkgPath} (Not yet supported)`
        );

      if (cfg.type === "app" && !parentPkg.workspaces?.includes("apps/*"))
        throw new Error(`No apps/* workspace found in ${parentPkgPath}`);

      if (
        cfg.type === "package" &&
        !parentPkg.workspaces?.includes("packages/*")
      )
        throw new Error(`No packages/* workspace found in ${parentPkgPath}`);
    }

    //get the absolute destination path
    let absDestination = join(process.cwd(), destination);

    //if the destination is a subdirectory of the parent package, use that as the destination
    if (parentPkgPath) {
      switch (cfg.type) {
        case "app":
          absDestination = join(parentPkgDir, "./apps", destination);
          break;
        case "package":
          absDestination = join(parentPkgDir, "./packages", destination);
          break;
      }
    }

    s.message(`Creating destination directory`);
    if (!fs.existsSync(absDestination))
      fs.mkdirSync(absDestination, { recursive: true });

    //check if any file exists inside the destination directory
    if (fs.readdirSync(absDestination).length > 0) {
      console.error(`❌ Directory ${absDestination} is not empty`);
      process.exit(1);
    }

    //clone the template repository
    s.message(`Cloning template repository`);
    await clone({
      fs,
      http,
      dir: absDestination,
      url: `https://github.com/earthling-collective/template-${template}.git`,
      singleBranch: true,
    });

    s.stop(`Template cloned`);

    outro(`Earthling-ui project created in ${absDestination}`);
  });

program
  .command("eject <component>")
  .description("Eject a component from earthling-ui into your project")
  .action(async (component) => {
    console.log(`🚧 Coming soon`);
  });

program
  .command("copy <snippet>")
  .description("Copy a component from earthling-ui to your clipboard")
  .action(async (snippet) => {
    try {
      const snippetPath = path.resolve(__dirname, `snippets/${snippet}.tsx`);
      const snippetCode = fs.readFileSync(snippetPath, "utf8");
      copy(snippetCode);
      console.log(`✅ "${snippet}" copied to clipboard`);
    } catch (error: any) {
      console.error(`❌ Failed to copy "${snippet}": ${error.message}`);
    }
  });

program.parse(process.argv);
