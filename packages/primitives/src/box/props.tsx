import type { DetailedHTMLProps, HTMLAttributes } from "react";
import type { ViewProps } from "react-native";
import type { TextProps } from "#text";
import { Applicable } from "../apply";
import { ICustomPrimitiveProps } from "../types";

type NativeProps = ViewProps;

type WebProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref"
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
    BoxApplicationState & { _Text?: TextProps } & ICustomBoxProps &
    ICustomPrimitiveProps,
  BoxApplicationState
>;
