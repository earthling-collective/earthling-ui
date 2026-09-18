import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("toggle-group");

export default async function Page() {
  return (
    <ComponentSublayout
      path="toggle-group"
      anatomy={
        '<ToggleGroup type="single" defaultValue="list" aria-label="View">\n  <ToggleGroupItem value="list">List</ToggleGroupItem>\n  <ToggleGroupItem value="grid">Grid</ToggleGroupItem>\n</ToggleGroup>'
      }
      example={<Example />}
    />
  );
}
