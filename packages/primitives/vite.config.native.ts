import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./dist/native",
    lib: {
      entry: {
        box: "./src/box/native.tsx",
        button: "./src/button/native.tsx",
        provider: "./src/provider/index.tsx",
      },
    },
    rollupOptions: {
      external: ["react", "react-native"],
    },
  },
  plugins: [react(), dts({ tsConfigFilePath: "./tsconfig.src.json" })],
});
