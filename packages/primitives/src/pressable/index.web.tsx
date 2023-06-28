import { useState } from "react";
import type { PressableProps, ICustomPressableProps } from "./props";

export type { PressableProps, ICustomPressableProps };

export function Pressable({ apply, ...props }: PressableProps) {
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
    // onPressIn,
    // onPressOut,
    // onMouseDown,
    // onMouseUp,
    // onHoverIn,
    // onHoverOut,
    // onMouseEnter,
    // onMouseLeave,
    // onFocus,
    // onBlur,
    //rest
    ...rest
  } = props;

  const [isPressed, setPressed] = useState(false);
  const [isMouseDown, setMouseDown] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const applied =
    apply?.(props, {
      loading: loading,
      disabled: disabled,
      active: active || isPressed || isMouseDown,
      hover: hover || isHovered || isMouseOver,
      focus: focus || isFocused,
    }) || {};

  return (
    <button
      {...rest}
      onClick={((onPress || onClick) as any) || undefined}
      {...applied}
    >
      {children}
    </button>
  );
}
