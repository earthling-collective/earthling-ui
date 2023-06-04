import clsx from "clsx";
import { View, ViewProps } from "react-native";

export type AvatarProps = {} & ViewProps;

export default function (props: AvatarProps) {
  const { className, children, ...rest } = props;

  return (
    <View
      {...rest}
      className={clsx(
        "rounded-full bg-primary-main w-14 h-14 justify-center items-center",
        className
      )}
    >
      {children}
    </View>
  );
}
