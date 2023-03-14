import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";

import AuthContext from "../../store/auth-context";

interface AppState extends DefaultRootState {
  username: string;
  email: string;
  id: number;
}

const MainNavigation = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state);
  console.log(user, "username");

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("http://localhost:3000/auth/profile", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      dispatch({
        type: "FETCH_PROFILE",
        payload: data,
      });
    };
    if (authContext.isLoggedIn) {
      fetchProfile();
    }
  }, [authContext.isLoggedIn, dispatch]);

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
          <li className="flex flex-row space-x-2">
            <button>
              <img
                className="w-8 rounded-full"
                src="https://placekitten.com/250/250"
                alt="avatar"
              />
            </button>
            <span className="font-light">{user?.username}</span>
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
