import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Root from "../Components/Root";
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
    ],
  },
]);

export default router;
