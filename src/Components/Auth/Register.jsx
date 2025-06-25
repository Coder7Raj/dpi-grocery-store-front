import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    const data = e.target;
    const name = data.name.value;
    const email = data.email.value;
    const password = data.password.value;

    const newUser = {
      name,
      email,
      password,
    };
    try {
      const res = await fetch(
        "https://dpi-grocery-store-backend.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(newUser),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response text:", errorText);
        throw new Error(errorText);
      }

      const result = await res.json();

      localStorage.setItem(
        "registeredUser",
        JSON.stringify({ name, email, password })
      );
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err.message);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen w-full m-auto flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Register at Groofi
        </h2>
        <form className="space-y-5" onSubmit={registerUser}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-white outline-none"
            required
          />
          {/* <input
            type="text"
            name="image"
            placeholder="Image Link"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-white outline-none"
            required
          /> */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-white outline-none"
            required
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-white outline-none"
              required
            />
            <span
              onClick={togglePassword}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?
          <Link to="/user_login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
