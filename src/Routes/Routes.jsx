import { createBrowserRouter } from "react-router-dom";
import AdminProfile from "../Components/AdmonDashboard/AdminProfile";
import AllProducts from "../Components/AllProducts";
import Home from "../Components/Home";
import Root from "../Components/Root";
import UserAccounts from "../Components/UserDashboardData/UserAccounts";
import UserBasics from "../Components/UserDashboardData/UserBasics";
import UserBlogs from "../Components/UserDashboardData/UserBlogs";
import UserComplaints from "../Components/UserDashboardData/UserComplaints";
import UserPayments from "../Components/UserDashboardData/UserPayments";
import UserProfile from "../Components/UserDashboardData/UserProfile";
import AboutUs from "../Pages/AboutUS";
import Blogs from "../Pages/Blogs";
import CartItems from "../Pages/CartItems";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  // ByDefaultObject
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "cartItems",
        element: (
          <PrivateRoute>
            <CartItems></CartItems>
          </PrivateRoute>
        ),
      },

      {
        path: "about_us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "our_blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "all_products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      // User Credentials
      {
        path: "user_profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
        // user profile object
        children: [
          {
            path: "",
            element: <UserBasics></UserBasics>,
          },
          {
            path: "user_accounts",
            element: <UserAccounts></UserAccounts>,
          },
          {
            path: "user_blogs",
            element: <UserBlogs></UserBlogs>,
          },
          {
            path: "user_payments",
            element: <UserPayments></UserPayments>,
          },
          {
            path: "user_complaints",
            element: <UserComplaints></UserComplaints>,
          },
        ],
      },

      // Admin Credentials
      {
        path: "admin_profile",
        element: <AdminProfile></AdminProfile>,
        // admin profile object
        children: [],
      },
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
