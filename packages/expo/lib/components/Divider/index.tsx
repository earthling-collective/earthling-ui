import clsx from "clsx";
import React from "react";
import { Text, TextProps, View, ViewProps } from "react-native";

export type DividerProps = { _Line?: ViewProps; _Text?: TextProps } & ViewProps;

export default function Divider(props: DividerProps) {
  const { className, children, _Line, _Text, ...rest } = props;

  return (
    <View
      {...rest}
      className={clsx("flex-row space-x-2 items-center", className)}
    >
      {!!children ? (
        <>
          <View
            {..._Line}
            className={clsx("h-[1px] flex-1 bg-gray-200", _Line?.className)}
          />
          {typeof children === "string" ? (
            <Text
              {..._Text}
              className={clsx("color-gray-400 text-xs", _Text?.className)}
            >
              {children}
            </Text>
          ) : (
            children
          )}
          <View
            {..._Line}
            className={clsx("h-[1px] flex-1 bg-gray-200", _Line?.className)}
          />
        </>
      ) : (
        <View
          {..._Line}
          className={clsx("h-[1px] w-full bg-gray-200", _Line?.className)}
        />
      )}
    </View>
  );
}
