import React, { Fragment } from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props: any) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
