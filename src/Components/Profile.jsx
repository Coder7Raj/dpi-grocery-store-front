import {
  FaCommentDots,
  FaHeadset,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TbArrowBack } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  // getting user info from local storage
  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
  const name = userInfo?.name;
  const image = userInfo?.image;

  return (
    <div className="p-0 lg:min-h-screen flex font-sans">
      {/* Sidebar */}
      <aside className="w-56 bg-white shadow-lg p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-md" />
          <h1 className="font-bold text-lg">xPay</h1>
        </div>
        <nav className="flex flex-col space-y-4 text-sm text-gray-700">
          <a
            href="#"
            className="flex items-center text-red-500 font-semibold space-x-2"
          >
            <FaUser /> <span>My dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaWallet /> <span>Accounts</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaMobileAlt /> <span>Mobile</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaMoneyCheckAlt /> <span>Payments</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaCommentDots /> <span>Complaints</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <FaHeadset /> <span>Supports</span>
          </a>
          <Link className="flex items-center space-x-2" to="/">
            <TbArrowBack className="text-lg" /> <span>Back</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-between items-center p-4 bg-white shadow-sm">
          <div>
            <h2 className="text-xl font-semibold">My finance dashboard</h2>
            <p className="text-sm text-gray-400">
              Welcome to xPay payment portal
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={image}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">{name}</span>
            <IoIosArrowDown />
          </div>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
