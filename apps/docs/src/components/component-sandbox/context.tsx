"use client";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
type Props = Record<string, string | number | boolean | undefined>;
const Context = createContext<{
  props: Props;
  setProps: Dispatch<SetStateAction<Props>>;
  reset: () => void;
  revision: number;
} | null>(null);
export function ComponentSandboxProvider({
  children,
  defaultProps,
}: {
  children: ReactNode;
  defaultProps: Props;
}) {
  const [props, setProps] = useState(defaultProps);
  const [revision, setRevision] = useState(0);
  return (
    <Context.Provider
      value={{
        props,
        setProps,
        revision,
        reset: () => {
          setProps(defaultProps);
          setRevision((value) => value + 1);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function useComponentSandbox() {
  const context = useContext(Context);
  if (!context) throw new Error("Missing component sandbox provider");
  return context;
}
