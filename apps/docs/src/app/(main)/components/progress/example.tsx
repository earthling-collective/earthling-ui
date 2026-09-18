"use client";

import type { ComponentProps } from "react";
import { Progress } from "earthling-ui/progress";

type ProgressExampleProps = Pick<
  ComponentProps<typeof Progress>,
  "max" | "scheme" | "value"
> & {
  indeterminate?: boolean;
};

export default function Example({
  indeterminate = false,
  max = 100,
  scheme,
  value = 64,
}: ProgressExampleProps) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
  const safeValue =
    value == null || !Number.isFinite(value)
      ? 0
      : Math.min(Math.max(value, 0), safeMax);

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm">
        <span>{indeterminate ? "Syncing workspace" : "Uploading assets"}</span>
        {!indeterminate && (
          <span className="text-muted-foreground tabular-nums">
            {safeValue} / {safeMax}
          </span>
        )}
      </div>
      <Progress
        aria-label={indeterminate ? "Syncing workspace" : "Uploading assets"}
        max={safeMax}
        scheme={scheme}
        value={indeterminate ? null : safeValue}
      />
    </div>
  );
}
