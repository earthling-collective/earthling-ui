import dts from "bun-plugin-dts";
import { mkdir, rename, rm, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
import pkg from "../package.json";
import { inspectComponent, listComponents } from "../src/utils/catalog";

const root = resolve(import.meta.dir, "..");
const dist = join(root, "dist");
const components = listComponents(root);
const external = ["react", "react-dom", ...Object.keys(pkg.dependencies)];
const build = async (options: Parameters<typeof Bun.build>[0]) => {
  const result = await Bun.build(options);
  if (!result.success) throw new AggregateError(result.logs, "Build failed");
};

if (process.cwd() !== root)
  throw new Error("Run the build from packages/earthling-ui.");
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const [directory, entrypoints] of [
  [
    "components",
    [
      "src/components/index.ts",
      ...components.map((name) => `src/components/${name}/index.tsx`),
    ],
  ],
  ["utils", ["src/utils/cn.ts", "src/utils/variants.ts"]],
] as const) {
  const common = {
    entrypoints: [...entrypoints],
    root: `src/${directory}`,
    minify: true,
    sourcemap: "linked" as const,
    external,
  };
  await build({
    ...common,
    outdir: `dist/${directory}`,
    splitting: true,
    ...(directory === "components" ? { banner: '"use client";' } : {}),
    plugins: [dts()],
  });
  await build({ ...common, outdir: `dist/cjs/${directory}`, format: "cjs" });
}

for (const name of components) {
  const directory = join(dist, "components", name);
  if (await Bun.file(join(directory, "index.tsx")).exists()) {
    await rename(join(directory, "index.tsx"), join(directory, "index.d.ts"));
  }
  await stat(join(directory, "index.d.ts"));
}
for (const directory of ["components", "utils"]) {
  for (const file of new Bun.Glob("**/*.d.ts").scanSync(
    join(dist, directory),
  )) {
    await Bun.write(
      join(dist, "cjs", directory, file),
      Bun.file(join(dist, directory, file)),
    );
  }
}
await Bun.write(join(dist, "cjs/package.json"), '{"type":"commonjs"}\n');

await build({
  entrypoints: ["src/cli.ts"],
  outdir: "dist",
  target: "node",
  format: "esm",
  banner: "#!/usr/bin/env node",
  sourcemap: "linked",
  external,
});
await Bun.write(
  join(dist, "catalog.json"),
  JSON.stringify(
    {
      name: pkg.name,
      version: pkg.version,
      components: components.map((name) => inspectComponent(name, root)),
    },
    null,
    2,
  ) + "\n",
);
