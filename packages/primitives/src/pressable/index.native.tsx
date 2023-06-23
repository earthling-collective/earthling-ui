import {
  Pressable as BasePressable,
  PressableProps as BasePressableProps,
} from "react-native";
import { Text, TextProps } from "#text";

export type PressableProps = BasePressableProps & {
  onClick?: PressableProps["onPress"];
  _Text?: TextProps;
};

export function Pressable(props: PressableProps) {
  const { onClick, onPress, children, _Text, ...rest } = props;

  return (
    <BasePressable {...rest} onPress={onPress || onClick || undefined}>
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </BasePressable>
  );
}
