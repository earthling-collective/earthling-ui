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
