import { ComponentSublayout } from "../sublayout";

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
