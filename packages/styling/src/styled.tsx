import { ComponentProps, ComponentType } from "react";
import { mergeDeep } from "./util";

export type ConditionMap = Record<string, boolean | undefined>;
export type ConditionList = Condition[];
export type Condition = string | ConditionMap | ConditionList;
export type Styles = import("csstype").Properties;
export type StyleTree = Styles | { [key: string]: StyleTree };
export type TokenDictionary = Record<string, string>;
export type SolvableConditions =
  | string
  | SolvableConditions[]
  | undefined
  | false
  | null;

const tagSyntax = /^\[(.+)\]$/i;
const tokenSyntax = /\$([a-zA-Z-_\.0-9]+)/;

export function styled<
  C extends ComponentType<CProps>,
  CProps = ComponentProps<C>
>(Component: C) {
  return makeStyleBuilder<C, CProps>({
    BaseComponent: Component,
    tokens: {},
    tree: {},
  });
}

function makeStyleBuilder<
  C extends ComponentType<CProps>,
  CProps = ComponentProps<C>
>(params: { BaseComponent: C; tokens: TokenDictionary; tree: StyleTree }) {
  const { BaseComponent, tokens, tree } = params;

  //add tokens
  const using = (...newTokens: TokenDictionary[]) => {
    return makeStyleBuilder<C, CProps>({
      BaseComponent,
      tokens: Object.assign({}, tokens, ...newTokens),
      tree,
    });
  };

  //add tree
  const extend = (...newTrees: StyleTree[]) => {
    return makeStyleBuilder<C, CProps>({
      BaseComponent,
      tokens,
      tree: mergeDeep({}, tree, ...newTrees),
    });
  };

  const build = () => {
    function resolveTags(conditions: SolvableConditions[]) {
      let tagsOut: string[] = [];
      for (let arg of conditions) {
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

    function solve(
      scope: StyleTree,
      ...conditions: SolvableConditions[]
    ): Styles {
      const tags = resolveTags(conditions);
      let out = {};

      for (let key of Object.keys(scope)) {
        const val = (scope as any)[key];
        const tagMatch = tagSyntax.exec(key);

        const value =
          tagMatch?.[1] && typeof val === "object"
            ? tags.includes(tagMatch[1])
              ? solve(val, ...tags)
              : {}
            : { [key]: parseToken(val as any) };

        out = Object.assign(out, value);
      }

      return out satisfies Styles;
    }

    //final component
    return (props: PropsWithConditions) => {
      const { style, conditions, ...rest } = props;
      const conditionStyles = solve(tree, conditions);
      return (
        <BaseComponent
          {...(rest as CProps)}
          style={Object.assign({}, conditionStyles, style)}
        />
      );
    };
  };

  return {
    build,
    extend,
    using,
  };
}
