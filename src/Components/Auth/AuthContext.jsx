import { createContext, useContext, useEffect, useState } from "react";

// Create context and hook
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (newUserData) => {
    setUser((prev) => ({ ...prev, ...newUserData }));
  };

  // ✅ Move fetchUser here (outside useEffect)
  const fetchUser = async () => {
    try {
      const res = await fetch(
        "https://dpi-grocery-store-backend.vercel.app/api/auth/me",
        {
          credentials: "include",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Failed to fetch user", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(); // Call it here on mount
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await fetch(
        "https://dpi-grocery-store-backend.vercel.app/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, setUser, updateUser, fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
