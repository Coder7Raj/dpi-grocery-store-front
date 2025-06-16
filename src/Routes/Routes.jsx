import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Components/AdmonDashboard/AddProducts";
import AdminBasics from "../Components/AdmonDashboard/AdminBasics";
import AdminProfile from "../Components/AdmonDashboard/AdminProfile";
import ProductManage from "../Components/AdmonDashboard/ProductManage";
import UpdateProduct from "../Components/AdmonDashboard/UpdateProduct";
import UserManage from "../Components/AdmonDashboard/UserManage";
import AllProducts from "../Components/AllProducts";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
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
import Error from "../Pages/Error";
import UserCartItems from "../Pages/UserCartItems";
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
            <UserCartItems></UserCartItems>
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
        children: [
          {
            path: "",
            element: <AdminBasics></AdminBasics>,
          },
          {
            path: "manage_products",
            element: <ProductManage></ProductManage>,
          },
          {
            path: "manage_users",
            element: <UserManage></UserManage>,
          },
          {
            path: "add_product",
            element: <AddProducts></AddProducts>,
          },
          {
            path: "update_product/:id",
            element: <UpdateProduct></UpdateProduct>,
            loader: async ({ params }) => {
              const res = await fetch(
                `http://localhost:5000/api/product/${params.id}`
              );
              const data = await res.json();
              return data; // or data.product or data.data based on API
            },
          },
        ],
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
