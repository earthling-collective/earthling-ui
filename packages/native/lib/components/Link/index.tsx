import { Pressable, PressableProps, Text, TextProps } from "react-native";
import clsx from "clsx";

export type LinkProps = {
  variant?: "text";
  _Text?: TextProps;
} & PressableProps;

export default function Link(props: LinkProps) {
  const { variant = "contained", children, className, _Text, ...rest } = props;

  return (
    <Pressable
      {...rest}
      className={clsx("active:bg-white-100 active:underline", className)}
    >
      {typeof children === "string" ? (
        <Text {..._Text} className={clsx("underline", _Text?.className)}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
