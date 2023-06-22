import { View } from "react-native";
import type { BoxProps } from "./props";

export type { BoxProps };

export function Box(props: BoxProps) {
  const { children, ...rest } = props;
  return <View {...rest}>{children}</View>;
}
