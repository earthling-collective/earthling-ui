import { forwardRef } from "react";
import { TextProps, ICustomTextProps } from "./props";

export type { TextProps, ICustomTextProps };
export type TextRef = HTMLSpanElement;

export const Text = forwardRef<TextRef, TextProps>(function (props, ref) {
  const { children, jss, style, ...rest } = props;

  return (
    <span ref={ref} {...rest} style={Object.assign({}, jss, style)}>
      {children}
    </span>
  );
});
