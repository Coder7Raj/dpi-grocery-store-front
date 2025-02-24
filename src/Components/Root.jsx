import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <div className="max-w-md md:max-w-3xl lg:max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}
