import { sortPackageJson } from "sort-package-json";
import { glob } from "fast-glob";
import { readFile, writeFile } from "fs/promises";
import {format} from "prettier";

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

  const result = await Promise.allSettled(
    globbed.map(async (x) => {
      console.log(`sorting "${x}"`);
      let json: object = JSON.parse((await readFile(x)).toString("utf-8"));
      json = sortPackageJson(json);
      await writeFile(x, await format(JSON.stringify(json), {parser: "json"}));
    })
  );
  for (let r of result) if (r.status === "rejected") console.log(r.reason);
}
