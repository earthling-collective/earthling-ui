"use client";

import type { ComponentProps } from "react";
import { Button } from "earthling-ui/button";

export default function Example({
  shape,
  ...props
}: ComponentProps<typeof Button>) {
  const iconOnly = shape === "icon";

  return (
    <Button
      type="button"
      shape={shape}
      aria-label={iconOnly ? "Create project" : undefined}
      {...props}
    >
      <i aria-hidden="true" className="icon-[lucide--plus]" />
      {!iconOnly && "Create project"}
    </Button>
  );
}
