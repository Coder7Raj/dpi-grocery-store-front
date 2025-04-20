import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Components/AuthLayout";
import Home from "../Components/Home";
import Root from "../Components/Root";
import AboutUs from "../Pages/AboutUS";
import Blogs from "../Pages/Blogs";
import CartItems from "../Pages/CartItems";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
  {
    path: "",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "user_login",
        element: <Login></Login>,
      },
      {
        path: "user_register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
