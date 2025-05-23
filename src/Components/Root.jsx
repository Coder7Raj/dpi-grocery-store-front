import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="w-full sm:min-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto
"
      >
        <ToastContainer position="top-center" theme="colored" />
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
