export type PropsWithSX = { sx?: SX };

export function flattenSX(sx: SX) {
  if (Array.isArray(sx)) {
    for (var x of sx) {
      flattenSX(x);
    }
  }
}

export function mergeSX(a?: SX, b?: SX) {
  if (!a) return b || {};
}
