import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("skeleton");

export default async function () {
  return <ComponentSublayout path="skeleton" anatomy={`<Skeleton />`} />;
}
