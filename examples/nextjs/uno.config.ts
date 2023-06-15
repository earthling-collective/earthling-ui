import { defineConfig, presetUno } from "unocss";
import { presetEarthling } from "earthling-ui/uno";

export default defineConfig({
  presets: [presetUno(), presetEarthling()],
  content: {
    filesystem: ["node_modules/earthling-ui/src/**/*.{ts,tsx,js,jsx}"],
  },
});
