import React, { ReactNode } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import clsx from "clsx";
import Validations, { ValidationsProps } from "../Validations";

export type InputProps = {
  variant?: "contained" | "outlined" | "minimal";
  size?: "lg" | "md" | "sm";
  type?: "text" | "email" | "password";
  label?: string;
  endAdornment?: ReactNode;
  _Label?: TextProps;
  _Input?: TextInputProps;
  _Validations?: ValidationsProps;
  _EndAdornment?: ViewProps;
} & Pick<TextInputProps, "placeholder"> &
  TextInputProps;

export default function Input(props: InputProps) {
  const {
    type = "text",
    className,
    label,
    endAdornment,
    placeholder,
    variant = "minimal",
    size = "md",
    _Input,
    _Label,
    _Validations,
    _EndAdornment,
    ...rest
  } = props;

  return (
    <View {...rest} className={clsx("relative", className)}>
      <TextInput
        placeholder={placeholder}
        {..._Input}
        className={clsx(
          "h-14 border-solid border-[2px] border-[transparent]",
          {
            "pt-4": label !== undefined,

            "bg-white px-4 rounded-full focus:border-primary-main-focus active:border-primary-main":
              variant === "contained",
            "border-red-300 active:border-red-600":
              !!_Validations?.errors?.length && variant === "contained",

            "px-4 rounded-full border-neutral-main focus:border-neutral-main-focus active:border-neutral-main-active":
              variant === "outlined",
            "border-red-300 active:border-red-600 variant-outlined":
              !!_Validations?.errors?.length && variant === "outlined",

            "border-b-primary-main-text focus:border-b-primary-main-focus active:border-b-primary-main":
              variant === "minimal",

            "h-8": size === "sm",
          },
          _Input?.className
        )}
      />
      {label !== undefined && (
        <Text
          {..._Label}
          className={clsx(
            "absolute top-2 text-xs color-gray-500",
            {
              "left-4": variant === "contained" || variant === "outlined",
              "": variant === "minimal",
            },
            _Label
          )}
        >
          {label}
        </Text>
      )}
      {!!endAdornment && (
        <View
          {..._EndAdornment}
          className={clsx(
            "absolute flex-row top-0 h-14 items-center",
            {
              "right-2": variant === "contained",
              "right-0": variant === "minimal",
            },
            _EndAdornment?.className
          )}
        >
          {endAdornment}
        </View>
      )}
      <Validations
        {..._Validations}
        className={clsx(
          { "px-0": variant === "minimal" },
          _Validations?.className
        )}
      />
    </View>
  );
}
