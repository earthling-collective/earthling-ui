import { Text } from "#text";
import { forwardRef } from "react";
import type { BoxProps } from "./props";

export type { BoxProps };

export const Box = forwardRef<HTMLDivElement, BoxProps>(function (props, ref) {
  const {
    children,
    //state
    loading,
    disabled,
    //descendents
    _Text,
    //rest
    ...rest
  } = props;

  return (
    <div ref={ref} {...rest}>
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </div>
  );
});
