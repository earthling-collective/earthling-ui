import { ComponentProps, ComponentType } from "react";

// [platform]
// _descendant
// :state
// $token

const examples = {
  //props
  "&[variant=button]": {},
  //state
  "&:pressed": {},
  //descendant
  "&>key": {},
  //platform
  "@ios": {},
  "@android": {},
  //breakpoints
  "@sm": {},
  "@>sm": {},
  "@<md": {},
  //light dark mode
  "@light": {},
  "@dark": {},
};

export interface IPalette {}
export interface IParts {}

type GlobalTheme = {
  colors: IPalette;
  parts: IParts;
};

export function styled<T extends ComponentType<any>>(
  Component: T,
  stylesheet: any
) {
  return ({ ...rest }: ComponentProps<T>) => <Component {...rest} />;
}
