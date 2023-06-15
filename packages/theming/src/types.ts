import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export declare namespace Za {
  type Atom<T = {}> = {
    className?: string;
    children?: ReactNode;
  } & T;
  type Pressable = {
    onPress?: ((...args: any) => void) | null;
  };

  type Button<T = {}> = Za.Atom<{
    variant?: "contained" | "outlined" | "minimal";
    size?: "lg" | "md" | "sm";
    _Text?: Za.Atom;
    _Validations?: Za.Atom;
    _Pressable?: Za.Atom & Za.Pressable;
  }> &
    Za.Pressable &
    T;
}

export type DivElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type ButtonElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type AnchorElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
