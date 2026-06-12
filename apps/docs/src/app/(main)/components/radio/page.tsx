import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("radio");

export default async function () {
  return (
    <ComponentSublayout
      path="radio"
      anatomy={`<RadioGroup>
  <RadioGroupItem value="option-1" />
  <RadioGroupItem value="option-2" />
</RadioGroup>`}
    />
  );
}
