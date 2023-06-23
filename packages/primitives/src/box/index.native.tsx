import { View, ViewProps } from "react-native";
import { Text, TextProps } from "#text";

export type BoxProps = ViewProps & { _Text?: TextProps };

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
