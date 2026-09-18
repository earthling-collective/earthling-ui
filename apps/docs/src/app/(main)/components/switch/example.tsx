"use client";

import { useId, type ComponentProps } from "react";
import { Label } from "earthling-ui/label";
import { Switch } from "earthling-ui/switch";

export default function Example({
  id: providedId,
  defaultChecked = true,
  ...props
}: ComponentProps<typeof Switch>) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  return (
    <div className="flex items-center gap-3">
      <Switch id={id} defaultChecked={defaultChecked} {...props} />
      <div className="grid gap-1">
        <Label htmlFor={id}>Product announcements</Label>
        <p className="text-muted-foreground text-sm">
          Receive occasional release notes by email.
        </p>
      </div>
    </div>
  );
}
