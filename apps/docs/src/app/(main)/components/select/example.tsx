"use client";

import { useId, type ComponentProps } from "react";
import { Label } from "earthling-ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "earthling-ui/select";

export default function Example({
  defaultValue = "weekly",
  ...props
}: ComponentProps<typeof Select>) {
  const id = useId();

  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor={id}>Digest frequency</Label>
      <Select defaultValue={defaultValue} {...props}>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Choose a frequency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="daily">Daily</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
