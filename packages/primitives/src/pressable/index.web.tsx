import { forwardRef } from "react";
import type { PressableProps, ICustomPressableProps } from "./props";

export type { PressableProps, ICustomPressableProps };
export type PressableRef = HTMLButtonElement;

export const Pressable = forwardRef<PressableRef, PressableProps>(function (
  props,
  ref
) {
  const {
    children,
    disabled,
    //handlers
    onClick,
    onPress,
    //rest
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      {...rest}
      disabled={disabled || undefined}
      onClick={((onPress || onClick) as any) || undefined}
    >
      {children}
    </button>
  );
});
