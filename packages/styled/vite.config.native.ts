import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    conditions: ["react-native"],
  },
  build: {
    outDir: "./dist/native",
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
    dts({ tsConfigFilePath: "./tsconfig.src.json", entryRoot: "./src" }),
  ],
});
