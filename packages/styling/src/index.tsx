import { mergeDeep } from "./util";
import CSS from "csstype";

export function wind(className: string) {
  //TODO parse tailwind
  return {};
}

const tagSyntax = /^\[(.+)\]$/i;
const tokenSyntax = /\$([a-zA-Z-_\.0-9]+)/;

export function makeTheme(tokens: TokenDictionary, tree: StyleTree) {
  function resolveTags(tags: ResolvableTags[]) {
    let tagsOut: string[] = [];
    for (let arg of tags) {
      if (!arg) continue;
      if (typeof arg === "string") tagsOut.push(arg.trim());
      if (Array.isArray(arg)) tagsOut.push(...resolveTags(arg));
    }
    return tagsOut;
  }

  function parseToken(value: string): string {
    const tokenMatch = tokenSyntax.exec(value);
    const token = tokenMatch?.[1];
    return token ? parseToken(tokens[token]) : value;
  }

  function solve(tree: StyleTree, ...allTags: ResolvableTags[]): StyleOut {
    const tags = resolveTags(allTags);
    let out = {};

    for (let key of Object.keys(tree)) {
      const val = (tree as any)[key];
      const tagMatch = tagSyntax.exec(key);

      const value =
        tagMatch?.[1] && typeof val === "object"
          ? tags.includes(tagMatch[1])
            ? solve(val, ...tags)
            : {}
          : { [key]: parseToken(val as any) };

      out = Object.assign(out, value);
    }

    return out as StyleOut;
  }

  function tag(...allTags: ResolvableTags[]) {
    return solve(tree, ...allTags);
  }

  function extend(overrides: StyleTree) {
    return {
      tag: (...allTags: ResolvableTags[]) => {
        return solve(mergeDeep({}, tree, overrides), ...allTags);
      },
    };
  }

  return {
    tag,
    extend,
  };
}

export type TokenDictionary = Record<string, string>;

export type StyleTree = CSS.Properties | { [key: string]: StyleTree };

type StyleOut = CSS.Properties; //TODO replace with csstype type

type ResolvableTags = string | ResolvableTags[] | undefined | false | null;

export { flatten } from "./util";
