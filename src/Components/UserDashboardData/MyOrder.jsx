import axios from "axios";
import { useEffect, useState } from "react";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://dpi-grocery-store-backend-1.onrender.com/api/order/myOrder",
        {
          withCredentials: true,
        }
      );
      setOrders(res.data.orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading orders...</p>;

  if (!orders.length)
    return (
      <p className="text-center mt-10">You haven't placed any orders yet.</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">
        My Orders
      </h2>

      <ul className="space-y-6">
        {orders?.map((order) => (
          <li
            key={order._id}
            className="bg-white border rounded-lg shadow p-4 space-y-3"
          >
            <div className="flex justify-between items-center">
              <p>
                <span className="font-semibold">Order ID:</span> {order._id}
              </p>
              <span className="text-sm bg-yellow-100 px-3 py-1 rounded-full">
                {order.status}
              </span>
            </div>

            <p>
              <span className="font-semibold">Address:</span> {order.address}
            </p>
            <p>
              <span className="font-semibold">Total Price:</span> $
              {order.totalPrice.toFixed(2)}
            </p>

            <div>
              <h4 className="font-semibold mb-2">Items:</h4>
              <ul className="space-y-2">
                {order.items.map((item) => (
                  <li
                    key={item.product._id}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.product.title}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-500">
              Ordered on {new Date(order.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
