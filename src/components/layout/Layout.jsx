import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full bg-slate-50 min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
