import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("textarea");

export default async function Page() {
  return (
    <ComponentSublayout
      path="textarea"
      anatomy={
        '<Label htmlFor="message">Message</Label>\n<TextArea id="message" rows={4} placeholder="Share context…" />'
      }
      example={<Example />}
    />
  );
}
