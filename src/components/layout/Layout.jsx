import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className="w-full">
      <div className="w-full fixed bg-white">
        <Navbar />
      </div>
      <div className="w-full bg-slate-50 min-h-screen pt-[90px]">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
