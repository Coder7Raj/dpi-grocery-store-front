import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuCircleUser } from "react-icons/lu";
import { MdDashboardCustomize } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { TbArrowBack } from "react-icons/tb";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo-wev.png";
import { useAuth } from "../Auth/AuthContext";

export default function UserProfile() {
  const { user, logout } = useAuth();

  const location = useLocation();

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
        setShowSidebar(true); // show sidebar on md to all devices
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
    { icon: <MdDashboardCustomize />, label: "My dashboard", to: "" },
    { icon: <RiAccountBoxFill />, label: "My Account", to: "user_accounts" },
    { icon: <RiAccountBoxFill />, label: "My Order", to: "myOrder" },
    { icon: <TbArrowBack className="text-lg" />, label: "Back", to: "/" },
  ];
  //
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    logout();
  };

  // Close dropdown on click outside the link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="flex">
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

          <div className="flex items-center space-x-2 mt-2 border-b-2 border-gray-500">
            <img
              className="w-6 md:w-10 lg:w-10 px-0 rounded-full"
              src={logo}
              alt="logo"
            />
            {!collapseSidebar && <h1 className="font-bold text-lg">GrooFi</h1>}
          </div>

          <nav className="flex flex-col space-y-4 text-sm text-gray-700">
            {navItems.map((item, index) => {
              const fullPath = "/user_profile" + (item.to ? `/${item.to}` : "");
              const isActive = location.pathname === fullPath;

              return (
                <NavLink
                  key={index}
                  to={item.to}
                  className={`flex items-center px-4 space-x-2 py-4 border rounded-md ${
                    isActive
                      ? "outline-none bg-green-500 text-black border-gray-600 hover:text-white"
                      : "text-gray-700 border-transparent hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {!collapseSidebar && <span>{item.label}</span>}
                </NavLink>
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
          {/*  */}
          <div className="dropdown dropdown-end relative" ref={dropdownRef}>
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
              className="px-2 py-3 flex items-center space-x-2 hover:bg-green-500 border-none outline-none rounded-md cursor-pointer"
            >
              <div className="w-10 rounded-full">
                {user?.email && user?.image?.trim() ? (
                  <img alt="user image" src={user?.image} />
                ) : (
                  <div className="h-[80%] w-[80%] m-auto">
                    <LuCircleUser className="h-full w-full" />
                  </div>
                )}
              </div>
              <span className="font-medium">{user?.name.split(" ")[0]}</span>
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {isOpen && (
              <ul className="menu absolute right-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md hover:bg-green-400 outline-none border border-gray-500 my-2 w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 h-[calc(100vh-185px)] overflow-auto">
          <Outlet />
        </main>

        <footer className="my-8">
          <marquee behavior="scroll" direction="left">
            Welcome {user?.name} to your dashboard
          </marquee>
        </footer>
      </div>
    </div>
  );
}
