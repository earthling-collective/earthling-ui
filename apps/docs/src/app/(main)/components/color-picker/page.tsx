import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="color-picker"
      anatomy={`<ColorPicker defaultValue="#ff0000">
  <ColorSwatch />
  <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />
  <ColorSlider colorSpace="hsb" channel="hue" />
  <ColorField label="Hex" />
</ColorPicker>`}
    />
  );
}
