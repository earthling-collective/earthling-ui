import clsx from "clsx";
import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

export type BarProps = {
  left?: ReactNode;
  _Left?: ViewProps;
  middle?: ReactNode;
  _Middle?: ViewProps;
  right?: ReactNode;
  _Right?: ViewProps;
} & Omit<ViewProps, "children">;

export default function Bar(props: BarProps) {
  const { className, left, _Left, middle, _Middle, right, _Right, ...rest } =
    props;

  return (
    <View {...rest} className={clsx("flex-row items-center", className)}>
      <View
        {..._Left}
        className={clsx(
          "flex-1 flex-row items-center space-x-3",
          _Left?.className
        )}
      >
        {left}
      </View>
      {middle && (
        <View
          {..._Middle}
          className={clsx(
            "flex-1 flex-row justify-center items-center space-x-3",
            _Middle?.className
          )}
        >
          {middle}
        </View>
      )}
      <View
        {..._Right}
        className={clsx(
          "flex-1 flex-row justify-end items-center space-x-1",
          _Right?.className
        )}
      >
        {right}
      </View>
    </View>
  );
}
