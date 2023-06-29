import { mergeSX } from "..";
import type { PressableProps, ICustomPressableProps } from "./props";

export type { PressableProps, ICustomPressableProps };

export function Pressable(props: PressableProps) {
  const {
    children,
    sx,
    //state
    disabled,
    loading,
    active,
    hover,
    focus,
    //handlers
    onClick,
    onPress,
    //rest
    ...rest
  } = props;

  return (
    <button
      {...rest}
      onClick={((onPress || onClick) as any) || undefined}
      style={mergeSX(sx) as any}
    >
      {children}
    </button>
  );
}
