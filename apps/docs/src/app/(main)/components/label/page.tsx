import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("label");

export default async function () {
  return <ComponentSublayout path="label" anatomy={`<Label />`} />;
}
