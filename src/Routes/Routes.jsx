import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Root from "../Components/Root";
import AboutUs from "../Pages/AboutUS";
import Blogs from "../Pages/Blogs";
import CartItems from "../Pages/CartItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "cartItems",
        element: <CartItems></CartItems>,
      },
      {
        path: "about_us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "our_blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
