"use client";

import type { ComponentProps } from "react";
import { Separator } from "earthling-ui/separator";

type SeparatorExampleProps = Pick<
  ComponentProps<typeof Separator>,
  "decorative" | "orientation"
>;

export default function Example({
  decorative = true,
  orientation = "horizontal",
}: SeparatorExampleProps) {
  const vertical = orientation === "vertical";

  return (
    <div
      className={
        vertical ? "flex h-16 items-center gap-4" : "w-full max-w-sm space-y-4"
      }
    >
      <span className="text-sm font-medium">Overview</span>
      <Separator
        aria-label={decorative ? undefined : "Section divider"}
        decorative={decorative}
        orientation={orientation}
      />
      <span className="text-muted-foreground text-sm">Activity</span>
    </div>
  );
}
