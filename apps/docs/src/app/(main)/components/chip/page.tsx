import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("chip");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="chip"
      anatomy={`<Chip scheme="primary">Design system</Chip>`}
    />
  );
}
