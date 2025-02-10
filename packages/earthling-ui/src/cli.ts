import { intro, log, outro, spinner } from "@clack/prompts";
import { Command } from "commander";
import { copy } from "copy-paste";
import findParentDir from "find-parent-dir";
import { clone, init } from "isomorphic-git";
import http from "isomorphic-git/http/node";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path, { dirname, join } from "node:path";
import { type PackageJson } from "type-fest";
import pkg from "../package.json";

const handleSigTerm = () => process.exit(0);
process.on("SIGINT", handleSigTerm);
process.on("SIGTERM", handleSigTerm);

const program = new Command();

program
  .name("earthling-ui")
  .description("A CLI for earthling-ui")
  .version(pkg.version);

type TemplateConfig = {
  type: "app" | "package" | "repo";
};

const templateCfg: Record<string, TemplateConfig> = {
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

// recursively check if a valid parent package.json exists
function checkParent(
  path: string,
  projectType: (typeof templateCfg)[string]["type"]
): { path: string; dir: string; scope?: string } | null {
  if (projectType === "repo") return null;

  const parentPackageDir = findParentDir.sync(path, "package.json");
  if (!parentPackageDir) return null;

  const parentPackagePath =
    parentPackageDir && join(parentPackageDir, "package.json");

  // read the parent package.json
  try {
    var parentPackage = JSON.parse(
      fs.readFileSync(parentPackagePath, "utf8")
    ) as PackageJson;
  } catch (error) {
    return checkParent(join(parentPackageDir, "../"), projectType);
  }

  // check if the workspaces field is valid
  if (!parentPackage.workspaces) {
    return checkParent(join(parentPackageDir, "../"), projectType);
  }

  // check if the workspace is valid
  if (
    !(
      Array.isArray(parentPackage.workspaces)
        ? parentPackage.workspaces
        : parentPackage.workspaces.packages
    )?.includes(
      projectType === "app"
        ? "apps/*"
        : projectType === "package"
          ? "packages/*"
          : "*"
    )
  ) {
    return checkParent(join(parentPackageDir, "../"), projectType);
  }

  return {
    path: parentPackagePath,
    dir: dirname(parentPackagePath),
    scope: parentPackage.name?.match(/@([\w\d\-]+)\//)?.[1],
  };
}

async function recursiveFindReplace(
  dir: string,
  find: string,
  replace: string
) {
  const files = await fsp.readdir(dir);

  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stat = await fsp.stat(filePath);

      if (stat.isDirectory()) {
        await recursiveFindReplace(filePath, find, replace);
      } else {
        const content = await fsp.readFile(filePath, "utf8");
        const updatedContent = content.replaceAll(find, replace);
        await fsp.writeFile(filePath, updatedContent, "utf8");
      }
    })
  );
}

program
  .command("create [template] [destination]")
  .description("Create a new earthling-ui project")
  .action(async (template: string, destination: string, options) => {
    if (!/^[\w\d\-]+$/.test(destination))
      throw new Error(
        `Invalid destination: ${destination} (only alphanumeric characters and dashes allowed)`
      );

    intro(`Creating a new earthling-ui monorepo`);

    //default to monorepo
    if (!template) template = "monorepo";
    //check if template is valid
    if (!Object.keys(templateCfg).includes(template))
      throw new Error(`Invalid template: ${template}`);

    //get template config
    const cfg = templateCfg[template as keyof typeof templateCfg];

    //create a clack spinner
    const s = spinner();

    //check for existing parent
    s.message(`Determining destination directory`);
    const parent = checkParent(process.cwd(), cfg.type);

    //log parent root if exists
    if (parent) log.info(`Parent root: ${parent.dir}`);

    //get the absolute destination path
    let absDestination = join(process.cwd(), destination);

    //if the destination is a subdirectory of the parent package, use that as the destination
    if (parent) {
      switch (cfg.type) {
        case "app":
          absDestination = join(parent.dir, "./apps", destination);
          break;
        case "package":
          absDestination = join(parent.dir, "./packages", destination);
          break;
      }
    }

    //log the repo root
    log.info(`Project root: ${absDestination}`);

    //update spinner message
    s.message(`Creating destination directory`);

    //create the destination directory
    if (!fs.existsSync(absDestination))
      fs.mkdirSync(absDestination, { recursive: true });

    //check if any file exists inside the destination directory
    if (fs.readdirSync(absDestination).length > 0) {
      console.error(`❌ Directory ${absDestination} is not empty`);
      process.exit(1);
    }

    //update spinner message
    s.message(`Cloning template repository`);

    //clone the template repository
    await clone({
      fs,
      http,
      dir: absDestination,
      url: `https://github.com/earthling-collective/template-${template}.git`,
      singleBranch: true,
    });

    //update spinner message
    s.message(`Setting up project template`);

    //replace the template placeholders
    await recursiveFindReplace(
      absDestination,
      `@template-${template}/${template}`,
      parent?.scope ? `@${parent.scope}/${destination}` : destination
    );
    await recursiveFindReplace(
      absDestination,
      `template-${template}`,
      destination
    );

    //remove git dir
    await fsp.rm(absDestination + "/.git", { recursive: true, force: true });

    //reinitialize git if a repo project type
    if (cfg.type === "repo") {
      await init({ fs, dir: absDestination });
    }

    // s.stop(`Template cloned`);

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
