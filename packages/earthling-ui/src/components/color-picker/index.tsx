"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import {
  ColorPicker as ColorPickerPrimitive,
  ColorArea as ColorAreaPrimitive,
  ColorThumb,
  ColorSlider as ColorSliderPrimitive,
  SliderTrack,
  ColorSwatch as ColorSwatchPrimitive,
  ColorField as ColorFieldPrimitive,
  ColorSwatchPicker as ColorSwatchPickerPrimitive,
  ColorSwatchPickerItem as ColorSwatchPickerItemPrimitive,
  Input,
  Label,
  parseColor,
} from "react-aria-components";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

// Re-export parseColor for convenience
export { parseColor };

// ColorPicker
const ColorPicker = ColorPickerPrimitive;

// ColorSwatch
const colorSwatchVariants = cva(
  "rounded-md border border-current/20 shadow-sm forced-color-adjust-none",
  {
    variants: {
      size: {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface ColorSwatchProps
  extends ComponentPropsWithoutRef<typeof ColorSwatchPrimitive>,
    VariantProps<typeof colorSwatchVariants> {}

const ColorSwatch = forwardRef<
  ComponentRef<typeof ColorSwatchPrimitive>,
  ColorSwatchProps
>(({ className, size, ...props }, ref) => (
  <ColorSwatchPrimitive
    ref={ref}
    className={cn(colorSwatchVariants({ size }), className)}
    {...props}
  />
));
ColorSwatch.displayName = "ColorSwatch";

// ColorArea
const colorAreaVariants = cva(
  "rounded-md border border-current/10 shadow-sm forced-color-adjust-none",
  {
    variants: {
      size: {
        sm: "h-32 w-32",
        md: "h-48 w-48",
        lg: "h-64 w-64",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface ColorAreaProps
  extends ComponentPropsWithoutRef<typeof ColorAreaPrimitive>,
    VariantProps<typeof colorAreaVariants> {}

const ColorArea = forwardRef<
  ComponentRef<typeof ColorAreaPrimitive>,
  ColorAreaProps
>(({ className, size, ...props }, ref) => (
  <ColorAreaPrimitive
    ref={ref}
    className={cn(colorAreaVariants({ size }), className)}
    {...props}
  >
    <ColorThumb className="h-5 w-5 rounded-full border-2 border-white shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2" />
  </ColorAreaPrimitive>
));
ColorArea.displayName = "ColorArea";

// ColorSlider
export interface ColorSliderProps
  extends ComponentPropsWithoutRef<typeof ColorSliderPrimitive> {
  label?: string;
}

const ColorSlider = forwardRef<
  ComponentRef<typeof ColorSliderPrimitive>,
  ColorSliderProps
>(({ className, label, ...props }, ref) => (
  <ColorSliderPrimitive
    ref={ref}
    className={cn("group flex w-full flex-col gap-1", className)}
    {...props}
  >
    {label && (
      <Label className="text-sm font-medium text-foreground">{label}</Label>
    )}
    <SliderTrack className="relative h-6 w-full rounded-md border border-current/10 shadow-sm forced-color-adjust-none">
      <ColorThumb className="top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2" />
    </SliderTrack>
  </ColorSliderPrimitive>
));
ColorSlider.displayName = "ColorSlider";

// ColorField
export interface ColorFieldProps
  extends ComponentPropsWithoutRef<typeof ColorFieldPrimitive> {
  label?: string;
}

const ColorField = forwardRef<
  ComponentRef<typeof ColorFieldPrimitive>,
  ColorFieldProps
>(({ className, label, ...props }, ref) => (
  <ColorFieldPrimitive
    ref={ref}
    className={cn("group flex flex-col gap-1", className)}
    {...props}
  >
    {label && (
      <Label className="text-sm font-medium text-foreground">{label}</Label>
    )}
    <Input className="h-10 w-full rounded-control border border-current/30 bg-background px-3 text-sm font-medium text-foreground ring-offset-background transition-colors hover:border-current/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline disabled:pointer-events-none disabled:opacity-50" />
  </ColorFieldPrimitive>
));
ColorField.displayName = "ColorField";

// ColorSwatchPicker
const ColorSwatchPicker = forwardRef<
  ComponentRef<typeof ColorSwatchPickerPrimitive>,
  ComponentPropsWithoutRef<typeof ColorSwatchPickerPrimitive>
>(({ className, ...props }, ref) => (
  <ColorSwatchPickerPrimitive
    ref={ref}
    className={cn("flex flex-wrap gap-2", className)}
    {...props}
  />
));
ColorSwatchPicker.displayName = "ColorSwatchPicker";

// ColorSwatchPickerItem
const ColorSwatchPickerItem = forwardRef<
  ComponentRef<typeof ColorSwatchPickerItemPrimitive>,
  ComponentPropsWithoutRef<typeof ColorSwatchPickerItemPrimitive>
>(({ className, color, ...props }, ref) => (
  <ColorSwatchPickerItemPrimitive
    ref={ref}
    color={color}
    className={cn(
      "h-8 w-8 cursor-pointer rounded-md border border-current/20 shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 data-selected:ring-2 data-selected:ring-primary",
      className
    )}
    {...props}
  />
));
ColorSwatchPickerItem.displayName = "ColorSwatchPickerItem";

export {
  ColorPicker,
  ColorSwatch,
  ColorArea,
  ColorSlider,
  ColorField,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
};
