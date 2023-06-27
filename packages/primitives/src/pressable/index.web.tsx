import type { PressableProps } from "./props";

export type { PressableProps };

export function Pressable(props: PressableProps) {
  const { onClick, onPress, children, disabled, ...rest } = props;

  return (
    <button
      onClick={((onPress || onClick) as any) || undefined}
      {...rest}
      disabled={disabled === null ? undefined : disabled}
    >
      {children}
    </button>
  );
}
