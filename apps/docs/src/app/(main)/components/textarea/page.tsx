import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("textarea");

export default async function () {
  return <ComponentSublayout path="textarea" anatomy="<Textarea />" />;
}
