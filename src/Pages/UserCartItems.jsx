import axios from "axios";
import { useEffect, useState } from "react";

export default function UserCartItems() {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Modal & Order states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [loadingOrder, setLoadingOrder] = useState(false);

  // New state to handle deleting items
  const [loadingDelete, setLoadingDelete] = useState(false);

  // Extract fetchCart function so you can call it multiple times
  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/cart/getCart",
        {
          withCredentials: true,
        }
      );
      setCartData(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Calculate total price
  const totalPrice =
    cartData?.cart?.items?.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    ) || 0;

  // Place order handler
  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }

    setLoadingOrder(true);
    try {
      const orderItems = cartData.cart.items.map((item) => ({
        product: item.productId._id,
        quantity: item.quantity,
        price: item.productId.price,
      }));

      await axios.post(
        "http://localhost:5000/api/order/place",
        {
          items: orderItems,
          totalPrice,
          address,
        },
        { withCredentials: true }
      );

      alert("Order placed successfully!");
      setIsModalOpen(false);
      setAddress("");

      // Fetch the cart again after successful order to update the UI
      fetchCart();
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoadingOrder(false);
    }
  };

  // Delete item handler
  const handleDeleteItem = async (productId) => {
    console.log(productId);
    if (
      !window.confirm(
        "Are you sure you want to remove this item from the cart?"
      )
    ) {
      return;
    }
    setLoadingDelete(true);
    try {
      await axios.delete(
        `http://localhost:5000/api/cart/delete/${productId}`, // Adjust your API endpoint accordingly
        { withCredentials: true }
      );
      alert("Item removed from cart.");
      // Refresh cart data after deletion
      fetchCart();
    } catch (error) {
      console.error("Failed to delete item:", error);
      alert("Failed to remove item. Please try again.");
    } finally {
      setLoadingDelete(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading cart...</p>;
  if (!cartData?.cart || cartData.cart.items.length === 0)
    return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="pt-24 max-w-4xl mx-auto p-4 flex flex-col h-[calc(100vh-183px)]">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">
        Your Cart Items
      </h2>

      <ul className="flex-1 overflow-y-auto space-y-6 mb-28">
        {cartData.cart.items.map((item) => (
          <li
            key={item._id}
            className="flex items-center gap-6 border rounded-lg p-4 shadow-sm hover:shadow-md transition relative"
          >
            <img
              src={item.productId.image}
              alt={item.productId.title}
              className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900">
                {item.productId.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.productId.description}</p>
              <div className="mt-auto flex gap-4 items-center">
                <p className="font-semibold text-green-700">
                  Quantity: {item.quantity}
                </p>
                <p className="text-gray-700">
                  Unit Price: ${item.productId.price.toFixed(2)}
                </p>
                <p className="font-semibold text-gray-900">
                  Total: ${(item.productId.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDeleteItem(item._id)}
              disabled={loadingDelete}
              className="absolute top-3 right-3 text-red-600 hover:text-red-800 font-bold px-3 py-1 border border-red-600 rounded transition disabled:opacity-50"
            >
              {loadingDelete ? "Removing..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>

      {/* Footer with total and place order button */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t shadow-md p-4 flex justify-between items-center max-w-4xl mx-auto">
        <p className="text-xl font-bold text-gray-900">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Place Order
        </button>
      </div>

      {/* Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Enter Delivery Address</h2>
            <textarea
              className="w-full border border-gray-300 rounded p-2 mb-4"
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address here..."
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handlePlaceOrder}
                className="px-4 py-2 bg-green-600 text-white rounded"
                disabled={loadingOrder}
              >
                {loadingOrder ? "Placing..." : "Confirm Order"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
