import type { Metadata } from "next";
import { componentInformation } from "./component-info";

/** Page metadata for a component docs page, sourced from component-info. */
export function componentMetadata(path: string): Metadata {
  const info = componentInformation.find((c) => c.path === path);
  if (!info) return {};
  return {
    title: info.name,
    description: `${info.description}. Usage, anatomy, and installation for the Earthling UI ${info.name} component.`,
  };
}
