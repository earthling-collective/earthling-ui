import type { TextProps as BaseTextProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { Properties } from "csstype";
import { IStylable } from "..";

type NativeProps = Omit<BaseTextProps, "style">;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  "ref" | "style"
>;
//overridable
export interface ICustomTextProps {}
export interface ICustomPrimitiveProps {}

export type TextApplicationState = {
  loading?: boolean;
};

export type TextProps = WebProps &
  NativeProps &
  TextApplicationState &
  IStylable &
  ICustomTextProps &
  ICustomPrimitiveProps & { style?: Properties };
