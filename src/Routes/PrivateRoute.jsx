import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const userInfo = JSON.parse(localStorage.getItem("registeredUser"));

  if (userInfo) {
    return children;
  } else {
    return <Navigate to={"/user_login"}></Navigate>;
  }
}
