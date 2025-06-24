import { useQuery } from "@tanstack/react-query";

const fetchCart = async () => {
  const res = await axios.get("http://localhost:5000/api/cart/getCart", {
    withCredentials: true,
  });
  return res.data.cart.items; // adjust key if needed
};
export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
}
