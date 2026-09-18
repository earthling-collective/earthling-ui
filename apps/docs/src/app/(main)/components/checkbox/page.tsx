import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("checkbox");

export default async function Page() {
  return (
    <ComponentSublayout
      path="checkbox"
      anatomy={
        '<Checkbox id="updates" defaultChecked />\n<Label htmlFor="updates">Email me product updates</Label>'
      }
      example={<Example />}
    />
  );
}
