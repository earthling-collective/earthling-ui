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
    //state
    disabled,
    loading,
    active,
    hover,
    focus,
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
      onClick={((onPress || onClick) as any) || undefined}
    >
      {children}
    </button>
  );
});
