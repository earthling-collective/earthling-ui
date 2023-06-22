import { usePrimitive } from "../provider";
import { PrimitiveProps } from "../types";

export type ButtonProps = PrimitiveProps.Box & {
  variant?: "contained" | "outlined" | "minimal";
  size?: "lg" | "md" | "sm";
  onPress?: () => void;
  onClick?: () => void;
  _Text?: PrimitiveProps.Box;
  _Validations?: PrimitiveProps.Box;
  _Pressable?: PrimitiveProps.Pressable;
};

export function Button(props: ButtonProps) {
  const {
    variant = "contained",
    size = "md",
    children,
    className,
    _Text,
    _Pressable,
    _Validations,
    onPress,
    ...rest
  } = props;
  const { Box, Pressable } = usePrimitive();

  return (
    <Box {...rest} className={className}>
      <Pressable onClick={onPress || undefined} {..._Pressable}>
        {typeof children === "string" ? (
          <span {..._Text}>{children}</span>
        ) : (
          <>{children}</>
        )}
      </Pressable>
    </Box>
  );
}
