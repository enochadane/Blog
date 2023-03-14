import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [isLogIn, setIsLogIn] = useState(true);

  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();
  const usernameInputRef: any = useRef();

  const switchAuthModeHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    // console.log(emailInputRef.current.value, passwordInputRef.current.value);
    // authContext.login();
    // console.log(authContext.isLoggedIn);
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (isLogIn) {
      const fetchLogin = async () => {
        try {
          const res = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) {
            const text = await res.text();
            throw new Error(text);
          }
          const data = await res.json();
          authContext.login(data.access_token);
          navigate("/");
        } catch (e: any) {
          console.log(e.message);
        }
      };
      fetchLogin();
    } else {
      const username = usernameInputRef.current.value;
      const fetchSignup = async () => {
        try {
          const res = await fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            body: JSON.stringify({
              username,
              email,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!res.ok) {
            const text = await res.text();
            throw new Error(text);
          }

          const data = await res.json();
          console.log(data);
          setIsLogIn(true);
        } catch (e: any) {
          console.log(e.message);
        }
      };
      fetchSignup();
    }
  };

  return (
    <>
      {/* <div className="flex justify-center items-center"> */}
      <div className="flex flex-col bg-gray-300 p-10 w-1/3">
        <h3 className="text-xl font-bold text-center">
          {isLogIn ? "Login" : "Signup"}
        </h3>
        <form
          onSubmit={submitHandler}
          className="container flex flex-col items-center m-0"
        >
          {!isLogIn && (
            <div className="justify-start my-2 px-5 w-full">
              <label htmlFor="username" className="font-bold my-10">
                Username
              </label>
              <input
                className="border border-gray-300 rounded-md w-full py-2 px-3 placeholder-gray-400 text-gray-700 focus:outline-none"
                type="text"
                id="username"
                required
                placeholder="Enter username"
                ref={usernameInputRef}
              />
            </div>
          )}
          <div className="justify-start my-2 px-5 w-full">
            <label htmlFor="email" className="font-bold my-10">
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 placeholder-gray-400 text-gray-700 focus:outline-none"
              type="text"
              id="email"
              required
              placeholder="Enter email"
              ref={emailInputRef}
            />
          </div>
          <div className="justify-start my-2 px-5 w-full">
            <label htmlFor="password" className="font-bold my-10">
              Password
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 placeholder-gray-400 text-gray-700 focus:outline-none"
              type="text"
              id="password"
              required
              placeholder="Enter password"
              ref={passwordInputRef}
            />
          </div>
          <div className="flex flex-col items-center w-full px-5">
            <button className="bg-blue-700 py-2 m-5 text-white rounded font-semibold w-full">
              {isLogIn ? "Login" : "Create Account"}
            </button>
            <button type="button" onClick={switchAuthModeHandler}>
              {isLogIn ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
};

export default AuthForm;
