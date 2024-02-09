import React from "react";
import { Outlet } from "react-router-dom";
import ChartMenu from "../components/ChartMenu/ChartMenu";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function HeaderLayout() {
  return (
    <>
      <Header />
      <ChartMenu />
      <Outlet />
      <Footer />
    </>
  );
}

export default HeaderLayout;
