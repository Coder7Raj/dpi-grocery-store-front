import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-wev.png";

export default function Navbar() {
  const navigate = useNavigate();

  const fetchCart = async () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  const { data: cartItems = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
  //
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const viewCart = () => {
    navigate("/cartItems");
  };
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-35 text-white max-w-[90%] md:max-w-3xl lg:max-w-full mx-auto">
      <div className="flex-1">
        <div className="navbar-start flex">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 md:hidden lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cartItems">cartItems</NavLink>
              </li>
              <li>
                <NavLink to="/about_us">AboutUs</NavLink>
              </li>
              <li>
                <NavLink to="/mega_deals">MegaDeals</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-xl lg:text-2xl md:text-2xl px-0"
          >
            <img
              className="w-6 md:w-10 lg:w-10 px-0 rounded-full"
              src={logo}
              alt="logo"
            />
            GrooFi
          </NavLink>
        </div>
        <div className="navbar-center hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cartItems">cartItems</NavLink>
            </li>
            <li>
              <NavLink to="/about_us">AboutUs</NavLink>
            </li>
            <li>
              <NavLink to="/mega_deals">MegaDeals</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cartItems?.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-black z-[1] mt-48 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {cartItems?.length} Items Added
              </span>
              <span className="text-info">Total: ${totalAmount}</span>
              <div className="card-actions">
                <button
                  onClick={viewCart}
                  className="btn btn-primary btn-block"
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
