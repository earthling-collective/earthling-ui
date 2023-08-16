import { View } from "react-native";
import { Text } from "#text";
import type { BoxProps, ICustomBoxProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { forwardRef } from "react";

export type { BoxProps, ICustomBoxProps };
export type BoxRef = View;

export const Box = forwardRef<View, BoxProps>(function (props, ref) {
  const {
    children,
    jss,
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
      style={[jss, style].map((x) => cssToReactNative(Object.entries(x || {})))}
    >
      {typeof children === "string" ? (
        <Text
          {..._Text}
          style={cssToReactNative(Object.entries(_Text?.style || {}))}
        >
          {children}
        </Text>
      ) : (
        <>{children}</>
      )}
    </View>
  );
});
