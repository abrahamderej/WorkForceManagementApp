import React, { useState } from "react";
import Sidebar from "react-sidebar";
import Header from "./header/header";
import SideMenu from "./SideMenu";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import {
  AccountProvider,
  AccountDefaultState,
} from "../contexts/account-context";
import { Redirect } from "react-router";

const mql = window.matchMedia(`(min-width: 800px)`);

export const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);
  const isLogin = useSelector((state) => state.user.userLogin.isLogin);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  console.log(isLogin);

  mql.addListener(() => {
    setSidebarDocked(mql.matches);
  });

  if (!isLogin) {
    return <Redirect to="./" />;
  }

  const closeSideBar = () => {
    setSidebarOpen(false);
    setSidebarDocked(false);
  };

  const openSideBar = () => {
    setSidebarOpen(true);
    setSidebarDocked(true);
  };

  return (
    <AccountProvider value={AccountDefaultState}>
      <Sidebar
        sidebar={<SideMenu toggleMenu={closeSideBar} />}
        open={sidebarOpen}
        // onSetOpen={setSidebarOpen}
        docked={sidebarDocked}
      >
        <Header toggleMenu={openSideBar} />
        <div className="container-fluid">{children}</div>
      </Sidebar>
    </AccountProvider>
  );
};
