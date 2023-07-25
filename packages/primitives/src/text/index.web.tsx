import { forwardRef } from "react";
import { TextProps } from "./props";

export type { TextProps };

export const Text = forwardRef<HTMLSpanElement, TextProps>(function (
  props,
  ref
) {
  const { children, loading, ...rest } = props;

  return (
    <span ref={ref} {...rest}>
      {children}
    </span>
  );
});
