import { View } from "react-native";
import { Text } from "#text";
import type { BoxProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { mergeSX } from "..";

export type { BoxProps };

export function Box(props: BoxProps) {
  const {
    children,
    sx,
    //state
    loading,
    disabled,
    //descendents
    _Text,
    //rest
    ...rest
  } = props;

  return (
    <View
      {...rest}
      style={cssToReactNative(Object.entries((mergeSX(sx) as any) || {}))}
    >
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </View>
  );
}
