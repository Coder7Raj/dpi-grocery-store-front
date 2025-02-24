import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Root from "../Components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [],
      },
    ],
  },
]);

export default router;
