import React, { useState, createContext } from "react";

interface AuthenticationContextType {
  setAuthData(value: AuthenticationDataType): void;
  authenticationData: AuthenticationDataType;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  setAuthData: () => {},
  authenticationData: {},
});

export function AuthenticationProvider({ children }: any) {
  const [authenticationData, setAuthenticationData] = useState<
    AuthenticationDataType | any
  >({});

  function setAuthData(updatedValues: AuthenticationDataType): void {
    setAuthenticationData((prevState: AuthenticationDataType) => {
      return { ...prevState, ...updatedValues };
    });
  }

  return (
    <AuthenticationContext.Provider value={{ authenticationData, setAuthData }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
