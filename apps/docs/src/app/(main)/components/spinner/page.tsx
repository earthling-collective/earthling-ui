import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("spinner");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="spinner"
      anatomy={`<Spinner aria-label="Syncing changes" size="md" />`}
    />
  );
}
