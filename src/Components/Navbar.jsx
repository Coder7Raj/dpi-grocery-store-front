import { useEffect, useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { LuCircleUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo-wev.png";
import { useAuth } from "./Auth/AuthContext";
import { useCart } from "./Auth/CartContext";
import { useAmount } from "./Custom/AmountContext";

export default function Navbar() {
  const { user } = useAuth();
  const { amount, setAmount } = useAmount();
  const [showModal, setShowModal] = useState(false);
  const [newAmount, setNewAmount] = useState(amount);
  const navigate = useNavigate();

  //
  // const { data: cart = [] } = useCart();
  // console.log(cart);
  const { cart, getCart } = useCart();
  console.log(cart);

  useEffect(() => {
    getCart();
  }, []);

  const viewCart = () => {
    navigate("/cartItems");
  };

  const handleOpenModal = () => {
    setNewAmount(amount);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleUpdateAmount = () => {
    if (newAmount <= 2000) {
      setAmount(newAmount);
    } else {
      toast.warn("Amount cannot exceed 2000!");
    }
    setShowModal(false);
  };

  //

  // logged out user
  const handleUserLogout = async () => {
    console.log("clicked");

    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      navigate("/user_login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const handleUserRegister = async () => {
    navigate("/user_register");
  };

  // login user
  const userLogin = () => {
    navigate("/user_login");
  };

  return (
    <div
      className="navbar fixed z-10 bg-black bg-opacity-35 text-white min-w-full
"
    >
      <div className="flex-1">
        <div className="navbar-start flex">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 md:flex lg:hidden"
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
              className="menu menu-sm dropdown-content bg-green-50 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all_products"> AllProducts</NavLink>
              </li>
              <li>
                <NavLink to="/cartItems">CartItems</NavLink>
              </li>
              <li>
                <NavLink to="/about_us">AboutUs</NavLink>
              </li>
              <li>
                <NavLink to="/our_blogs">Blog's</NavLink>
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
        <div className="navbar-center hidden md:hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all_products"> AllProducts</NavLink>
            </li>
            <li>
              <NavLink to="/cartItems">CartItems</NavLink>
            </li>
            <li>
              <NavLink to="/about_us">AboutUs</NavLink>
            </li>
            <li>
              <NavLink to="/our_blogs">Blog's</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <div className="md:mr-2">
          <button
            onClick={handleOpenModal}
            className="flex items-center gap-1 outline-none border-none text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
          >
            <span className="text-md md:text-lg">
              {amount.toLocaleString()}
            </span>
            <span className="text-md md:text-lg text-white">
              <FaSackDollar />
            </span>
          </button>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-green-50 p-4 rounded-md shadow-md w-80">
                <h2 className="text-lg text-green-500 font-bold mb-2">
                  Update Amount
                </h2>
                <input
                  type="number"
                  value={newAmount}
                  onChange={(e) => setNewAmount(Number(e.target.value))}
                  className="w-full text-black bg-white outline-none border-none p-2 rounded-md mb-3"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleCloseModal}
                    className="px-3 py-1 bg-gray-500 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateAmount}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="dropdown dropdown-end flex items-center mr-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[60%] w-[60%]"
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
              <span className="badge bg-white text-black border-none outline-none badge-sm mr-2 indicator-item">
                {cart?.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-green-50 text-black z-40 mt-48 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {/* {isLoggedIn && filteredCartItems
                  ? filteredCartItems?.length
                  : 0} */}
                _Items Added
              </span>
              <span className="text-info">
                {/* Total: ${isLoggedIn && filteredCartItems ? leastAmount : 0} */}
                price
              </span>
              <div className="card-actions">
                <button
                  onClick={viewCart}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  View Cart
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
              {user?.email && user?.image?.trim() ? (
                <img alt="user image" src={user?.image} />
              ) : (
                <div className="h-[80%] w-[80%] m-auto">
                  <LuCircleUser className="h-full w-full" />
                </div>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-green-50 space-y-2 text-black rounded-box z-40 mt-3 w-52 p-2 shadow"
          >
            <li>
              {user ? (
                user.isAdmin ? (
                  <NavLink to="/admin_profile" className="justify-between">
                    Admin Dashboard
                  </NavLink>
                ) : (
                  <NavLink to="/user_profile" className="justify-between">
                    User Dashboard
                  </NavLink>
                )
              ) : (
                ""
              )}
            </li>
            <li>
              {user?.email ? (
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition"
                  onClick={handleUserLogout}
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col space-y-2 w-full">
                  <button
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition"
                    onClick={userLogin}
                  >
                    Login
                  </button>
                  <button
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition"
                    onClick={handleUserRegister}
                  >
                    Register
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
