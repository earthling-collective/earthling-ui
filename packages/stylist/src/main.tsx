import { colors } from "./theme.colors";
import { Preset } from "unocss";

export function presetEarthling(_options?: {}): Preset {
  return {
    name: "earthling-ui",
    theme: { colors },
  };
}
