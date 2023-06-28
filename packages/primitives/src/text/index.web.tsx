import { TextProps, ICustomTextProps } from "./props";

export type { TextProps, ICustomTextProps };

export function Text({ apply, ...props }: TextProps) {
  const { children, loading, ...rest } = props;

  const { ...applied } = apply?.(props, { loading: loading });

  return (
    <span {...rest} {...applied}>
      {children}
    </span>
  );
}
