import { ComponentSublayout } from "../sublayout";
import Example from "./example";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("breadcrumbs");

export default async function () {
  return (
    <ComponentSublayout
      example={<Example />}
      path="breadcrumbs"
      anatomy={`<Breadcrumbs aria-label="Breadcrumb">
  <Breadcrumb><a href="/">Docs</a></Breadcrumb>
  <Breadcrumb><a href="/components">Components</a></Breadcrumb>
  <Breadcrumb current>Breadcrumbs</Breadcrumb>
</Breadcrumbs>`}
    />
  );
}
