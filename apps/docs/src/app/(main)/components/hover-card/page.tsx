import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("hover-card");

export default async function () {
  return (
    <ComponentSublayout
      path="hover-card"
      anatomy={`<HoverCard>
  <HoverCardTrigger />
  <HoverCardContent />
</HoverCard>`}
    />
  );
}
