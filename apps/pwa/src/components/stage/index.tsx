"use client";

import { ComponentPropInfo } from "@/lib/component-info";
import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "earthling-ui/select";
import { Switch } from "earthling-ui/switch";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";
import { cn } from "earthling-ui/utils/cn";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { useState } from "react";

export interface StageProps
  extends Pick<React.ComponentProps<"div">, "className"> {
  defaultProps?: object;
  controls: ComponentPropInfo[];
  children?: (props: Record<string, any>) => React.ReactNode;
}

export function Stage({
  className,
  defaultProps,
  controls,
  children,
}: StageProps) {
  const [props, setProps] = useState(
    defaultProps ??
      Object.fromEntries(controls.map((x) => [x.prop, x.defaultValue])),
  );

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "before:user-select-none relative flex aspect-video flex-row items-center justify-center overflow-hidden rounded-xl border border-current/10 bg-current/5 shadow-xs before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:bg-[radial-gradient(currentColor_1px,transparent_1px)] before:[background-size:16px_16px] before:opacity-10",
        )}
      >
        <ErrorBoundary
          errorComponent={({ error }) => <div>Error: {error.message}</div>}
        >
          {children?.(props)}
        </ErrorBoundary>
      </div>
      <div className="flex flex-col gap-4 py-4">
        {controls
          .sort((a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0))
          .map((control) => (
            <div key={control.prop} className="flex flex-col items-start gap-2">
              <label className="text-sm font-medium">{control.label}</label>
              {control.type === "string" && (
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
              )}
              {control.type === "boolean" && (
                <Switch
                  checked={(props as any)[control.prop] || false}
                  onCheckedChange={(checked) => {
                    setProps({
                      ...props,
                      [control.prop]: checked || false,
                    });
                  }}
                />
              )}
              {control.type === "select" && (
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <Select
                    value={(props as any)[control.prop] || control.defaultValue}
                    onValueChange={(value) => {
                      setProps({
                        ...props,
                        [control.prop]: value,
                      });
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {control.options.map((option) => (
                        <SelectItem value={option} key={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              {control.type === "toggle-group" && (
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <ToggleGroup
                    type="single"
                    className="flex-wrap"
                    value={(props as any)[control.prop] || ""}
                  >
                    {control.options.map((option) => (
                      <ToggleGroupItem
                        value={option}
                        key={option}
                        onClick={() => {
                          setProps({
                            ...props,
                            [control.prop]: option,
                          });
                        }}
                      >
                        {option}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
