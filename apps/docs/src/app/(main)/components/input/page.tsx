import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("input");

export default async function () {
  return <ComponentSublayout path="input" anatomy="<Input />" />;
}
