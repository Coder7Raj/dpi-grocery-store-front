import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Root() {
  const location = useLocation();

  // Check if the current route starts with either /user_profile or /admin_profile
  const isProfilePage =
    location.pathname.startsWith("/user_profile") ||
    location.pathname.startsWith("/admin_profile");

  return (
    <>
      {!isProfilePage && <Navbar />}
      <main className="w-full sm:min-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <ToastContainer position="top-center" theme="colored" />
        <Outlet />
      </main>

      {!isProfilePage && <Footer />}
    </>
  );
}
