import clsx from "clsx";
import { Pressable, PressableProps, View, ViewProps } from "react-native";
import { useFrame } from "../Frame";

export type ListProps = {} & ViewProps;

export default function List(props: ListProps) {
  const { className, children, style, ...rest } = props;
  const frame = useFrame();

  return (
    <View
      {...rest}
      className={clsx("", className)}
      style={[
        {
          marginLeft: -frame.left,
          marginRight: -frame.right,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export type ListItemProps = {} & PressableProps;

export function ListItem(props: ListItemProps) {
  const { className, children, style, ...rest } = props;
  const frame = useFrame();

  return (
    <Pressable
      {...rest}
      className={clsx(
        "py-3 flex-row items-center space-x-4 active:bg-primary-empty-active",
        className
      )}
      style={[
        { paddingLeft: frame.left, paddingRight: frame.right },
        style as any,
      ]}
    >
      {children}
    </Pressable>
  );
}
