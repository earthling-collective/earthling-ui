import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("spinner");

export default async function () {
  return <ComponentSublayout path="spinner" anatomy={`<Spinner />`} />;
}
