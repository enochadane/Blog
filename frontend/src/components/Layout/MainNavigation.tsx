import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authContext.logout();
    navigate("/auth");
  };

  const handleArticlesPageNavigation = () => {
    navigate("/articles");
  };

  const handleHomePageNavigation = () => {
    navigate("/");
  };

  return (
    <header className="bg-blue-700 p-5">
      <nav className="flex justify-around text-white font-bold">
        <div className="flex space-x-4">
          <h2 className="text-xl">
            <button onClick={handleHomePageNavigation}>Home</button>
          </h2>
          <h2 className="text-xl">
            <button onClick={handleArticlesPageNavigation}>Articles</button>
          </h2>
        </div>
        <ul className="flex space-x-4">
          <li>
            <button onClick={logoutHandler}>
              <img
                className="w-8 rounded-full"
                src="https://placekitten.com/250/250"
                alt="avatar"
              />
            </button>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
