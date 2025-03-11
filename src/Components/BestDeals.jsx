import React from "react";

export default function BestDeals() {
  return (
    <div className="mt-20 mb-4">
      <h1 className="text-3xl font-bold text-start text-white mb-10">
        Our Best Deals
      </h1>
      <div className="flex items-center justify-center">
        <div
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdYN3R-BvNAN7YwhwvJUG_mIQbMAet2l2HkJcjVFXmPUFk2qYodlkM0JB1N3Oxi8ghSk&usqp=CAU')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-80 w-[20%] px-6 py-4 space-y-10"
        >
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            iusto repellendus nostrum nesciunt fuga repellat.
          </p>
          <button className="btn">Shop Now!</button>
        </div>
        <div className="w-[80%]">delas</div>
      </div>
    </div>
  );
}
