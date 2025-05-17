import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <div
      className="min-w-full sm:min-w-md md:min-w-lg lg:min-w-xl xl:min-w-2xl 2xl:min-w-3xl mx-auto
"
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
