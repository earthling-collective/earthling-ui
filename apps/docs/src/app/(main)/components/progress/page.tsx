import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("progress");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="progress"
      anatomy={`<Progress aria-label="Uploading assets" max={100} value={64} />`}
    />
  );
}
