import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

export default function PopularItems({ item }) {
  const { name, image, price, description } = item;

  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
  const userEmail = userInfo?.email;

  // if (!userEmail) {
  //   alert("You must be logged in to add items to the cart.");
  //   return;
  // }

  const fetchCart = async () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  // using tanstack query to refetch
  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  // adding items to cart
  const addCart = async () => {
    // checking user is logged in or not
    if (!userEmail) {
      // alert("You must be logged in to add items to the cart.");
      toast.warn("You must be logged in !", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        theme: "colored",
      });
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (cartItem) => cartItem.name === name && cartItem.userEmail === userEmail
    );

    // checking existing item in cart
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1, userEmail });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    await refetch();
  };

  return (
    <div className="flex flex-col gap-2 bg-gray-100 rounded-md">
      <div className="rounded-md self-center pb-4">
        <img
          className="h-60 rounded-md w-full object-cover object-center"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4 flex-1">
        <p className="text-sm text-green-500">{name}</p>
        <p className="text-md font-semibold">{description}</p>
      </div>
      <div className="p-4 flex justify-between items-center gap-4">
        <p>${price}</p>
        <button onClick={addCart} className="btn border border-green-400">
          <IoCartOutline /> Add
        </button>
      </div>
    </div>
  );
}
