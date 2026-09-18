import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("select");

export default async function Page() {
  return (
    <ComponentSublayout
      path="select"
      anatomy={
        '<Label htmlFor="frequency">Digest frequency</Label>\n<Select defaultValue="weekly">\n  <SelectTrigger id="frequency">\n    <SelectValue placeholder="Choose a frequency" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="daily">Daily</SelectItem>\n    <SelectItem value="weekly">Weekly</SelectItem>\n  </SelectContent>\n</Select>'
      }
      example={<Example />}
    />
  );
}
