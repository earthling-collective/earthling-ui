import { forwardRef } from "react";
import type { PressableProps, ICustomPressableProps } from "./props";

export type { PressableProps, ICustomPressableProps };

export const Pressable = forwardRef<HTMLButtonElement, any>(function (
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
