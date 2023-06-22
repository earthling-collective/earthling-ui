import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "./dist/web",
    lib: {
      entry: {
        box: "./src/box/web.tsx",
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
