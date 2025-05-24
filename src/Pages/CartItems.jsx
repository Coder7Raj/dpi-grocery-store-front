import { pdf } from "@react-pdf/renderer";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAmount } from "../Components/Custom/AmountContext";
import BillDocument from "../Components/Custom/BillDocument";

export default function CartItems() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { amount, setAmount } = useAmount();
  const [localCartItems, setLocalCartItems] = useState([]);

  const fetchCart = async () => {
    const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
    const userEmail = userInfo?.userEmail;
    const allCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    return allCartItems
      .filter((item) => item.email === userEmail)
      .map((item) => ({
        ...item,
        quantity: item.quantity || 1,
        maxQuantity: item.maxQuantity || 10,
      }));
  };

  const {
    data: cartItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    setLocalCartItems(cartItems);
  }, [cartItems]);

  const removeFromCart = (index) => {
    const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
    const userEmail = userInfo?.userEmail;
    const allCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedUserCartItems = allCartItems
      .filter((item) => item.email === userEmail)
      .filter((_, i) => i !== index);

    const otherUserCartItems = allCartItems.filter(
      (item) => item.email !== userEmail
    );

    const newCart = [...otherUserCartItems, ...updatedUserCartItems];
    localStorage.setItem("cart", JSON.stringify(newCart));

    refetch();
  };

  const updateQuantity = (index, delta) => {
    const currentQty = localCartItems[index].quantity;
    const maxQty = localCartItems[index].maxQuantity || 10;

    if (delta > 0 && currentQty >= maxQty) {
      toast.error("Maximum quantity reached!");
      return;
    }

    const newQty = Math.max(1, currentQty + delta);
    const updatedLocalCart = [...localCartItems];
    updatedLocalCart[index] = { ...updatedLocalCart[index], quantity: newQty };

    setLocalCartItems(updatedLocalCart);

    const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
    const userEmail = userInfo?.userEmail;
    const allCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const newAllCart = allCartItems.map((item) =>
      item.email === userEmail && item.name === updatedLocalCart[index].name
        ? { ...item, quantity: newQty }
        : item
    );

    localStorage.setItem("cart", JSON.stringify(newAllCart));
    refetch();
  };

  const totalAmount = localCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const leastAmount = parseFloat(totalAmount.toFixed(2));

  const handlePay = async () => {
    if (amount >= leastAmount) {
      setAmount(amount - leastAmount);

      const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
      const userEmail = userInfo?.userEmail;
      const allCartItems = JSON.parse(localStorage.getItem("cart")) || [];

      const userCartItems = allCartItems
        .filter((item) => item.email === userEmail)
        .map((item) => ({ ...item, quantity: item.quantity || 1 }));

      const updatedCart = allCartItems.filter(
        (item) => item.email !== userEmail
      );

      const blob = await pdf(
        <BillDocument cartItems={userCartItems} totalAmount={leastAmount} />
      ).toBlob();

      const timestamp = new Date().getTime();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `order_summary_${timestamp}.pdf`;
      link.click();
      URL.revokeObjectURL(url);

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      toast.success("Payment successful!");
      setIsModalOpen(false);
      refetch();
    } else {
      toast.error("Not enough balance to complete payment!");
    }
  };

  return (
    <div className="pt-20 min-h-screen p-4">
      <h2 className="text-2xl text-green-700 font-bold mb-4">Cart Items</h2>
      {isLoading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : localCartItems.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {localCartItems.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-md shadow">
              <div className="flex justify-between items-center gap-4">
                <div className="flex gap-4 items-center">
                  <img
                    className="w-20 h-20 object-cover rounded"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-black text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="p-1 bg-gray-200 rounded"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="p-1 bg-gray-200 rounded"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Max: {item.maxQuantity || 10}
                    </p>
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
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsModalOpen(true)}
            >
              Proceed to Pay
            </button>
          </div>
        </ul>
      ) : (
        <p className="text-xl md:text-2xl text-green-700">
          No items in the cart!
        </p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl text-green-600 font-bold mb-4">
              GrooFi Payment Summary
            </h2>
            <ul className="space-y-2 mb-4 max-h-60 overflow-y-auto">
              {localCartItems.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-black">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="text-black">
                    ${item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <hr className="my-2" />
            <p className="text-lg text-black font-bold">
              Total: ${leastAmount}
            </p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="btn border border-red-500 text-red-500"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button
                onClick={handlePay}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
