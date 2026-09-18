"use client";

import type { ComponentProps } from "react";
import { ToggleGroup, ToggleGroupItem } from "earthling-ui/toggle-group";

type ToggleGroupExampleProps = Pick<
  ComponentProps<typeof ToggleGroup>,
  "className" | "disabled" | "material" | "scheme" | "size"
>;

const themes = [
  ["system", "icon-[lucide--monitor]", "System"],
  ["light", "icon-[lucide--sun]", "Light"],
  ["dark", "icon-[lucide--moon]", "Dark"],
] as const;

export default function Example(props: ToggleGroupExampleProps) {
  return (
    <ToggleGroup
      type="single"
      defaultValue="system"
      aria-label="Color theme"
      {...props}
    >
      {themes.map(([value, icon, label]) => (
        <ToggleGroupItem key={value} value={value} aria-label={label}>
          <i aria-hidden="true" className={icon} />
          <span>{label}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
