import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("surface");

export default async function () {
  return <ComponentSublayout path="surface" anatomy="<Surface />" />;
}
