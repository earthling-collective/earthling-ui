import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    conditions: ["import"],
  },
  build: {
    outDir: "./dist/web",
    lib: {
      entry: {
        index: "./src/index.tsx",
        //atoms
        box: "./src/box/index.web.tsx",
        input: "./src/input/index.web.tsx",
        pressable: "./src/pressable/index.web.tsx",
        text: "./src/text/index.web.tsx",
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-native"],
    },
  },
  plugins: [
    react(),
    dts({
      tsConfigFilePath: "./tsconfig.web.json",
      entryRoot: "./src",
    }),
  ],
});
