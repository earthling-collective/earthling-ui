import { usePrimitive } from "../provider";
import { PrimitiveProps } from "../types";

export type BoxProps = PrimitiveProps.Box;

export function Box(props: BoxProps) {
  const { children, ...rest } = props;
  const { Box } = usePrimitive();

  return <Box {...rest}>{children}</Box>;
}
