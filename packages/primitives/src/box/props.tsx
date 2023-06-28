import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";
import type { TextProps } from "#text";
import type { Applicable } from "../apply";
import type { ICustomPrimitiveProps } from "../types";
import type { Properties } from "csstype";

type NativeProps = Omit<ViewProps, "style">;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref" | "style"
>;

//overridable
export interface ICustomBoxProps {}

export type BoxApplicationState = {
  loading?: boolean;
  disabled?: boolean;
};

export type BoxProps = Applicable<
  NativeProps &
    WebProps &
    BoxApplicationState &
    ICustomBoxProps &
    ICustomPrimitiveProps & { style?: Properties; _Text?: TextProps },
  BoxApplicationState
>;
