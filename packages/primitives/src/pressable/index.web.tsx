import { DetailedHTMLProps, HTMLAttributes } from "react";

type HTMLButtonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type PressableProps = HTMLButtonProps & {
  onPress?: HTMLButtonProps["onClick"];
};

export function Pressable(props: PressableProps) {
  const { onClick, onPress, children, ...rest } = props;

  return (
    <button onClick={onPress || onClick || undefined} {...rest}>
      {children}
    </button>
  );
}
