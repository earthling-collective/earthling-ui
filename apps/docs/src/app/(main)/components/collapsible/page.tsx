import { ComponentSublayout } from "../sublayout";

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
