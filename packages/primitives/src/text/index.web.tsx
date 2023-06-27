import { TextProps } from "./props";

export type { TextProps };

export function Text(props: TextProps) {
  const { children, ...rest } = props;

  return <span {...rest}>{children}</span>;
}
