import { Pressable as BasePressable, View } from "react-native";
import { Text } from "#text";
import type { PressableProps, ICustomPressableProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { forwardRef } from "react";

export type { PressableProps, ICustomPressableProps };
export type PressableRef = View;

export const Pressable = forwardRef<PressableRef, PressableProps>(function (
  props,
  ref
) {
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
    //descendants
    _Text,
    //rest
    ...rest
  } = props;

  return (
    <BasePressable
      ref={ref}
      {...rest}
      onPress={((onPress || onClick) as any) || undefined}
      style={cssToReactNative(Object.entries(style || {}))}
    >
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </BasePressable>
  );
});
