"use client";

import { RadioGroup, RadioGroupItem } from "earthling-ui/radio";

export default function (props: Record<string, any>) {
  return (
    <RadioGroup defaultValue="option-one" {...props}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <label htmlFor="option-one">Default</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <label htmlFor="option-two">Comfortable</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <label htmlFor="option-three">Compact</label>
      </div>
    </RadioGroup>
  );
}
