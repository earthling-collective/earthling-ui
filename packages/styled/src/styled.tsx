import { ComponentType } from "react";
import { IStylable } from ".";

export function tailwind(className: string) {
  return {};
}

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

const tokens = {
  primary: "#47C5FC",
  "primary.focus": "#026A97",
  "primary.active": "#038DC9",
  "primary.subtle": "#EEFAFF",
  "primary.contrast": "#ffffff",
} as const;

type ColorZone = { [key: string]: string | ColorZone };
type ColorOut = { [key: string]: string };

const tagSyntax = /^\[(.+)\]$/i;
const tokenSyntax = /\$([a-zA-Z-_\.]+)/;

type ResolvableTags = string | ResolvableTags[] | undefined | false | null;

export function resolveTags(tags: ResolvableTags[]) {
  let tagsOut: string[] = [];
  for (let arg of tags) {
    if (!arg) continue;
    if (typeof arg === "string") tagsOut.push(arg.trim());
    if (Array.isArray(arg)) tagsOut.push(...resolveTags(arg));
  }
  return tagsOut;
}

function parseToken(value: keyof typeof tokens) {
  const tokenMatch = tokenSyntax.exec(value);
  const token = tokenMatch?.[1];
  return tokens[token] || value;
}

export function solveTheme(...allTags: ResolvableTags[]) {
  const tags = resolveTags(allTags);
  const theme = solveThemePart(colors, tags);
  return theme;
}

function solveThemePart(zone: ColorZone, tags: string[]): ColorOut {
  let out = {};

  for (let key of Object.keys(zone)) {
    const val = zone[key];
    const tagMatch = tagSyntax.exec(key);

    const value =
      tagMatch?.[1] && typeof val === "object"
        ? tags.includes(tagMatch[1])
          ? solveThemePart(val, tags)
          : {}
        : { [key]: parseToken(val as string) };

    out = Object.assign(out, value);
  }

  return out as ColorOut;
}
