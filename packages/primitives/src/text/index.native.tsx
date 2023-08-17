import { Text as BaseText } from "react-native";
import type { TextProps, ICustomTextProps } from "./props";
import { forwardRef } from "react";

export type { TextProps, ICustomTextProps };
export type TextRef = BaseText;

export const Text = forwardRef<TextRef, TextProps>(function (props, ref) {
  const { children, loading, ...rest } = props;

  return (
    <BaseText ref={ref} {...rest}>
      {children}
    </BaseText>
  );
});
