"use client";
import type { ComponentPropInfo } from "@/lib/component-info";
import { Input } from "earthling-ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "earthling-ui/select";
import { Switch } from "earthling-ui/switch";
import { Button } from "earthling-ui/button";
import { useComponentSandbox } from "./context";
import { useId } from "react";

export function ComponentSandboxControls({
  controls,
}: {
  controls: ComponentPropInfo[];
}) {
  const { props, setProps, reset } = useComponentSandbox();
  const id = useId();
  if (!controls.length) return null;
  return (
    <div className="mt-5 rounded-xl border">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <h3 className="text-sm font-medium">Playground</h3>
        <Button material="ghost" scheme="neutral" size="sm" onClick={reset}>
          Reset
        </Button>
      </div>
      <div className="grid sm:grid-cols-2">
        {controls.map((control) => {
          const controlId = id + control.prop;
          const value = props[control.prop];
          const update = (value: string | boolean | number | undefined) =>
            setProps((p) => ({ ...p, [control.prop]: value }));
          return (
            <div
              key={control.prop}
              className="flex min-w-0 flex-col gap-2 border-b p-4 last:border-b-0 sm:odd:border-r"
            >
              <div className="flex items-center justify-between gap-3">
                <label
                  id={controlId + "-label"}
                  htmlFor={controlId}
                  className="text-sm font-medium"
                >
                  {control.label}
                </label>
                <code className="text-muted-foreground text-xs">
                  {control.prop}
                </code>
              </div>
              {(control.type === "string" || control.type === "number") && (
                <Input
                  id={controlId}
                  aria-describedby={controlId + "-help"}
                  type={control.type === "number" ? "number" : "text"}
                  value={typeof value === "boolean" ? "" : (value ?? "")}
                  onChange={(e) =>
                    update(
                      control.type === "number"
                        ? e.target.value === ""
                          ? undefined
                          : e.target.valueAsNumber
                        : e.target.value,
                    )
                  }
                />
              )}
              {control.type === "boolean" && (
                <Switch
                  id={controlId}
                  aria-describedby={controlId + "-help"}
                  checked={value === true}
                  onCheckedChange={update}
                />
              )}
              {(control.type === "select" ||
                control.type === "toggle-group") && (
                <Select
                  value={String(value ?? control.defaultValue ?? "")}
                  onValueChange={update}
                >
                  <SelectTrigger
                    id={controlId}
                    aria-describedby={controlId + "-help"}
                    className="w-full"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {control.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <p
                id={controlId + "-help"}
                className="text-muted-foreground text-xs leading-5"
              >
                {control.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
