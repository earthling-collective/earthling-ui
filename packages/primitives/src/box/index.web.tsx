import { DetailedHTMLProps, HTMLAttributes } from "react";

export type BoxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Box(props: BoxProps) {
  const { children, ...rest } = props;

  return <div {...rest}>{children}</div>;
}
