import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("tooltip");

export default async function () {
  return (
    <ComponentSublayout
      path="tooltip"
      anatomy={
        '<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger aria-label="Copy project link">Copy</TooltipTrigger>\n    <TooltipContent>\n      Copy project link\n      <TooltipArrow />\n    </TooltipContent>\n  </Tooltip>\n</TooltipProvider>'
      }
      example={<Example />}
    />
  );
}
