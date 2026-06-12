import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("checkbox");

export default async function () {
  return <ComponentSublayout path="checkbox" anatomy={`<Checkbox />`} />;
}
