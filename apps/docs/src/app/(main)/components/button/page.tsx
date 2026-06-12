import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("button");

export default async function () {
  return <ComponentSublayout path="button" anatomy={`<Button />`} />;
}
