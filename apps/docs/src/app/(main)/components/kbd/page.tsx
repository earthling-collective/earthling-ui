import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("kbd");

export default async function () {
  return <ComponentSublayout path="kbd" anatomy={`<Kbd />`} />;
}
