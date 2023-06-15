import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    dedupe: ["react"],
  },
  build: {
    outDir: "./dist/web",
    lib: {
      entry: {
        alert: "./src/alert/web.tsx",
        button: "./src/button/web.tsx",
      },
      name: "web",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [react(), dts()],
});
