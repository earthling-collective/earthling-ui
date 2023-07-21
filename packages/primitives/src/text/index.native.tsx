import { Text as BaseText } from "react-native";
import type { TextProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { mergeSX } from "..";
import { forwardRef } from "react";

export type { TextProps };

export const Text = forwardRef<BaseText, TextProps>(function (props, ref) {
  const { children, sx, loading, ...rest } = props;

  return (
    <BaseText
      ref={ref}
      {...rest}
      style={cssToReactNative(Object.entries((mergeSX(sx) as any) || {}))}
    >
      {children}
    </BaseText>
  );
});
