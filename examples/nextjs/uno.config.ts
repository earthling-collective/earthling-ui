import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  content: {
    filesystem: ["node_modules/earthling-ui/src/**/*.{ts,tsx,js,jsx}"],
  },
});
