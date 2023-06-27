import { View } from "react-native";
import { Text } from "#text";
import type { BoxProps } from "./props";

export type { BoxProps };

export function Box(props: BoxProps) {
  const { children, _Text, ...rest } = props;

  return (
    <View {...rest}>
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </View>
  );
}
