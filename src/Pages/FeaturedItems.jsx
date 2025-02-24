import React from "react";

export default function FeaturedItems({ item }) {
  const { name, category, image } = item;

  return (
    <div className="p-4 flex flex-col justify-center items-center bg-sky-100 rounded-lg shadow-lg">
      <img
        className="w-40 h-40 object-cover rounded-md"
        src={image}
        alt={name}
      />
      <div className="text-center mt-2">
        <p className="text-gray-600 text-sm">{category}</p>
        <h1 className="text-lg font-semibold">{name}</h1>
      </div>
    </div>
  );
}
