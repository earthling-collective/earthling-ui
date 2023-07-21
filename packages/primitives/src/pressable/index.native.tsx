import { Pressable as BasePressable, View } from "react-native";
import { Text } from "#text";
import type { PressableProps, ICustomPressableProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { mergeSX } from "..";
import { forwardRef } from "react";

export type { PressableProps, ICustomPressableProps };

export const Pressable = forwardRef<View, PressableProps>(function (
  props,
  ref
) {
  const {
    children,
    sx,
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
      style={cssToReactNative(Object.entries((mergeSX(sx) as any) || {}))}
    >
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </BasePressable>
  );
});
