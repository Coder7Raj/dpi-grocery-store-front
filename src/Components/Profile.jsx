import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
    <div className="pt-44 pb-52 flex flex-col justify-center items-center gap-6">
      <h1 className="text-green-500 text-center font-semibold text-xl">
        {name} Profile
      </h1>
      <div className="px-20 py-8 shadow-md hover:shadow-xl">
        {/* img */}
        <div className="w-52 border border-green-400 rounded-3xl">
          <img
            className="h-full w-full object-cover rounded-3xl"
            src={image}
            alt="user image"
          />
        </div>

        {/* more info */}
        <div className="space-y-6 mt-3 relative">
          <h1 className="text-black">
            Name: <span>{name}</span>
          </h1>
          <p className="text-black">
            Email: <span>{email}</span>
          </p>

          <div className="text-black flex items-center gap-2">
            <p>
              Password:{" "}
              <span>{showPassword ? pass : "*".repeat(pass?.length || 8)}</span>
            </p>
            <span
              onClick={togglePassword}
              className="text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
