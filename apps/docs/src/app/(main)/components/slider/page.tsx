import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("slider");

export default async function Page() {
  return (
    <ComponentSublayout
      path="slider"
      anatomy={
        '<Slider defaultValue={[25, 75]} thumbLabels={["Minimum budget", "Maximum budget"]} />'
      }
      example={<Example />}
    />
  );
}
