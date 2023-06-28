import { Text } from "#text";
import type { BoxProps, ICustomBoxProps } from "./props";

export type { BoxProps, ICustomBoxProps };

export function Box({ apply, ...props }: BoxProps) {
  const {
    children,
    //state
    loading,
    disabled,
    //descendents
    _Text,
    //rest
    ...rest
  } = props;

  const { _Text: _AppliedText, ...applied } =
    apply?.(props, {
      loading: loading,
      disabled: disabled,
    }) || {};

  return (
    <div {...rest} {...applied}>
      {typeof children === "string" ? (
        <Text {..._Text} {..._AppliedText}>
          {children}
        </Text>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
