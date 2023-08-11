import { build } from "tsup";
import { join } from "path";
import { readFile, readdir, stat, mkdir, cp, rm } from "fs/promises";
import { Stats, existsSync } from "fs";
import colors from "colors";

const root = join(process.cwd(), ".");
const templatesDir = join(root, "../../templates");
const outdir = join(root, "./dist");
const templatesOutDir = join(outdir, "./templates");

//map templates
const templates: {
  name: string;
  path: string;
  stats: Stats;
  packageJson: Record<string, any>;
}[] = (
  await Promise.all<any>(
    (
      await readdir(templatesDir)
    ).map(async (name) => {
      const path = join(templatesDir, name);
      const stats = await stat(path);
      if (!stats.isDirectory()) return false;
      const packageJsonPath = join(path, "./package.json");
      if (!existsSync(packageJsonPath)) return false;
      try {
        const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
        return { name, path, stats, packageJson };
      } catch (err: any) {
        console.error(err);
        return false;
      }
    })
  )
).filter((x) => !!x);
console.log(`templates mapped`);

//run tsup
await build({
  entry: [join(root, "src/index.ts")],
  format: ["cjs"],
});
console.log(`tsup finished`);

//clean templates out dir
if (existsSync(templatesOutDir)) await rm(templatesOutDir, { recursive: true });
await mkdir(templatesOutDir, { recursive: true });
console.log(`templates out dir cleaned`);

//copy templates
await Promise.all(
  templates.map(async ({ name, path, packageJson, stats }) => {
    console.log(`copying template "${colors.bold(name)}"`);
    await cp(path, join(templatesOutDir, name), {
      recursive: true,
      errorOnExist: false,
      filter: (source) =>
        ![/node_modules/, /\.git\//].some((x) => x.test(source)),
    });

    //replace template vars
  })
);
