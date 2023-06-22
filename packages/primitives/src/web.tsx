import { type ReactNode } from "react";
import { PrimitiveProvider } from "./provider";

export function WebPrimitiveProvider(props: { children?: ReactNode }) {
  const { children, ...rest } = props;
  return (
    <PrimitiveProvider
      {...rest}
      primitives={{
        Box: ({ children, ...rest }) => <div {...rest}>{children}</div>,
        Text: ({ children, ...rest }) => <span {...rest}>{[children]}</span>,
        Pressable: ({ children, ...rest }) => (
          <button {...(rest as any)}>{[children]}</button>
        ),
      }}
    >
      {children}
    </PrimitiveProvider>
  );
}
