"use client";

import { useId, type ComponentProps } from "react";
import { Input } from "earthling-ui/input";
import { Label } from "earthling-ui/label";

export default function Example({
  id: providedId,
  placeholder = "you@example.com",
  ...props
}: ComponentProps<typeof Input>) {
  const generatedId = useId();
  const id = providedId ?? generatedId;

  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor={id}>Work email</Label>
      <Input
        id={id}
        type="email"
        autoComplete="email"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
