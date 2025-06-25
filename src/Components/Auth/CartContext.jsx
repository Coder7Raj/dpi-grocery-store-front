import axios from "axios";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  const getCart = async () => {
    try {
      const res = await axios.get(
        "https://dpi-grocery-store-backend.vercel.app/api/cart/getCart",
        {
          withCredentials: true, // ✅ this is required to send the cookie
        }
      );
      setCart(res.data.cart.items);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};
