import { ComponentType } from "react";
import { mergeSX } from "./sx";
import { Properties } from "csstype";

export function styled<T extends { style?: Properties }>(
  Component: ComponentType<T>,
  sx: SX
) {
  return ({ ...rest }: T) => (
    <Component
      {...rest}
      apply={({ sx: sxProp }: T) => ({ style: mergeSX(sxProp, sx) })}
    />
  );
}
