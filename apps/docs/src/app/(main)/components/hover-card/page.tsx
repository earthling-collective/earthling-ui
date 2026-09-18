import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("hover-card");

export default async function () {
  return (
    <ComponentSublayout
      path="hover-card"
      anatomy={
        "<HoverCard>\n  <HoverCardTrigger>@earthling-ui</HoverCardTrigger>\n  <HoverCardContent>\n    Accessible React primitives with carefully tuned defaults.\n  </HoverCardContent>\n</HoverCard>"
      }
      example={<Example />}
    />
  );
}
