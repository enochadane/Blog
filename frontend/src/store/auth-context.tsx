import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (accessToken: string) => {},
  logout: () => {},
});

export const AuthContextProvider = (props: any) => {
  let initialToken = localStorage.getItem("accessToken") || "";
  const [accessToken, setAccessToken] = useState(initialToken);

  let userIsLoggedIn = !!accessToken;

  const loginHandler = (accessToken: string) => {
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
  };

  const logoutHandler = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
  };

  const contextValue = {
    token: accessToken,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
