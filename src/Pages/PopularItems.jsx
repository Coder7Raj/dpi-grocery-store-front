import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function PopularItems({ item }) {
  const { name, category, image, price, description } = item;

  const addCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((cartItem) => cartItem.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  };
  return (
    <div className="flex flex-col gap-2 px-4 py-4 bg-gray-100 rounded-md">
      <div className="w-60 h-60 rounded-md self-center pb-4">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
      <div className="pb-4 flex-1">
        <p className="text-sm">{name}</p>
        <p className="text-md font-semibold">{description}</p>
        <p className="text-sm">
          by <span className="text-green-400">Hambarg cly</span>
        </p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <p>${price}</p>
        <button onClick={addCart} className="btn border border-green-400">
          <IoCartOutline /> Add
        </button>
      </div>
    </div>
  );
}
