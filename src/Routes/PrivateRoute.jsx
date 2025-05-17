import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/user_login");
    } else {
      setIsAuthChecked(true);
    }
  }, [navigate]);

  if (!isAuthChecked) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return children;
}
