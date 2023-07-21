import { ComponentType } from "react";
import { IStylable } from ".";

export function styled<T extends IStylable>(
  Component: ComponentType<T>,
  sx: SX
) {
  return ({ sx: sxProp, ...rest }: T) => (
    <Component {...(rest as any)} sx={mergeSX(sx, sxProp)} />
  );
}

export function flattenSX(sx: SX): SX {
  let properties: SX = {};

  if (Array.isArray(sx)) return mergeSX(...sx);

  for (var key in sx) {
    const val = sx[key];
    if (Array.isArray(val)) properties = mergeSX(properties, ...val);
    else if (typeof val === "object") properties = mergeSX({}, properties, val);
    else (properties as any)[key] = val;
  }

  return properties;
}

export function mergeSX(...sxs: (SX | undefined)[]) {
  return sxs
    .map((x) => flattenSX(x || {}))
    .reduce((a, b) => Object.assign({}, a, b));
}
