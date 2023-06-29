import { Text as BaseText } from "react-native";
import type { TextProps } from "./props";
import cssToReactNative from "css-to-react-native";
import { mergeSX } from "..";

export type { TextProps };

export function Text(props: TextProps) {
  const { children, sx, loading, ...rest } = props;

  return (
    <BaseText
      {...rest}
      style={cssToReactNative(Object.entries((mergeSX(sx) as any) || {}))}
    >
      {children}
    </BaseText>
  );
}
