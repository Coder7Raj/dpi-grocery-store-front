import React from "react";

export default function Deals({ item }) {
  const { name, image } = item;
  return (
    // <div
    //   className="flex items-start bg-cover bg-center w-full h-full text-white"
    //   style={{ backgroundImage: `url(${image})` }}
    // >
    <div className="flex relative h-full">
      <img
        className="w-full md:w-[90%] lg:w-[80%] h-full"
        src={image}
        alt={name}
      />
      <h1 className="absolute top-0 left-0 text-green-600 bg-white bg-opacity-50 p-2 rounded">
        {name}
      </h1>
    </div>
  );
}
