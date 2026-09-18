import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";
import { ComponentSublayout } from "../sublayout";

export const metadata = componentMetadata("color-picker");

export default async function Page() {
  return (
    <ComponentSublayout
      path="color-picker"
      anatomy={
        '<ColorPicker defaultValue="#6366f1">\n  <ColorSwatch />\n  <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />\n  <ColorSlider label="Hue" colorSpace="hsb" channel="hue" />\n  <ColorField label="Hex color" />\n</ColorPicker>'
      }
      example={<Example />}
    />
  );
}
