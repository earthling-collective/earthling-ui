import { sortPackageJson } from "sort-package-json";
import { glob } from "fast-glob";
import { readFile, writeFile } from "fs/promises";

(async () => {
  await clean();
})();

export async function clean() {
  await sortPackageJsons();
}

async function sortPackageJsons() {
  const globbed = await glob([
    "./package.json",
    "./apps/*/package.json",
    "./packages/*/package.json",
    "./sandboxes/*/package.json",
    "templates/*/package.json",
  ]);

  await Promise.allSettled(
    globbed.map(async (x) => {
      console.log(`sorting "${x}"`);
      let json = JSON.parse((await readFile(x)).toString("utf-8"));
      json = sortPackageJson(json);
      await writeFile(x, JSON.stringify(json, null, "  "));
    })
  );
}

async function formatAllFiles() {
  //TODO: run prettier
}
