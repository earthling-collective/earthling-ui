import dts from "bun-plugin-dts";
import { readdir, rename } from "node:fs/promises";
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
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "hover-card",
  "input",
  "popover",
  "progress",
  "radio",
  "scroll-area",
  "select",
  "separator",
  "skeleton",
  "slider",
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
  (name) => `src/components/${name}/index.tsx`
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
  await Bun.build({
    entrypoints: ["src/components/index.ts", ...componentEntrypoints],
    outdir: "dist/cjs/components",
    root: "src/components",
    format: "cjs",
    minify: true,
    splitting: false,
    sourcemap: "linked",
    banner: '"use client";',
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
})();
