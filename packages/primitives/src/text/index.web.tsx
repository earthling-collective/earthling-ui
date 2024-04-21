import { forwardRef } from "react";
import { type TextProps, type ICustomTextProps } from "./props";

export type { TextProps, ICustomTextProps };
export type TextRef = HTMLSpanElement;

export const Text = forwardRef<TextRef, TextProps>(function (props, ref) {
  const { children, ...rest } = props;

  return (
    <span ref={ref} {...rest}>
      {children}
    </span>
  );
});
