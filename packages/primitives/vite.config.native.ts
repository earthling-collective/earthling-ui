import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    dedupe: ["react", "react-native"],
  },
  build: {
    outDir: "./dist/native",
    lib: {
      entry: {
        alert: "./src/alert/native.tsx",
        button: "./src/button/native.tsx",
      },
      name: "native",
    },
    rollupOptions: {
      external: ["react", "react-native"],
    },
  },
  plugins: [react(), dts()],
});
