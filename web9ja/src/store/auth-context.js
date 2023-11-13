import { createContext } from "react";

const AuthContext = createContext({
  token: "",
});

export const AuthContextProvider = (props) => {
  const contextValue = {
    token: "",
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};
export default AuthContext;
