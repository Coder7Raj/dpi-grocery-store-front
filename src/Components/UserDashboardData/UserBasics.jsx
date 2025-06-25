import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../Auth/AuthContext";

export default function UserDashboard() {
  const { user, updateUser, fetchUser } = useAuth();
  console.log(user);
  const [balance, setBalance] = useState(null);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  const [selectedImage, setSelectedImage] = useState(user?.profileImage);
  const fileInputRef = useRef(null); // For handling image change

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file); // Must match `upload.single("image")`

    try {
      const res = await axios.put(
        "https://dpi-grocery-store-backend.vercel.app/api/profile/update-profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // if you use cookies or JWTs
        }
      );

      const uploadedUrl = res.data.imageUrl;

      setSelectedImage(uploadedUrl); // Update UI
      updateUser({ profileImage: uploadedUrl });
      await fetchUser();

      // Optionally update AuthContext:
      // updateUser({ image: uploadedUrl });
    } catch (err) {
      console.error("Upload failed", err);
      toast.error("Upload failed");
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger hidden input
  };
  useEffect(() => {
    if (user?.profileImage) {
      setSelectedImage(user.profileImage);
    }
  }, [user?.profileImage]);

  // balance
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "https://dpi-grocery-store-backend.vercel.app/api/wallet/balance",
          {
            withCredentials: true, // if cookies/session needed
          }
        );
        setBalance(response.data); // or response.data.balance if backend sends `{ balance: ... }`
      } catch (err) {
        console.log("Failed to fetch wallet balance", err);
      }
    };

    fetchBalance();
  }, []);
  //
  // pending orders
  useEffect(() => {
    const fetchPendingOrders = async () => {
      try {
        const res = await axios.get(
          "https://dpi-grocery-store-backend.vercel.app/api/order/pendingOrder",
          {
            withCredentials: true,
          }
        );
        setPendingOrders(res.data.orders);
      } catch (err) {
        console.error("Failed to fetch pending orders:", err);
      }
    };

    fetchPendingOrders();
  }, []);
  // completed orders
  useEffect(() => {
    const fetchCompletedOrders = async () => {
      try {
        const res = await axios.get(
          "https://dpi-grocery-store-backend.vercel.app/api/order/completedOrder",
          { withCredentials: true }
        );
        setCompletedOrders(res.data.orders);
      } catch (err) {
        console.error("Failed to fetch completed orders:", err);
      }
    };

    fetchCompletedOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10 space-y-8">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Profile Image (clickable) */}
        <div
          className="relative group cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={`https://dpi-grocery-store-backend.vercel.app/uploads/${selectedImage}`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          />
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 hidden group-hover:flex items-center justify-center text-white text-sm">
            Change Photo
          </div>
        </div>

        {/* Name & Email */}
        <div>
          <h2 className="text-2xl font-bold">{user?.name || "User Name"}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Edit Button */}
      </div>

      {/* Balance & Coin Section */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-green-100 rounded-xl p-4">
          <h3 className="text-xl font-semibold text-green-800">Balance</h3>
          <p className="text-2xl font-bold text-green-700">
            ${balance?.balance}
          </p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-4">
          <h3 className="text-xl font-semibold flex items-center justify-center gap-2 text-yellow-700">
            Coins <FaCoins />
          </h3>
          <p className="text-2xl font-bold text-yellow-600">{user?.coins}</p>
        </div>
      </div>

      {/* Order Status */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-100 rounded-xl p-4">
          <h3 className="text-xl font-semibold text-blue-700">
            Pending Orders
          </h3>
          <p className="text-3xl font-bold text-blue-700">
            {pendingOrders?.length}
          </p>
        </div>
        <div className="bg-indigo-100 rounded-xl p-4">
          <h3 className="text-xl font-semibold text-indigo-700">
            Completed Orders
          </h3>
          <p className="text-3xl font-bold text-indigo-700">
            {completedOrders?.length}
          </p>
        </div>
      </div>

      {/* Badge Section */}
      <div className="bg-gray-100 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700">Badges</h3>
        <p className="italic text-gray-500 mt-1">Coming soon...</p>
      </div>
    </div>
  );
}
