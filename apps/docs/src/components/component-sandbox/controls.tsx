"use client";

import { ComponentPropInfo } from "@/lib/component-info";
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
import { useComponentSandbox } from "./context";

export interface ComponentSandboxControlsProps {
  controls: ComponentPropInfo[];
}

export function ComponentSandboxControls({
  controls,
}: ComponentSandboxControlsProps) {
  const [props, setProps] = useComponentSandbox();

  if (!controls?.length) return null;

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_auto] overflow-hidden rounded-lg border">
      <div className="bg-muted text-muted-foreground col-span-full grid grid-cols-subgrid grid-rows-1 items-center gap-4 border-b px-4 py-2 text-sm font-medium">
        <div></div>
        <div>Prop</div>
        <div>Default Value</div>
        <div>Value</div>
      </div>
      {controls
        .sort((a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0))
        .map((control) => (
          <div
            key={control.prop}
            className="col-span-full grid grid-cols-subgrid grid-rows-1 items-center gap-4 p-4 not-last:border-b"
          >
            <div>
              <label className="text font-medium">{control.label}</label>
              <div className="text-muted-foreground text-sm">
                {control.description}
              </div>
            </div>
            <div>
              <span className="bg-neutral rounded px-1 text-sm">
                {control.prop}
              </span>
            </div>
            <div>{`${control.defaultValue}`}</div>
            <div>
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
          </div>
        ))}
    </div>
  );
}
