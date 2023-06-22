import { createContext, ComponentType } from "react";
import { Primitive } from "../types";

export type PrimitiveContextType = {
  Box: ComponentType<Primitive.Atom>;
  Text: ComponentType<Primitive.Atom>;
};

const defaultPrimitiveContext: PrimitiveContextType = {
  Box: (props: Primitive.Atom) => props.children,
  Text: (props: Primitive.Atom) => props.children,
};

export const PrimitiveContext = createContext(defaultPrimitiveContext);

export function PrimitiveProvider(props: Primitive.Atom) {
  const { children } = props;

  return (
    <PrimitiveContext.Provider value={defaultPrimitiveContext}>
      {children}
    </PrimitiveContext.Provider>
  );
}
