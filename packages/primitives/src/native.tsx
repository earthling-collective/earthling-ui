import { type ReactNode } from "react";
import { PrimitiveProvider } from "./provider";
import { Pressable, Text, View } from "react-native";

export function NativePrimitiveProvider(props: { children?: ReactNode }) {
  const { children, ...rest } = props;
  return (
    <PrimitiveProvider
      {...rest}
      primitives={{ Box: View, Text: Text, Pressable: Pressable as any }}
    >
      {children}
    </PrimitiveProvider>
  );
}
