import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("scroll-area");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="scroll-area"
      anatomy={`<ScrollArea className="h-48">
  <p>Scrollable release notes and activity belong inside the viewport.</p>
</ScrollArea>`}
    />
  );
}
