"use client";

import {
  ColorPicker,
  ColorArea,
  ColorSlider,
  ColorField,
  ColorSwatch,
} from "earthling-ui/color-picker";

export default function (props: Record<string, any>) {
  return (
    <ColorPicker defaultValue="#3b82f6" {...props}>
      <div className="flex flex-col gap-3">
        <ColorSwatch className="mx-auto" />
        <ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />
        <ColorSlider colorSpace="hsb" channel="hue" />
        <ColorSlider channel="alpha" />
        <ColorField label="Hex" />
      </div>
    </ColorPicker>
  );
}
