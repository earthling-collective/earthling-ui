import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("scroll-area");

export default async function () {
  return (
    <ComponentSublayout
      path="scroll-area"
      anatomy={`<ScrollArea>
  {children}
</ScrollArea>`}
    />
  );
}
