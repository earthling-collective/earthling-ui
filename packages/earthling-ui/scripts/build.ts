import dts from "bun-plugin-dts";
import { rename } from "node:fs/promises";
import { join } from "node:path";

const external = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "react-dom/client",
  "react-dom/server",
];

const componentNames = [
  "accordion",
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "breadcrumbs",
  "button",
  "card",
  "checkbox",
  "chip",
  "collapsible",
  "color-picker",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "hover-card",
  "input",
  "kbd",
  "label",
  "menubar",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio",
  "scroll-area",
  "select",
  "separator",
  "skeleton",
  "slider",
  "spinner",
  "surface",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toggle-group",
  "tooltip",
];

const componentEntrypoints = componentNames.map(
  (name) => `src/components/${name}/index.tsx`,
);

(async () => {
  // ESM build (with code splitting, source maps, and type declarations)
  await Bun.build({
    entrypoints: ["src/components/index.ts", ...componentEntrypoints],
    outdir: "dist/components",
    root: "src/components",
    minify: true,
    splitting: true,
    sourcemap: "linked",
    banner: '"use client";',
    external,
    plugins: [dts()],
  });

  // CJS build (no code splitting, source maps)
  // No "use client" banner: the directive is an RSC/ESM concern and only
  // produces bundler warnings in CJS consumers.
  await Bun.build({
    entrypoints: ["src/components/index.ts", ...componentEntrypoints],
    outdir: "dist/cjs/components",
    root: "src/components",
    format: "cjs",
    minify: true,
    splitting: false,
    sourcemap: "linked",
    external,
  });

  // ESM utils build
  await Bun.build({
    entrypoints: ["src/utils/cn.ts"],
    outdir: "dist/utils",
    root: "src/utils",
    minify: true,
    splitting: true,
    sourcemap: "linked",
    external,
    plugins: [dts()],
  });

  // CJS utils build
  await Bun.build({
    entrypoints: ["src/utils/cn.ts"],
    outdir: "dist/cjs/utils",
    root: "src/utils",
    format: "cjs",
    minify: true,
    splitting: false,
    sourcemap: "linked",
    external,
  });

  // Rename .tsx type declarations to .d.ts (bun-plugin-dts only renames .ts → .d.ts)
  for (const name of componentNames) {
    const dir = join("dist", "components", name);
    const tsxPath = join(dir, "index.tsx");
    const dtsPath = join(dir, "index.d.ts");
    try {
      await rename(tsxPath, dtsPath);
    } catch {
      // .d.ts may already exist if source was .ts
    }
  }

  // CLI build (node-compatible ESM, referenced by the package "bin" entry).
  // Runtime deps stay external; package.json version is inlined.
  await Bun.build({
    entrypoints: ["src/cli.ts"],
    outdir: "dist",
    target: "node",
    format: "esm",
    banner: "#!/usr/bin/env node",
    sourcemap: "linked",
    external: [
      "commander",
      "@clack/prompts",
      "find-parent-dir",
      "isomorphic-git",
    ],
  });

  // Mirror type declarations into dist/cjs. The CommonJS marker below makes
  // TypeScript treat these copies as CJS-flavored, so require() consumers
  // get correctly-resolved types instead of ESM-masquerading ones.
  for (const file of new Bun.Glob("**/*.d.ts").scanSync("dist/components")) {
    await Bun.write(
      join("dist", "cjs", "components", file),
      Bun.file(join("dist", "components", file)),
    );
  }
  for (const file of new Bun.Glob("*.d.ts").scanSync("dist/utils")) {
    await Bun.write(
      join("dist", "cjs", "utils", file),
      Bun.file(join("dist", "utils", file)),
    );
  }

  // Mark dist/cjs as CommonJS. The package root is "type": "module", so
  // without this Node would parse the CJS-syntax .js files as ESM.
  await Bun.write(
    join("dist", "cjs", "package.json"),
    JSON.stringify({ type: "commonjs" }, null, 2) + "\n",
  );
})();
