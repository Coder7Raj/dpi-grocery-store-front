import React, { useEffect, useState } from "react";

export default function CartItems() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-20 min-h-screen p-4">
      <h2 className="text-2xl text-white font-bold mb-4">Cart Items</h2>
      {cartItems.length > 0 ? (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-md shadow">
              <div className="flex justify-between items-center gap-4">
                <div className="flex gap-4 items-center">
                  <img
                    className="w-20 h-20 object-cover rounded"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <button
                  className="btn border border-red-500 text-red-500"
                  onClick={() => removeFromCart(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          <div>
            <button
              className="btn border border-green-600"
              onClick={() => setIsModalOpen(true)}
            >
              Proceed to Pay for your items
            </button>
          </div>
        </ul>
      ) : (
        <p className="text-white">No items in the cart.</p>
      )}

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <ul className="space-y-2 mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <hr className="my-2" />
            <p className="text-lg font-bold">Total: ${totalAmount}</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="btn border border-red-500 text-red-500"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button className="btn border border-green-600">Pay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
