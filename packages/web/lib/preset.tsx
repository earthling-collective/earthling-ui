import { colors } from "./colors";
import { Preset } from "unocss";

export function presetZabukit(_options?: {}): Preset {
  return {
    name: "@zabukit/web",
    theme: { colors },
  };
}
