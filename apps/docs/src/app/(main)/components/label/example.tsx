"use client";

import { useId, type ComponentProps } from "react";
import { Checkbox } from "earthling-ui/checkbox";
import { Label } from "earthling-ui/label";

export default function Example({
  htmlFor: providedFor,
  ...props
}: ComponentProps<typeof Label>) {
  const generatedId = useId();
  const controlId = providedFor ?? generatedId;

  return (
    <div className="flex items-center gap-2">
      <Checkbox id={controlId} defaultChecked />
      <Label htmlFor={controlId} {...props}>
        Include me in the weekly digest
      </Label>
    </div>
  );
}
