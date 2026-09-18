"use client";

import type { ComponentProps } from "react";
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
} from "earthling-ui/color-picker";

type ColorPickerExampleProps = Omit<
  ComponentProps<typeof ColorPicker>,
  "children"
>;

export default function Example({
  defaultValue = "#6366f1",
  ...props
}: ColorPickerExampleProps) {
  return (
    <ColorPicker defaultValue={defaultValue} {...props}>
      <div className="grid gap-4 sm:grid-cols-[auto_12rem] sm:items-start">
        <ColorArea
          colorSpace="hsb"
          xChannel="saturation"
          yChannel="brightness"
        />
        <div className="grid gap-3">
          <div className="flex items-center gap-3">
            <ColorSwatch aria-label="Selected color" />
            <ColorField label="Hex color" />
          </div>
          <ColorSlider label="Hue" colorSpace="hsb" channel="hue" />
          <ColorSlider label="Opacity" channel="alpha" />
        </div>
      </div>
    </ColorPicker>
  );
}
