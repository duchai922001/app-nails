import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import Home from "../pages/home";
import Contact from "../pages/contact";
const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
