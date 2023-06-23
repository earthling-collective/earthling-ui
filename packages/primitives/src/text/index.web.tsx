import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export function Text(props: TextProps) {
  const { children, ...rest } = props;

  return <span {...rest}>{children}</span>;
}
