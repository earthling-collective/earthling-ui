import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("breadcrumbs");

export default async function () {
  return (
    <ComponentSublayout
      path="breadcrumbs"
      anatomy="<Breadcrumbs><Breadcrumb /></Breadcrumbs>"
    />
  );
}
