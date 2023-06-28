import { Text as BaseText } from "react-native";
import type { TextProps, ICustomTextProps } from "./props";

export type { TextProps, ICustomTextProps };

export function Text({ apply, ...props }: TextProps) {
  const { children, loading, ...rest } = props;

  const { ...applied } = apply?.(props, { loading: loading });

  return (
    <BaseText {...rest} {...applied}>
      {children}
    </BaseText>
  );
}
