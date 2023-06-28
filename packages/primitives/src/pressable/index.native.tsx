import { Pressable as BasePressable } from "react-native";
import { Text } from "#text";
import type { PressableProps, ICustomPressableProps } from "./props";
import cssToReactNative from "css-to-react-native";

export type { PressableProps, ICustomPressableProps };

export function Pressable({ apply, ...props }: PressableProps) {
  const {
    children,
    style,
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
      style={cssToReactNative(Object.entries(applied.style || style || {}))}
    >
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </BasePressable>
  );
}
