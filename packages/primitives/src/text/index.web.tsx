import { forwardRef } from "react";
import { mergeSX } from "..";
import { TextProps } from "./props";

export type { TextProps };

export const Text = forwardRef<HTMLSpanElement, TextProps>(function (
  props,
  ref
) {
  const { children, sx, loading, ...rest } = props;

  return (
    <span ref={ref} {...rest} style={mergeSX(sx) as any}>
      {children}
    </span>
  );
});
