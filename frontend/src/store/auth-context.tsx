import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props: any) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setUserIsLoggedIn(true)
  };

  const logoutHandler = () => {
    setUserIsLoggedIn(false)
  };

  const contextValue = {
    token: "",
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
