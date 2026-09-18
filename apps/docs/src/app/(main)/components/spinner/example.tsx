"use client";

import type { ComponentProps } from "react";
import { Spinner } from "earthling-ui/spinner";

type SpinnerExampleProps = Pick<
  ComponentProps<typeof Spinner>,
  "scheme" | "size"
>;

export default function Example(props: SpinnerExampleProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Spinner {...props} aria-label="Syncing changes" />
      <span>Syncing changes…</span>
    </div>
  );
}
