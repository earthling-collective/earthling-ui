import { Properties } from "csstype";

export const examples = {
  //props
  "&[variant=button]": {},
  "&[size=sm]": {},
  //state
  "&:pressed": {},
  //descendant
  "&>key": {},
  //platform
  "@ios": {},
  "@android": {},
  //breakpoints
  "@sm": {},
  "@>sm": {},
  "@<md": {},
  //light dark mode
  "@light": {},
  "@dark": {},
};

export const plugins = [
  //descendents
  { pattern: /^& *> *\.?(.+)/ },
  //props &[size=sm]
  { pattern: /^&\[(.+)\]/ },
  //state
  { pattern: /^&:(.+)/ },
  //context
  { pattern: /^@(.+)/ },
];

export function flattenSX(sx: SX): Properties & { [key: string]: string } {
  let properties: Properties & { [key: string]: string } = {};

  if (Array.isArray(sx)) {
    const ret = mergeSX(...sx);
    console.log("flatten out(arr)", sx, ret);
    return ret;
  }

  for (var key in sx) {
    const val = sx[key];
    if (typeof val === "string") properties[key] = val;
    else if (typeof val === "object") properties = mergeSX({}, properties, val);
  }

  const ret = properties;
  console.log("flatten out", sx, ret);
  return ret;
}

export function mergeSX(...sxs: (SX | undefined)[]) {
  const ret = sxs
    .map((x) => flattenSX(x || {}))
    .reduce((a, b) => Object.assign({}, a, b));
  console.log("merge out", sxs, ret);
  return ret;
}
