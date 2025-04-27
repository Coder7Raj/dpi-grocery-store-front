import React from "react";
import MegaDeals from "../Pages/MegaDeals";
import Banner from "./Banner";
import BestDeals from "./BestDeals";
import FeaturedProducts from "./FeaturedProducts";
import PopularProducts from "./PopularProducts";
import Subscribe from "./Subscribe";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <PopularProducts></PopularProducts>
      <BestDeals></BestDeals>
      <MegaDeals></MegaDeals>
      <Subscribe></Subscribe>
    </div>
  );
}
