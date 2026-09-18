"use client";

import { useId, type ComponentProps } from "react";
import { Label } from "earthling-ui/label";
import { TextArea } from "earthling-ui/textarea";

export default function Example({
  id: providedId,
  placeholder = "Share context for the team\u2026",
  ...props
}: ComponentProps<typeof TextArea>) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  return (
    <div className="grid w-full max-w-md gap-2">
      <Label htmlFor={id}>Project note</Label>
      <TextArea id={id} rows={4} placeholder={placeholder} {...props} />
    </div>
  );
}
