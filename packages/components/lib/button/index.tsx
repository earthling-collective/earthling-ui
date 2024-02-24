import {
  Pressable,
  PressableRef,
  PressableProps,
} from "@earthling-ui/primitives/pressable";
import { forwardRef } from "react";

export const Button = forwardRef<PressableRef, PressableProps>((props, ref) => {
  const { ...rest } = props;
  return <Pressable ref={ref} {...rest} />;
});
