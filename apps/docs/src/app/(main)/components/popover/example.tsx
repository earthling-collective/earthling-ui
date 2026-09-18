"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from "earthling-ui/popover";

type PopoverExampleProps = {
  align?: ComponentProps<typeof PopoverContent>["align"];
  modal?: ComponentProps<typeof Popover>["modal"];
  side?: ComponentProps<typeof PopoverContent>["side"];
  sideOffset?: number;
};

export default function Example({
  align = "center",
  modal,
  side = "bottom",
  sideOffset = 4,
}: PopoverExampleProps) {
  return (
    <Popover modal={modal}>
      <PopoverTrigger asChild>
        <Button material="outline">Delivery details</Button>
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className="grid w-80 gap-4"
        side={side}
        sideOffset={sideOffset}
      >
        <PopoverArrow />
        <div>
          <p className="text-sm font-semibold">Delivery details</p>
          <p className="text-muted-foreground text-sm">
            Choose where status updates should be sent.
          </p>
        </div>
        <label className="grid gap-1.5 text-sm font-medium">
          Email address
          <input
            className="bg-background focus-visible:ring-outline h-10 rounded-lg border px-3 font-normal outline-none focus-visible:ring-2"
            defaultValue="mira@example.com"
            type="email"
          />
        </label>
        <Button>Save preference</Button>
      </PopoverContent>
    </Popover>
  );
}
