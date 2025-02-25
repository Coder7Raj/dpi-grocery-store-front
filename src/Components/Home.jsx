import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import PopularProducts from "./PopularProducts";
import Subscribe from "./Subscribe";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <PopularProducts></PopularProducts>
      <Subscribe></Subscribe>
    </div>
  );
}
