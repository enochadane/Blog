import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const authContext = useContext(AuthContext);
  const [isLogIn, setIsLogIn] = useState(true);
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();

  const switchAuthModeHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(emailInputRef.current.value, passwordInputRef.current.value);
    authContext.login();
    console.log(authContext.isLoggedIn);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/3"></div>
        <div className="flex flex-col mt-20 bg-gray-300 p-5 w-1/2">
          <h3 className="text-xl font-bold text-center">
            {isLogIn ? "Login" : "Signup"}
          </h3>
          <form
            onSubmit={submitHandler}
            className="container flex flex-col items-center m-0"
          >
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
        <div className="w-1/3"></div>
      </div>
    </>
  );
};

export default AuthForm;
