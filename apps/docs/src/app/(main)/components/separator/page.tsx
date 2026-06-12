import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("separator");

export default async function () {
  return <ComponentSublayout path="separator" anatomy="<Separator />" />;
}
