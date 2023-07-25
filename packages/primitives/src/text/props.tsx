import type { TextProps as BaseTextProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { ICustomPrimitiveProps } from "../types";

type NativeProps = Omit<BaseTextProps, "style">;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  "ref" | "style"
>;
//overridable
export interface ICustomTextProps {}

export type TextApplicationState = {
  loading?: boolean;
};

export type TextProps = WebProps &
  NativeProps &
  TextApplicationState &
  ICustomTextProps &
  ICustomPrimitiveProps;
