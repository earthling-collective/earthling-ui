import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("collapsible");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="collapsible"
      anatomy={`<Collapsible>
  <CollapsibleTrigger>Show repository access</CollapsibleTrigger>
  <CollapsibleContent>Three connected repositories.</CollapsibleContent>
</Collapsible>`}
    />
  );
}
