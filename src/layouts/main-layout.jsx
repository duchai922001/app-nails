import React from "react";
import Header from "../pages/header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
