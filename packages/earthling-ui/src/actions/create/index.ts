import { intro, log, outro, spinner } from "@clack/prompts";
import findParentDir from "find-parent-dir";
import { clone, init } from "isomorphic-git";
import http from "isomorphic-git/http/node";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path, { dirname, join } from "node:path";
import { type PackageJson } from "type-fest";

type TemplateReplacements = Record<
  string,
  (params: { projectName: string; projectScope?: string }) => string
>;

type TemplateConfig = {
  type: "app" | "package" | "repo";
  aliases: string[];
  replacements: TemplateReplacements;
};

const globalReplacements: TemplateReplacements = {
  "earthling-template-name": ({ projectName }) => projectName,
  "earthling-template-package-name": ({ projectName, projectScope }) =>
    projectScope ? `@${projectScope}/${projectName}` : projectName,
  "earthling-template-display-name": ({ projectName }) => projectName,
  "earthling-template-short-display-name": ({ projectName }) => projectName,
  "earthling.template-app.id": ({ projectName, projectScope }) =>
    projectScope
      ? `com.${projectScope}.${projectName}`
      : `com.${projectName}.app`,
  earthling_template_lib: ({ projectName }) =>
    `${projectName.replaceAll("-", "_")}_lib`,
};

const templateCfg: Record<string, TemplateConfig> = {
  next: {
    type: "app",
    aliases: ["ssr", "nextjs"],
    replacements: {
      ...globalReplacements,
    },
  },
  vite: {
    type: "app",
    aliases: ["spa"],
    replacements: {
      ...globalReplacements,
    },
  },
  tauri: {
    type: "app",
    aliases: ["app", "desktop"],
    replacements: {
      ...globalReplacements,
    },
  },
  kiosk: {
    type: "app",
    aliases: ["electron"],
    replacements: {
      ...globalReplacements,
    },
  },
  db: {
    type: "package",
    aliases: ["database", "drizzle"],
    replacements: {
      ...globalReplacements,
    },
  },
  lib: {
    type: "package",
    aliases: ["library"],
    replacements: {
      ...globalReplacements,
    },
  },
  cli: {
    type: "package",
    aliases: [],
    replacements: {
      ...globalReplacements,
    },
  },
  monorepo: {
    type: "repo",
    aliases: ["repo"],
    replacements: {
      ...globalReplacements,
    },
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

export async function createAction(template: string, destination: string) {
  if (!/^[a-z\d\-]+$/.test(destination))
    throw new Error(
      `Invalid destination: ${destination} (only lowercase alphanumeric characters and dashes allowed)`
    );

  intro(`Creating a new earthling-ui monorepo`);

  //default to monorepo
  if (!template) template = "monorepo";
  //check if template is valid
  const templateKey = Object.entries(templateCfg).find(([key, cfg]) =>
    [key, ...cfg.aliases].includes(template)
  )?.[0];
  if (!templateKey) throw new Error(`Invalid template: ${template}`);

  //get template config
  const cfg = templateCfg[templateKey as keyof typeof templateCfg];

  //check for existing parent
  const parent = checkParent(process.cwd(), cfg.type);

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
  log.info(
    [
      ...(parent ? [`Parent root: ${parent.dir}`] : []),
      `Project root: ${absDestination}`,
    ].join(`\n`)
  );

  //create the destination directory
  if (!fs.existsSync(absDestination))
    fs.mkdirSync(absDestination, { recursive: true });

  //check if any file exists inside the destination directory
  if (fs.readdirSync(absDestination).length > 0) {
    console.error(`❌ Directory ${absDestination} is not empty`);
    process.exit(1);
  }

  let s = spinner();
  s.start("Cloning template directory");

  //clone the template repository
  await clone({
    fs,
    http,
    dir: absDestination,
    url: `https://github.com/earthling-collective/template-${templateKey}.git`,
    singleBranch: true,
  });

  //update spinner message
  s.message(`Performing template replacements`);

  //replace the template placeholders
  const replacements = Object.entries(cfg.replacements);
  for await (let [x, y] of replacements) {
    await recursiveFindReplace(
      absDestination,
      x,
      y({ projectName: destination, projectScope: parent?.scope })
    );
  }

  s.message(`Managing git repo`);

  //remove git dir
  await fsp.rm(absDestination + "/.git", { recursive: true, force: true });

  //reinitialize git if a repo project type
  if (cfg.type === "repo") {
    await init({ fs, dir: absDestination });
  }

  s.stop(`Successfully cloned template`);

  outro(`Earthling-ui project created in ${absDestination}`);
}
