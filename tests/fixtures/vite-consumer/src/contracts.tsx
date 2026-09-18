import { createRef } from "react";
import {
  DrawerOverlay,
  DrawerTitle,
  DrawerDescription,
  type ButtonProps,
} from "earthling-ui";
import { type SliderProps } from "earthling-ui/slider";

export const drawerRefs = (
  <>
    <DrawerOverlay ref={createRef<HTMLDivElement>()} />
    <DrawerTitle ref={createRef<HTMLHeadingElement>()} />
    <DrawerDescription ref={createRef<HTMLParagraphElement>()} />
  </>
);
export const button: ButtonProps = { loading: true, static: true };
export const slider: SliderProps = {
  defaultValue: [20, 80],
  thumbLabels: ["Minimum", "Maximum"],
  orientation: "vertical",
};
