import { View } from "react-native";
import { Primitive } from "../types";

export type ButtonProps = Primitive.Atom;

export function Box(props: ButtonProps) {
  const { children, ...rest } = props;
  return <View {...rest}>{children}</View>;
}
