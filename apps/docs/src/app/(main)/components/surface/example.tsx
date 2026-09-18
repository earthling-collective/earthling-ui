"use client";

import type { ComponentProps, ReactNode } from "react";
import { Surface } from "earthling-ui/surface";

type SurfaceExampleProps = Pick<
  ComponentProps<typeof Surface>,
  "interactive" | "material"
>;

function Content(): ReactNode {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium">Storage</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Workspace usage this month
          </p>
        </div>
        <i aria-hidden="true" className="icon-[lucide--hard-drive] size-5" />
      </div>
      <p className="mt-6 text-2xl font-semibold tabular-nums">18.4 GB</p>
      <p className="text-muted-foreground text-sm">of 50 GB used</p>
    </>
  );
}

export default function Example({
  interactive = false,
  material,
}: SurfaceExampleProps) {
  if (interactive) {
    return (
      <Surface asChild interactive material={material}>
        <button className="w-full max-w-sm text-left" type="button">
          <Content />
        </button>
      </Surface>
    );
  }

  return (
    <Surface className="w-full max-w-sm" material={material}>
      <Content />
    </Surface>
  );
}
