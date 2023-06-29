import { Pressable as BasePressable } from "react-native";
import { Text } from "#text";
import type { PressableProps, ICustomPressableProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { mergeSX } from "..";

export type { PressableProps, ICustomPressableProps };

export function Pressable(props: PressableProps) {
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
}
