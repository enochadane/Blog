import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authContext = useContext(AuthContext);

  const logoutHandler = () => {
    authContext.logout();
  };
  return (
    <header className="bg-blue-700 p-5">
      <nav className="flex justify-around text-white font-bold">
        <h2 className="text-2xl justify-start">
          <a href="/">Articles</a>
        </h2>
        <ul className="flex space-x-4">
          <li>
            {authContext.isLoggedIn && (
              <button onClick={logoutHandler}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
