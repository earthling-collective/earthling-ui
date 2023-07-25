import { View } from "react-native";
import { Text } from "#text";
import type { BoxProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { forwardRef } from "react";

export type { BoxProps };

export const Box = forwardRef<View, BoxProps>(function (props, ref) {
  const {
    children,
    style,
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
      ref={ref}
      {...rest}
      style={cssToReactNative(Object.entries(style || {}))}
    >
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </View>
  );
});
