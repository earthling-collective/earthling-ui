import { Text as BaseText } from "react-native";
import type { TextProps, ICustomTextProps } from "./props";
import cssToReactNative from "css-to-react-native";

export type { TextProps, ICustomTextProps };

export function Text({ apply, ...props }: TextProps) {
  const { children, style, loading, ...rest } = props;

  const { ...applied } = apply?.(props, { loading: loading });

  return (
    <BaseText
      {...rest}
      {...applied}
      style={cssToReactNative(Object.entries(applied.style || style || {}))}
    >
      {children}
    </BaseText>
  );
}
