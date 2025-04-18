import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function PopularItems({ item }) {
  const { name, image, price, description } = item;

  const fetchCart = async () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  const addCart = async () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((cartItem) => cartItem.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
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
