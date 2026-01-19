import { ComponentSublayout } from "../sublayout";

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
