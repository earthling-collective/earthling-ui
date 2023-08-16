import { Text } from "#text";
import { forwardRef } from "react";
import type { BoxProps, ICustomBoxProps } from "./props";

export type { BoxProps, ICustomBoxProps };
export type BoxRef = HTMLDivElement;

export const Box = forwardRef<BoxRef, BoxProps>(function (props, ref) {
  const {
    children,
    jss,
    style,
    //state
    loading,
    disabled,
    //descendents
    _Text,
    //rest
    ...rest
  } = props;

  return (
    <div ref={ref} {...rest} style={Object.assign({}, jss, style)}>
      {typeof children === "string" ? (
        <Text {..._Text}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </div>
  );
});
