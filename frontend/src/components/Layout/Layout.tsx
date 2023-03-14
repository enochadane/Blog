import React, { useContext } from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

import AuthContext from "../../store/auth-context";

const Layout = (props: any) => {
  const authContext = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen">
      {authContext.isLoggedIn && <MainNavigation />}
      <main className="flex flex-1 justify-center items-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
