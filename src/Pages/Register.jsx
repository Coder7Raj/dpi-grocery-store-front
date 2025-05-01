import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const userEmail = user?.userEmail;
  console.log(userEmail);

  // registered user
  const registerUser = (e) => {
    e.preventDefault();

    const data = e.target;
    const name = data.name.value;
    const image = data.image.value;
    const userEmail = data.email.value;
    const password = data.password.value;
    // console.log(name, email, password);

    const user_data = {
      name: name,
      image: image,
      userEmail: userEmail,
      password: password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(user_data));
    console.log("registeredUser", user_data);
    data.reset();

    //
    if (userEmail) {
      navigate("/");
    }
  };
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
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
