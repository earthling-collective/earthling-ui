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
      entry: [
        resolve(__dirname, "src/main.web.tsx"),
        resolve(__dirname, "src/main.uno.tsx"),
      ],
      name: "web",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [react(), dts()],
});
