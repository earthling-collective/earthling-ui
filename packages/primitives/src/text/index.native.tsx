import { Text as BaseText } from "react-native";
import type { TextProps } from "./props";

export type { TextProps };

export function Text(props: TextProps) {
  const { children, ...rest } = props;

  return <BaseText {...rest}>{children}</BaseText>;
}
