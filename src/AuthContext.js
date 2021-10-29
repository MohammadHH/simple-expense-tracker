import React, { useCallback, useState } from "react";
import { login as authenticate } from "./api";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (name, password) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"));

  const login = async (name, password) => {
    const data = await authenticate(name, password);
    if (data) setLoggedIn(true);
    else setLoggedIn(false);
  };

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setLoggedIn(false);
  }, []);

  const context = { isLoggedIn: loggedIn, login, logout };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
