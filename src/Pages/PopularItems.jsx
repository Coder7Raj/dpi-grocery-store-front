import { useQuery } from "@tanstack/react-query";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

export default function PopularItems({ item }) {
  const { title, image, price, description } = item;

  // cart data
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // logged in user data
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userInfo = isLoggedIn
    ? JSON.parse(localStorage.getItem("registeredUser"))
    : null;

  const email = userInfo?.userEmail;

  const fetchCart = async () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  // using tanstack query to refetch
  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const addCart = async () => {
    if (!email) {
      toast.warn("Please Login First!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",
      });
      return;
    }

    // checking the item is exist or not
    const exist = cartData.find(
      (cartItem) => cartItem?.id === item?.id && cartItem?.email === email
    );

    if (exist) {
      toast.warn("Product already in cart!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",
      });
      return;
    }

    // adding data
    cartData.push({ ...item, quantity: 1, email });
    localStorage.setItem("cart", JSON.stringify(cartData));
    // refetching
    await refetch();

    toast.success("Product added to cart!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
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
          onClick={addCart}
          className="flex gap-2 items-center bg-green-600 text-md text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <IoCartOutline /> Add
        </button>
      </div>
    </div>
  );
}
