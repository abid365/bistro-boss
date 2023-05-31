import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div className="flex flex-col min-h-[100vh]">
      {/* or logic: if user is logged in then noHeaderFooter will be true and will not render navbar, cz or logic finds the first param true thats why it doesn't move to the nnext pram. but if noHeaderFooter becomes false it will pass to the next parametre and will render navbar */}
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      <div className="mt-auto">{noHeaderFooter || <Footer></Footer>}</div>
    </div>
  );
};

export default Main;
