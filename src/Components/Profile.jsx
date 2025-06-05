import { useEffect, useState } from "react";
import {
  FaCommentDots,
  FaHeadset,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { TbArrowBack } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo-wev.png";

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
  const name = userInfo?.name;
  const image = userInfo?.image;

  const mobile = window.innerWidth < 768;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(true); // for mobile toggle
  const [collapseSidebar, setCollapseSidebar] = useState(false); // for desktop toggle

  // Update screen size info
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapseSidebar(false); // no collapse mode on mobile
        setShowSidebar(false); // hide sidebar on mobile by default
      } else {
        setShowSidebar(true); // show sidebar on large devices
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // run on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      // mobile toggle visibility
      setShowSidebar((prev) => !prev);
    } else {
      // desktop toggle collapse
      setCollapseSidebar((prev) => !prev);
    }
  };

  const navItems = [
    { icon: <FaUser />, label: "My dashboard" },
    { icon: <FaWallet />, label: "Accounts" },
    { icon: <FaMobileAlt />, label: "Mobile" },
    { icon: <FaMoneyCheckAlt />, label: "Payments" },
    { icon: <FaCommentDots />, label: "Complaints" },
    { icon: <FaHeadset />, label: "Supports" },
    { icon: <TbArrowBack className="text-lg" />, label: "Back", to: "/" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {showSidebar && (
        <aside
          className={`h-screen bg-white shadow-lg p-4 space-y-6 ${
            collapseSidebar ? "w-20" : "w-56"
          } fixed md:static z-30 h-full`}
        >
          {/* Cancel icon on mobile */}
          {isMobile && (
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 md:hidden"
            >
              <HiX />
            </button>
          )}

          <div className="flex items-center space-x-2 mt-2">
            <img
              className="w-6 md:w-10 lg:w-10 px-0 rounded-full"
              src={logo}
              alt="logo"
            />
            {!collapseSidebar && <h1 className="font-bold text-lg">GooFi</h1>}
          </div>

          <nav className="flex flex-col space-y-4 text-sm text-gray-700">
            {navItems.map((item, index) => {
              const LinkTag = item.to ? Link : "div";
              const props = item.to ? { to: item.to } : {};
              return (
                <LinkTag
                  key={index}
                  {...props}
                  className="flex items-center space-x-2 hover:text-red-500"
                >
                  {item.icon}
                  {!collapseSidebar && <span>{item.label}</span>}
                </LinkTag>
              );
            })}
          </nav>
        </aside>
      )}

      {/* Main Section */}
      <div className={`flex-1 flex flex-col ${showSidebar ? "" : ""}`}>
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-sm">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="text-2xl text-gray-600">
              <HiMenuAlt3 />
            </button>
            {mobile ? (
              <div>
                <h2 className="text-xl font-semibold">Dashboard</h2>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold">My Dashboard</h2>
                <p className="text-sm text-gray-400">
                  Welcome to GrooFi portal
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={image}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium"> {name?.split(" ")[0]}</span>
            <IoIosArrowDown />
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 h-screen overflow-auto">
          <Outlet />
        </main>

        <footer className="my-8">
          <marquee behavior="alternate" direction="left">
            Welcome {name} to your dashboard
          </marquee>
        </footer>
      </div>
    </div>
  );
}
