import React from "react";

export default function Deals({ item }) {
  const { name, image } = item;
  return (
    <div className="flex">
      <h1>{name}</h1>
      <img src={image} alt="" />
    </div>
  );
}
