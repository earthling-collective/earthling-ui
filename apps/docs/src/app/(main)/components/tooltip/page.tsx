import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("tooltip");

export default async function () {
  return (
    <ComponentSublayout
      path="tooltip"
      anatomy={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger />
    <TooltipContent />
  </Tooltip>
</TooltipProvider>`}
    />
  );
}
