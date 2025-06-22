import { useQuery } from "@tanstack/react-query";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../Components/Auth/AuthContext";

export default function PopularItems({ item }) {
  const { user } = useAuth();
  console.log(user._id);
  const { _id, title, image, price, description } = item;
  // console.log(item);

  // cart data
  // const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // // logged in user data
  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  // const userInfo = isLoggedIn
  //   ? JSON.parse(localStorage.getItem("registeredUser"))
  //   : null;

  // const email = userInfo?.userEmail;

  const fetchCart = async () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  // using tanstack query to refetch
  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const addCart = async (productId) => {
    const userId = user?._id;
    const details = { productId, userId };
    try {
      const res = await fetch(`http://localhost:5000/api/cart/addCart`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      const data = await res.json();
      console.log(data);
      refetch();
    } catch (err) {
      console.log("Add to cart failed:", err.message);
    }
  };

  return (
    <div className="flex flex-col bg-white gap-2 shadow-md shadow-slate-300 hover:shadow-xl rounded-md">
      <div className="h-full w-full rounded-md self-center pb-4">
        <img
          className="h-60 rounded-md w-full object-cover object-center"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4 text-black flex-1">
        <p className="text-sm text-green-500">{title}</p>
        <p className="text-md font-semibold">{description}</p>
      </div>
      <div className="p-4 flex justify-between items-center gap-4">
        <p className="text-black">${price}</p>
        <button
          onClick={() => addCart(_id)}
          className="flex gap-2 items-center bg-green-600 text-md text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <IoCartOutline /> Add
        </button>
      </div>
    </div>
  );
}
