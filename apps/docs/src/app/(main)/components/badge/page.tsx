import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("badge");

export default async function () {
  return <ComponentSublayout path="badge" anatomy={`<Badge />`} />;
}
