import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("chip");

export default async function () {
  return <ComponentSublayout path="chip" anatomy="<Chip />" />;
}
