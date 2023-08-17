import { View } from "react-native";
import { Text } from "#text";
import type { BoxProps, ICustomBoxProps } from "./props";
import { forwardRef } from "react";

export type { BoxProps, ICustomBoxProps };
export type BoxRef = View;

export const Box = forwardRef<View, BoxProps>(function (props, ref) {
  const {
    children,
    //state
    loading,
    disabled,
    //descendents
    _Text,
    //rest
    ...rest
  } = props;

  return (
    <View ref={ref} {...rest}>
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </View>
  );
});
