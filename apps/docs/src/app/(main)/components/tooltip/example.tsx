import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "earthling-ui/tooltip";
import { Button } from "earthling-ui/button";

export default function ({ scheme, ...props }: Record<string, any>) {
  return (
    <TooltipProvider>
      <Tooltip {...props}>
        <TooltipTrigger asChild>
          <Button material="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent scheme={scheme}>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
