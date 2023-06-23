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
        box: "./src/box/index.tsx",
        button: "./src/button/index.tsx",
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-native"],
    },
  },
  plugins: [
    react(),
    dts({ tsConfigFilePath: "./tsconfig.src.json", entryRoot: "./src" }),
  ],
});
