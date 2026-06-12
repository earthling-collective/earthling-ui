import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("switch");

export default async function () {
  return <ComponentSublayout path="switch" anatomy="<Switch />" />;
}
