import { mergeSX } from "..";
import { TextProps } from "./props";

export type { TextProps };

export function Text(props: TextProps) {
  const { children, sx, loading, ...rest } = props;

  return (
    <span {...rest} style={mergeSX(sx) as any}>
      {children}
    </span>
  );
}
