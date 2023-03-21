import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

let logoutTimer: string | number | NodeJS.Timeout | undefined;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (accessToken: string) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime: any) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const token = localStorage.getItem("accessToken");
  const expirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(expirationTime);

  if (remainingTime <= 3600) {
    localStorage.removeItem("accessToken");
    return null;
  }

  return {
    token,
    remainingTime,
  };
};

export const AuthContextProvider = (props: any) => {
  const tokenData = retrieveStoredToken();
  let initialToken: any = "";
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [accessToken, setAccessToken] = useState(initialToken);
  const navigate = useNavigate();

  let userIsLoggedIn = !!accessToken;

  const logoutHandler = useCallback(() => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expirationTime");
    navigate("/auth");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, [navigate]);

  const loginHandler = (accessToken: string) => {
    const EXPIRES_IN = new Date(new Date().getTime() + 60 * 60 * 1000);
    localStorage.setItem("expirationTime", EXPIRES_IN.toISOString());
    const remainingTime = calculateRemainingTime(EXPIRES_IN);

    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime);
    }
  }, [tokenData, logoutHandler]);

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
