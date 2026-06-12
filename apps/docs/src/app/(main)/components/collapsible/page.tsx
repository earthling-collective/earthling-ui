import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("collapsible");

export default async function () {
  return (
    <ComponentSublayout
      path="collapsible"
      anatomy={`<Collapsible>
  <CollapsibleTrigger />
  <CollapsibleContent />
</Collapsible>`}
    />
  );
}
