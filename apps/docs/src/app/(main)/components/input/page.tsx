import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("input");

export default async function Page() {
  return (
    <ComponentSublayout
      path="input"
      anatomy={
        '<Label htmlFor="email">Email</Label>\n<Input id="email" type="email" placeholder="you@example.com" />'
      }
      example={<Example />}
    />
  );
}
