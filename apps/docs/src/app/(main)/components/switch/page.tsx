import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("switch");

export default async function Page() {
  return (
    <ComponentSublayout
      path="switch"
      anatomy={
        '<Switch id="announcements" defaultChecked />\n<Label htmlFor="announcements">Product announcements</Label>'
      }
      example={<Example />}
    />
  );
}
