import {
  ComponentProps,
  ComponentType,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";
import { mergeDeep } from "./util";
import CSS from "csstype";

export type ConditionMap = Record<string, boolean | undefined>;
export type ConditionList = Condition[];
export type Condition = string | ConditionMap | ConditionList;
export type Conditions =
  | Conditions[]
  | Record<string, boolean>
  | string
  | undefined
  | false
  | null;

export type Styles = CSS.Properties;
export type StyleTree = Styles | { [key: string]: StyleTree };

export type TokenValue = string | number;
export type TokenDictionary = Record<string, TokenValue>;

type StyleBuilder<C extends ComponentType<P>, P = ComponentProps<C>> = {
  using: (...token: TokenDictionary[]) => StyleBuilder<C, P>;
  extend: (...tree: StyleTree[]) => StyleBuilder<C, P>;
  build: () => ForwardRefExoticComponent<
    PropsWithoutRef<
      P & {
        extended?: StyleTree;
        with?: Conditions;
      }
    > &
      RefAttributes<C>
  >;
};

const tagSyntax = /^\[(.+)\]$/i;
const tokenSyntax = /\$([a-zA-Z-_\.0-9]+)/;

export function styled<C extends ComponentType<P>, P = ComponentProps<C>>(
  Component: C
) {
  return makeStyleBuilder<C, P>({
    BaseComponent: Component,
    tokens: {},
    tree: {},
  });
}

function makeStyleBuilder<
  C extends ComponentType<P>,
  P = ComponentProps<C>
>(params: {
  BaseComponent: C;
  tokens: TokenDictionary;
  tree: StyleTree;
}): StyleBuilder<C, P> {
  const { BaseComponent, tokens, tree } = params;

  //add tokens
  const using = (...newTokens: TokenDictionary[]) => {
    return makeStyleBuilder<C, P>({
      BaseComponent,
      tokens: Object.assign({}, tokens, ...newTokens),
      tree,
    });
  };

  //add tree
  const extend = (...newTrees: StyleTree[]) => {
    return makeStyleBuilder<C, P>({
      BaseComponent,
      tokens,
      tree: mergeDeep({}, tree, ...newTrees),
    });
  };

  const build = () => {
    function flattenConditions(...conditions: Conditions[]) {
      let tagsOut: string[] = [];
      for (let arg of conditions) {
        if (!arg) continue;
        else if (typeof arg === "string") tagsOut.push(arg.trim());
        else if (Array.isArray(arg)) tagsOut.push(...flattenConditions(arg));
        else if (typeof arg === "object")
          tagsOut.push(
            ...Object.entries(arg)
              .filter(([_k, v]) => !!v)
              .map(([k, _v]) => k)
          );
      }
      return tagsOut;
    }

    function parseToken(value: TokenValue): TokenValue {
      if (typeof value !== "string") return value;
      const tokenMatch = tokenSyntax.exec(value);
      const token = tokenMatch?.[1];
      return token ? parseToken(tokens[token]) : value;
    }

    function solve(scope: StyleTree, ...conditions: Conditions[]): Styles {
      const tags = flattenConditions(...conditions);
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
    return forwardRef<C, P & { extended?: StyleTree; with?: Conditions }>(
      (props, ref) => {
        const { style, extended, conditions, ...rest } = props as any;
        const conditionStyles = solve(tree, ...conditions);
        return (
          <BaseComponent
            ref={ref}
            {...rest}
            style={Object.assign({}, conditionStyles, style)}
          />
        );
      }
    );
  };

  return {
    build,
    extend,
    using,
  };
}
