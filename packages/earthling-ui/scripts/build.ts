import dts from "bun-plugin-dts";

const external = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "react-dom/client",
  "react-dom/server",
];

(async () => {
  await Bun.build({
    entrypoints: [
      ...[
        "accordion",
        "breadcrumbs",
        "button",
        "chip",
        "dialog",
        "drawer",
        "input",
        "popover",
        "scroll-area",
        "select",
        "separator",
        "slider",
        "surface",
        "switch",
        "tabs",
        "textarea",
        "toggle-group",
      ].map((name) => `src/components/${name}/index.tsx`),
    ],
    outdir: "dist/components",
    root: "src/components",
    minify: true,
    splitting: true,
    banner: '"use client";',
    external,
    plugins: [dts()],
  });

  await Bun.build({
    entrypoints: ["src/utils/cn.ts"],
    outdir: "dist/utils",
    root: "src/utils",
    minify: true,
    splitting: true,
    external,
    plugins: [dts()],
  });
})();
