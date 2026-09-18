"use client";

import { useState, type ComponentProps } from "react";
import { Slider } from "earthling-ui/slider";

type SliderExampleProps = Omit<
  ComponentProps<typeof Slider>,
  "defaultValue" | "value"
> & {
  range?: boolean;
};

function formatBudget(value: number) {
  return "$" + value * 10;
}

export default function Example({
  range = true,
  orientation = "horizontal",
  className,
  onValueChange,
  ...props
}: SliderExampleProps) {
  const [value, setValue] = useState<number[]>(range ? [25, 75] : [50]);
  const label = range ? "Monthly budget range" : "Monthly budget";
  const displayValue = value.map(formatBudget).join("–");

  function handleValueChange(nextValue: number[]) {
    setValue(nextValue);
    onValueChange?.(nextValue);
  }

  return (
    <div
      className={
        orientation === "vertical"
          ? "flex min-h-56 items-center gap-6"
          : "grid w-full max-w-sm gap-3"
      }
    >
      <div className="grid gap-1">
        <span className="text-sm font-medium">{label}</span>
        <output
          aria-label={range ? "Current budget range" : "Current budget"}
          className="text-muted-foreground text-sm tabular-nums"
        >
          {displayValue}
        </output>
      </div>
      <Slider
        aria-label={label}
        orientation={orientation}
        value={value}
        onValueChange={handleValueChange}
        thumbLabels={
          range ? ["Minimum monthly budget", "Maximum monthly budget"] : [label]
        }
        className={
          [orientation === "vertical" ? "h-48" : undefined, className]
            .filter(Boolean)
            .join(" ") || undefined
        }
        {...props}
      />
    </div>
  );
}
