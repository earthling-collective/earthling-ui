"use client";

import type { ComponentProps } from "react";
import { Skeleton } from "earthling-ui/skeleton";

type SkeletonExampleProps = ComponentProps<typeof Skeleton>;

export default function Example(props: SkeletonExampleProps) {
  return (
    <div
      aria-label="Loading profile"
      className="flex w-full max-w-sm items-center gap-4"
      role="status"
    >
      <Skeleton
        {...props}
        aria-hidden="true"
        className="size-12 rounded-full"
      />
      <div className="flex-1 space-y-2" aria-hidden="true">
        <Skeleton className="h-4 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
