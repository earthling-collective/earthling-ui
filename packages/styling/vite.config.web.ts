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
      name: "styled",
      entry: {
        index: "./src/index.tsx",
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-native"],
    },
  },
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.src.json", entryRoot: "./src" }),
  ],
});
