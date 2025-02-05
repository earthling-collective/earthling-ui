"use client";

import { cn } from "earthling-ui/utils/cn";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { useComponentSandbox } from "./context";
import { useMemo } from "react";
import dynamic from "next/dynamic";

export interface ComponentSandboxPreviewProps {
  path: string;
}

export function ComponentSandboxPreview({
  path,
}: ComponentSandboxPreviewProps) {
  const [props, setProps] = useComponentSandbox();

  const Comp = useMemo(
    () =>
      dynamic(
        () =>
          import(`@/app/(main)/components/${path}/example`).then(
            (x) => x.default,
          ),
        {
          loading: () => (
            <i className="icon-[svg-spinners--blocks-shuffle-2]" />
          ),
        },
      ),
    [path],
  );

  return (
    <div
      className={cn(
        "before:user-select-none relative flex h-100 flex-row items-center justify-center overflow-hidden rounded-xl border border-current/10 bg-current/5 shadow-xs before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:bg-[radial-gradient(currentColor_1px,transparent_1px)] before:[background-size:16px_16px] before:opacity-10",
      )}
    >
      <ErrorBoundary
        errorComponent={({ error }) => <div>Error: {error.message}</div>}
      >
        <div className="mx-8 flex w-full max-w-md flex-col items-center">
          <Comp {...props} />
        </div>
      </ErrorBoundary>
    </div>
  );
}
