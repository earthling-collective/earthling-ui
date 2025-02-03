import dts from "bun-plugin-dts";

(async () => {
  await Bun.build({
    entrypoints: [
      ...[
        "badge",
        "button",
        "drawer",
        "input",
        "popover",
        "select",
        "surface",
        "switch",
        "textarea",
        "toggle-group",
      ].map((name) => `src/components/${name}/index.tsx`),
    ],
    outdir: "dist/components",
    root: "src/components",
    minify: true,
    splitting: true,
    banner: '"use client";',
    external: ["react"],
    plugins: [dts()],
  });

  await Bun.build({
    entrypoints: ["src/utils/cn.ts"],
    outdir: "dist/utils",
    root: "src/utils",
    minify: true,
    splitting: true,
    banner: '"use client";',
    external: ["react"],
    plugins: [dts()],
  });
})();
