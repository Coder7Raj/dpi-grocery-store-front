import React from "react";

export default function Profile() {
  // getting user info from local storage
  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
  const name = userInfo?.name;
  const email = userInfo?.userEmail;
  const pass = userInfo?.password;
  const image = userInfo?.image;

  return (
    <div className="pt-44 pb-80 flex flex-col justify-center items-center gap-6">
      {/* img */}
      <div className="w-52 border border-green-400 rounded-3xl">
        <img
          className="h-full w-full object-cover rounded-3xl"
          src={image}
          alt="user image"
        />
      </div>
      {/* more info */}
      <div className="space-y-6">
        <h1>
          Name: <span> {name}</span>
        </h1>
        <p>
          Email:
          <span>{email}</span>
        </p>
        <div className="flex gap-2 items-center">
          <p>
            Password: <span>{pass}</span>
          </p>
          <button className="btn btn-outline btn-primary">Show</button>
        </div>
      </div>
    </div>
  );
}
