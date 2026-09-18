import type { Metadata } from "next";
import { componentInformation } from "./component-info";

export function componentMetadata(path: string): Metadata {
  const info = componentInformation.find((c) => c.path === path);
  if (!info) return {};
  return {
    title: info.name,
    description: `${info.description.replace(/\.$/, "")}. Usage, API, and installation for the Earthling UI ${info.name} component.`,
  };
}
