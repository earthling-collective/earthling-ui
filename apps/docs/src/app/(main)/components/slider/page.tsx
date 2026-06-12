import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("slider");

export default async function () {
  return <ComponentSublayout path="slider" anatomy="<Slider />" />;
}
