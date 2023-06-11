import { ReactNode } from "react";

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
