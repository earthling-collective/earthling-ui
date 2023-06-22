import { ReactNode } from "react";

export declare namespace PrimitiveProps {
  type Box = {
    className?: string;
    children?: ReactNode;
  };

  type Pressable = Box & {
    onPress?: ((...args: any) => void) | null;
    onClick?: ((...args: any) => void) | null;
  };

  type Text = Box & {
    children?: string;
  };
}
