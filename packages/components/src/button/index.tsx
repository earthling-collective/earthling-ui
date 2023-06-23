import {
  Pressable,
  type PressableProps,
} from "@earthling-ui/primitives/pressable";

export type ButtonProps = PressableProps & {
  variant?: "contained" | "outlined" | "subtle" | "text";
  size?: "sm" | "md" | "lg";
  error?: boolean;
  loading?: boolean;
};

export function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return <Pressable {...rest}>{children}</Pressable>;
}
