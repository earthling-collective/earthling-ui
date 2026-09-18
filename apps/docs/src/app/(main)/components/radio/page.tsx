import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("radio");

export default async function Page() {
  return (
    <ComponentSublayout
      path="radio"
      anatomy={
        '<RadioGroup defaultValue="email" aria-label="Notification method">\n  <div>\n    <RadioGroupItem id="email" value="email" />\n    <Label htmlFor="email">Email</Label>\n  </div>\n  <div>\n    <RadioGroupItem id="sms" value="sms" />\n    <Label htmlFor="sms">Text message</Label>\n  </div>\n</RadioGroup>'
      }
      example={<Example />}
    />
  );
}
