"use client";

import {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  useContext,
} from "react";

const ComponentSandboxContext = createContext<
  [
    props: Record<string, any>,
    setProps: Dispatch<SetStateAction<Record<string, any>>>,
  ]
>([{}, () => {}]);

export const ComponentSandboxProvider = function ({
  children,
  defaultProps,
}: {
  children: React.ReactNode;
  defaultProps?: Record<string, any>;
}) {
  const [props, setProps] = useState(defaultProps ?? {});

  return (
    <ComponentSandboxContext.Provider value={[props, setProps]}>
      {children}
    </ComponentSandboxContext.Provider>
  );
};

export const useComponentSandbox = () => useContext(ComponentSandboxContext);
