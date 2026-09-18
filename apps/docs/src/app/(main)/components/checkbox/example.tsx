"use client";

import { useId, type ComponentProps } from "react";
import { Checkbox } from "earthling-ui/checkbox";
import { Label } from "earthling-ui/label";

export default function Example({
  id: providedId,
  ...props
}: ComponentProps<typeof Checkbox>) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} {...props} />
      <Label htmlFor={id}>Email me product updates</Label>
    </div>
  );
}
