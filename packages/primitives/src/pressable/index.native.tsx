import { Pressable as BasePressable } from "react-native";
import { Text } from "#text";
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
    //descendants
    _Text,
    //rest
    ...rest
  } = props;

  const applied =
    apply?.(props, {
      loading: loading,
      disabled: disabled,
      active: active,
      hover: hover,
      focus: focus,
    }) || {};

  return (
    <BasePressable
      {...rest}
      onPress={((onPress || onClick) as any) || undefined}
      {...applied}
    >
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </BasePressable>
  );
}
