import { colors } from "./colors";
import { Preset } from "unocss";

export { colors };

export function presetZabukit(_options?: {}): Preset {
  return {
    name: "@zabukit/web",
    theme: { colors },
  };
}

export { Alert } from "./components/Alert";
export type { AlertProps } from "./components/Alert";
export { Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";
export { Link } from "./components/Link";
export type { LinkProps } from "./components/Link";
export { Validations } from "./components/Validations";
export type { ValidationsProps } from "./components/Validations";
