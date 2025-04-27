import React from "react";

export default function PrivateRoute() {
  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
  console.log(userInfo);
  return <div>PrivateRoute</div>;
}
