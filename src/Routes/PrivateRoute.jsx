import { Navigate } from "react-router-dom";
import { useAuth } from "../Components/Auth/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="h-[900px] flex w-full m-auto items-center justify-center self-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (!user) return <Navigate to="/user_login" replace />;

  return children;
}
