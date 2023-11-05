import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      name: "styled",
      entry: {
        index: "./src/index.tsx",
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.src.json", entryRoot: "./src" }),
  ],
});
