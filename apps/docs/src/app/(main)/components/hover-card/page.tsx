import { ComponentSublayout } from "../sublayout";

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
