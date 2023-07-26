import { Text as BaseText } from "react-native";
import type { TextProps, ICustomTextProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { forwardRef } from "react";

export type { TextProps, ICustomTextProps };
export type TextRef = BaseText;

export const Text = forwardRef<TextRef, TextProps>(function (props, ref) {
  const { children, style, loading, ...rest } = props;

  return (
    <BaseText
      ref={ref}
      {...rest}
      style={cssToReactNative(Object.entries(style || {}))}
    >
      {children}
    </BaseText>
  );
});
