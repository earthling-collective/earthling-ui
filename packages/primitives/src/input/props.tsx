import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { TextInputProps } from "react-native";
import type { TextProps } from "#text";
import { BoxProps } from "#box";
import { ICustomPrimitiveProps } from "../types";

type NativeControlProps = TextInputProps;
type WebControlProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
>;

export interface ICustomInputProps {
  label?: string;
}

export type DescendantProps = {
  _Label?: TextProps;
  _Control?: WebControlProps & NativeControlProps & ICustomPrimitiveProps;
};

export type InputProps = BoxProps &
  DescendantProps &
  ICustomInputProps &
  ICustomPrimitiveProps;
