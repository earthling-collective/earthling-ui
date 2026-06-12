import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("progress");

export default async function () {
  return <ComponentSublayout path="progress" anatomy={`<Progress value={50} />`} />;
}
