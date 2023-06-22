import {
  Box as BaseBox,
  type BoxProps as BaseBoxProps,
} from "@earthling-ui/primitives/box";

export function Box(props: BaseBoxProps) {
  const { children, ...rest } = props;
  return <BaseBox {...rest}>{children}</BaseBox>;
}
