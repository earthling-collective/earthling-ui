"use client";

import { Checkbox } from "earthling-ui/checkbox";

export default function (props: Record<string, any>) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...props} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
