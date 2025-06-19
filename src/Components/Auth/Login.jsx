import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  const userLogin = async (e) => {
    e.preventDefault();

    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;

    const loginUser = {
      email,
      password,
    };

    try {
      const res = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginUser),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      const data = await res.json();
      console.log("Registration successful:", data);
      navigate("/");
    } catch {
      (err) => console.error("Registration failed:", err.message);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="w-full min-h-screen m-auto flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login to Groofi
        </h2>
        <form className="space-y-5" onSubmit={userLogin}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-white outline-none"
            required
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-white outline-none"
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
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account?
          <Link to="/user_register" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
