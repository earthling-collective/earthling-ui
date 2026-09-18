import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("skeleton");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="skeleton"
      anatomy={`<Skeleton aria-hidden="true" className="h-4 w-48" />`}
    />
  );
}
