import { useState } from "react";
import {
  FaCheckCircle,
  FaCommentDots,
  FaHeadset,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
// import profileImage from "./assets/user.jpg"; // Replace with your image

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);

  // getting user info from local storage
  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
  const name = userInfo?.name;
  const email = userInfo?.userEmail;
  const pass = userInfo?.password;
  const image = userInfo?.image;

  const togglePassword = () => setShowPassword(!showPassword);

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

        {/* Center Content */}
        <main className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={image}
                alt="Profile"
                className="w-[80%] h-[80%] object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-500 mb-1">
                +1 - 856-589-099-1236
              </p>
              <p className="text-sm text-gray-500 mb-2">{email}</p>
              <div className="flex items-center text-green-500 mb-4">
                <FaCheckCircle className="mr-1" />
                <span className="text-sm">SMS alerts activation</span>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-full">
                Save
              </button>
            </div>
            <div className="mt-6 text-xs text-gray-400 text-center">
              Last login: 07 Aug 2018 14:14
              <br />
              Windows IP: New York, US
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-around">
            {/* xPay Accounts */}
            <div className="w-full h-full bg-white rounded-2xl shadow-md p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">My xPay accounts</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <FiEdit3 />
                </button>
              </div>
              <div>
                <p className="text-sm text-gray-600">Active account</p>
                <p className="font-semibold">9048 5680 0258 4525</p>
                <button className="mt-2 text-xs bg-red-500 text-white px-3 py-1 rounded-full">
                  Block Account
                </button>
              </div>
              <div>
                <p className="text-sm text-gray-600">Blocked account</p>
                <p className="font-semibold">1254 4456 9856 3214</p>
                <button className="mt-2 text-xs bg-green-500 text-white px-3 py-1 rounded-full">
                  Unlock account
                </button>
              </div>
            </div>

            {/* My Bills */}
            <div className="w-full h-full bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">My bills</h3>
                <button className="text-gray-400 text-sm">Filter by</button>
              </div>
              <ul className="mt-4 space-y-4">
                <li className="flex justify-between items-center">
                  <span>Phone bill</span>
                  <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">
                    Bill paid
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Instant bill</span>
                  <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">
                    Not paid
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>House rent</span>
                  <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">
                    Bill paid
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Income tax</span>
                  <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">
                    Bill paid
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
