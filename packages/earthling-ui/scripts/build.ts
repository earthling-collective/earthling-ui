import dts from "bun-plugin-dts";

(async () => {
  await Bun.build({
    entrypoints: [
      "src/components/button/index.tsx",
      "src/components/input/index.tsx",
      "src/components/surface/index.tsx",
      "src/components/switch/index.tsx",
      "src/components/textarea/index.tsx",
      "src/components/toggle-group/index.tsx",
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
