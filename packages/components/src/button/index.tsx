import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "@earthling-ui/primitives/button";

export function Button(props: BaseButtonProps) {
  const { ...rest } = props;
  return <BaseButton {...rest}>Button</BaseButton>;
}
