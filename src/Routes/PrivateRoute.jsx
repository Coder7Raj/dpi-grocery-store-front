import { Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));

  if (!userInfo) {
    return <Navigate to={"/user_login"}></Navigate>;
  }
  return <Navigate to={"/"}></Navigate>;
}
