"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "earthling-ui/tooltip";

type TooltipExampleProps = {
  delayDuration?: number;
  scheme?: ComponentProps<typeof TooltipContent>["scheme"];
  side?: ComponentProps<typeof TooltipContent>["side"];
};

export default function Example({
  delayDuration = 500,
  scheme,
  side = "top",
}: TooltipExampleProps) {
  return (
    <TooltipProvider delayDuration={delayDuration} skipDelayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="Copy project link"
            className="size-10 px-0"
            material="outline"
          >
            <i aria-hidden="true" className="icon-[lucide--link] size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent scheme={scheme} side={side}>
          Copy project link
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
