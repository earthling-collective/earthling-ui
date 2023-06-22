import { Primitive } from "../types";

export type ButtonProps = Primitive.Pressable & {
  variant?: "contained" | "outlined" | "minimal";
  size?: "lg" | "md" | "sm";
  _Text?: Primitive.Atom;
  _Validations?: Primitive.Atom;
  _Pressable?: Primitive.Pressable;
};
