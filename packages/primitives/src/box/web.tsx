import { Primitive } from "../types";

export type BoxProps = Primitive.Atom;

export function Box(props: BoxProps) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}
