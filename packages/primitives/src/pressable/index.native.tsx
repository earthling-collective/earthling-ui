import { Pressable as BasePressable, View } from "react-native";
import { Text } from "#text";
import type { PressableProps, ICustomPressableProps } from "./props";
import { forwardRef } from "react";

export type { PressableProps, ICustomPressableProps };
export type PressableRef = View;

export const Pressable = forwardRef<PressableRef, PressableProps>(function (
  props,
  ref
) {
  const {
    children,
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
    >
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </BasePressable>
  );
});
