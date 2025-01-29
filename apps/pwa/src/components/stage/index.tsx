"use client";

import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
import { cn } from "earthling-ui/utils/cn";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { ElementType, useState } from "react";

export interface StageProps
  extends Pick<React.ComponentProps<"div">, "className" | "children"> {
  component: ElementType;
  defaultProps?: object;
  controls: StageControl[];
}

export type StageControl =
  | {
      label: string;
      prop: string;
      type: "select";
      options: string[];
    }
  | { label: string; prop: string; type: "string" }
  | { label: string; prop: string; type: "number" };

export function Stage({
  className,
  component: Component,
  defaultProps,
  controls,
  children,
}: StageProps) {
  const [props, setProps] = useState(defaultProps ?? {});

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "before:user-select-none relative flex h-100 flex-row items-center justify-center overflow-hidden rounded-xl border border-current/10 bg-current/5 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(currentColor_1px,transparent_1px)] before:[background-size:16px_16px] before:opacity-10",
        )}
      >
        <ErrorBoundary
          errorComponent={({ error }) => <div>Error: {error.message}</div>}
        >
          <Component {...props}>{children}</Component>
        </ErrorBoundary>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {controls.map((control) => (
          <div key={control.prop} className="flex flex-col gap-2">
            <label className="text-sm font-medium">{control.label}</label>
            <Input
              className="flex-1 rounded-md border border-current/10 bg-current/5 px-3 py-2 text-sm text-current/60 outline-none"
              value={(props as any)[control.prop] || ""}
              onChange={(e) => {
                setProps({
                  ...props,
                  [control.prop]: e.target.value || undefined,
                });
              }}
            />
            {"options" in control && (
              <div className="flex flex-row gap-2">
                {control.options.map((option) => (
                  <Button
                    key={option}
                    size={"sm"}
                    variant={
                      (props as any)[control.prop] === option
                        ? "filled"
                        : "outline"
                    }
                    onClick={() => {
                      setProps({
                        ...props,
                        [control.prop]: option,
                      });
                    }}
                  >
                    {option}
                  </Button>
                ))}
                <Button
                  size={"sm"}
                  variant={"ghost"}
                  onClick={() => {
                    setProps({
                      ...props,
                      [control.prop]: undefined,
                    });
                  }}
                >
                  <i className="icon-[lucide--x]" />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
