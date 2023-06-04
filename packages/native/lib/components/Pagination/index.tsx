import clsx from "clsx";
import { useMemo } from "react";
import { View, ViewProps } from "react-native";

export type PaginationProps = {
  total?: number;
  current?: number;
  _Dot?: ViewProps;
} & ViewProps;

export default function Pagination(props: PaginationProps) {
  const { total = 10, current = 0, _Dot, className, ...rest } = props;

  const arr = useMemo(() => Array(total).fill(""), [total]);

  return (
    <View
      {...rest}
      className={clsx(
        "flex-row items-center justify-center space-x-2",
        className
      )}
    >
      {arr.map((_, i) => (
        <View
          key={i}
          {..._Dot}
          className={clsx(
            "rounded-full w-2 h-2 bg-primary-subtle",
            { "bg-primary-main": i === current },
            _Dot?.className
          )}
        />
      ))}
    </View>
  );
}
