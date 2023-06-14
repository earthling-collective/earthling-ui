import { colors } from "./theme.colors";
import { Preset } from "unocss";

export function presetZabukit(_options?: {}): Preset {
  return {
    name: "more-tools",
    theme: { colors },
  };
}
