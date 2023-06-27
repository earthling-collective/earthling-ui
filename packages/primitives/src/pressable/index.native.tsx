import { Pressable as BasePressable } from "react-native";
import { Text } from "#text";
import type { PressableProps } from "./props";

export type { PressableProps };

export function Pressable(props: PressableProps) {
  const { onClick, onPress, children, _Text, ...rest } = props;

  return (
    <BasePressable
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
}
