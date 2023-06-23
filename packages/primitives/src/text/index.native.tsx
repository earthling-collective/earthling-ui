import { Text as BaseText, TextProps as BaseTextProps } from "react-native";

export type TextProps = BaseTextProps;

export function Text(props: TextProps) {
  const { children, ...rest } = props;

  return <BaseText {...rest}>{children}</BaseText>;
}
