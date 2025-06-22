import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null); // holds ID of order being updated

  // Fetch all pending orders
  const fetchPendingOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/order/pending", {
        withCredentials: true,
      });
      setOrders(res.data.orders);
      console.log(res);
    } catch (error) {
      console.error("Failed to fetch pending orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  // Handle status update
  const handleMarkComplete = async (orderId) => {
    setUpdating(orderId);
    try {
      await axios.put(
        `http://localhost:5000/api/order/status/${orderId}`,
        { status: "completed" },
        { withCredentials: true }
      );

      // Remove order from list after marking completed
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Failed to update order:", error);
      alert("Failed to update order. Try again.");
    } finally {
      setUpdating(null);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading orders...</p>;

  if (!orders.length)
    return <p className="text-center mt-10">No pending orders found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">
        Admin - Pending Orders
      </h2>

      <ul className="space-y-6">
        {orders.map((order) => (
          <li
            key={order?._id}
            className="border rounded-lg shadow-md p-5 bg-white space-y-4"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-700">
                <span className="font-semibold">Order ID:</span> {order?._id}
              </p>
              <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                {order.status}
              </span>
            </div>

            <p>
              <span className="font-semibold">User ID:</span>{" "}
              {order?.user?.name}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {order?.address}
            </p>
            <p>
              <span className="font-semibold">Total Price:</span> $
              {order.totalPrice.toFixed(2)}
            </p>

            <div>
              <h4 className="font-semibold mb-2">Items:</h4>
              <ul className="space-y-2">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <img
                      src={item.product?.image}
                      alt={item.product?.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.product?.title}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right">
              <button
                onClick={() => handleMarkComplete(order._id)}
                disabled={updating === order._id}
                className={`px-4 py-2 rounded font-medium ${
                  updating === order._id
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {updating === order._id ? "Updating..." : "Mark as Completed"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
