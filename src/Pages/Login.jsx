import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  const userLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Find the user with matching email and password
    const matchedUser = userInfo.find(
      (user) => user.userEmail === email && user.password === password
    );
    if (matchedUser) {
      localStorage.setItem("registeredUser", JSON.stringify(matchedUser));
      localStorage.setItem("isLoggedIn", "true");

      toast.success("Successfully logged in!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",
      });

      navigate("/");
    } else {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",
      });
    }
  };

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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
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
