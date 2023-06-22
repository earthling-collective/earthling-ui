import { ReactNode } from "react";

export declare namespace Primitive {
  type Atom = {
    className?: string;
    children?: ReactNode;
  };

  type Pressable = Atom & {
    onPress?: ((...args: any) => void) | null;
  };
}
