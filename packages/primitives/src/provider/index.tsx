import { createContext, ComponentType, useContext, useMemo } from "react";
import { PrimitiveProps } from "../types";

export type PrimitiveContextType = {
  Box: ComponentType<PrimitiveProps.Box>;
  Pressable: ComponentType<PrimitiveProps.Pressable>;
  Text: ComponentType<PrimitiveProps.Box>;
};

const defaultPrimitiveContext: PrimitiveContextType = {
  Box: (props) => <>{props.children}</>,
  Pressable: (props) => <>{props.children}</>,
  Text: (props) => <>{props.children}</>,
};

export const PrimitiveContext = createContext(defaultPrimitiveContext);

export type PrimitiveProviderProps = PrimitiveProps.Box & {
  primitives?: Partial<PrimitiveContextType>;
};

export function PrimitiveProvider(props: PrimitiveProviderProps) {
  const { children, primitives: primitiveProps } = props;

  const primitives = useMemo(
    () => ({ ...defaultPrimitiveContext, ...primitiveProps }),
    []
  );

  return (
    <PrimitiveContext.Provider value={primitives}>
      {children}
    </PrimitiveContext.Provider>
  );
}

export function usePrimitive() {
  return useContext(PrimitiveContext);
}
