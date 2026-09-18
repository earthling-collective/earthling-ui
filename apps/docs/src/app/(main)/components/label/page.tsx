import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("label");

export default async function Page() {
  return (
    <ComponentSublayout
      path="label"
      anatomy={
        '<Label htmlFor="email">Email</Label>\n<Input id="email" type="email" />'
      }
      example={<Example />}
    />
  );
}
