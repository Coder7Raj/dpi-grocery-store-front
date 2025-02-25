import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import PopularProducts from "./PopularProducts";
import Subscribe from "./Subscribe";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Outlet></Outlet>
      <FeaturedProducts></FeaturedProducts>
      <PopularProducts></PopularProducts>
      <Subscribe></Subscribe>
    </div>
  );
}
