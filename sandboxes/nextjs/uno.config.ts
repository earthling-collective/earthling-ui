import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  content: {
    filesystem: ["node_modules/ecol-ui/src/**/*.{ts,tsx,js,jsx}"],
  },
});
