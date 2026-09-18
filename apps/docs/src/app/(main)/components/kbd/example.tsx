"use client";

import type { ComponentProps } from "react";
import { Kbd } from "earthling-ui/kbd";

type KbdExampleProps = Pick<ComponentProps<typeof Kbd>, "size">;

export default function Example(props: KbdExampleProps) {
  return (
    <p className="text-muted-foreground flex items-center gap-2 text-sm">
      <span>Open search</span>
      <span className="flex items-center gap-1" aria-label="Control plus K">
        <Kbd {...props}>Ctrl</Kbd>
        <span aria-hidden="true">+</span>
        <Kbd {...props}>K</Kbd>
      </span>
    </p>
  );
}
