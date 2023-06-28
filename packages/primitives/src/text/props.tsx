import type { TextProps as BaseTextProps } from "react-native";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { Applicable } from "../apply";
import type { ICustomPrimitiveProps } from "../types";
import type { Properties } from "csstype";

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

export type TextProps = Applicable<
  WebProps &
    NativeProps &
    TextApplicationState &
    ICustomTextProps &
    ICustomPrimitiveProps & { style?: Properties },
  { loading?: boolean }
>;
