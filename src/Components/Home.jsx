import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
}
