"use client";

import { useId, type ComponentProps } from "react";
import { Label } from "earthling-ui/label";
import { RadioGroup, RadioGroupItem } from "earthling-ui/radio";

const choices = [
  ["comfortable", "Comfortable"],
  ["compact", "Compact"],
  ["spacious", "Spacious"],
] as const;

export default function Example({
  defaultValue = "comfortable",
  ...props
}: ComponentProps<typeof RadioGroup>) {
  const groupId = useId();

  return (
    <RadioGroup
      aria-label="Interface density"
      defaultValue={defaultValue}
      {...props}
    >
      {choices.map(([value, label]) => {
        const id = groupId + "-" + value;
        return (
          <div key={value} className="flex items-center gap-2">
            <RadioGroupItem id={id} value={value} />
            <Label htmlFor={id}>{label}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}
