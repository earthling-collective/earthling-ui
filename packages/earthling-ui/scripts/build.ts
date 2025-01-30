import dts from "bun-plugin-dts";

(async () => {
  await Bun.build({
    entrypoints: [
      "src/components/button/index.tsx",
      "src/components/input/index.tsx",
      "src/components/surface/index.tsx",
      "src/components/textarea/index.tsx",
      "src/components/theme-switcher/index.tsx",
    ],
    outdir: "dist/components",
    root: "src/components",
    minify: true,
    splitting: true,
    banner: '"use client";',
    plugins: [dts()],
  });

  await Bun.build({
    entrypoints: ["src/utils/cn.ts"],
    outdir: "dist/utils",
    root: "src/utils",
    minify: true,
    splitting: true,
    banner: '"use client";',
    plugins: [dts()],
  });
})();
