import { Text } from "#text";
import { mergeSX } from "..";
import type { BoxProps } from "./props";

export type { BoxProps };

export function Box(props: BoxProps) {
  const {
    children,
    sx,
    //state
    loading,
    disabled,
    //descendents
    _Text,
    //rest
    ...rest
  } = props;

  return (
    <div {...rest} style={mergeSX(sx) as any}>
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
