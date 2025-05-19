import { pdf } from "@react-pdf/renderer";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAmount } from "../Components/Custom/AmountContext";
import BillDocument from "../Components/Custom/BillDocument";

export default function CartItems() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { amount, setAmount } = useAmount();

  const fetchCart = async () => {
    const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
    const userEmail = userInfo?.userEmail;

    const allCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Return only items that match the logged-in user
    return allCartItems.filter((item) => item.email === userEmail);
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

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    refetch();
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
  const leastAmount = parseFloat(totalAmount.toFixed(3));

  //
  //
  const handlePay = async () => {
    if (amount >= leastAmount) {
      setAmount(amount - leastAmount);

      // Remove only the logged-in user's cart items
      const userInfo = JSON.parse(localStorage.getItem("registeredUser"));
      const userEmail = userInfo?.userEmail;

      const allCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = allCartItems.filter(
        (item) => item.email !== userEmail
      );

      //
      // download the bill document in pdf

      // Get current user's cart items
      const userCartItems = allCartItems.filter(
        (item) => item.email === userEmail
      );

      // Generate PDF blob
      const blob = await pdf(
        <BillDocument cartItems={userCartItems} totalAmount={leastAmount} />
      ).toBlob();

      // Trigger download
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "order_summary.pdf";
      link.click();
      URL.revokeObjectURL(url);
      //

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      toast.success("Payment successful!");
      setIsModalOpen(false);

      // Refetch to update the UI
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
      ) : cartItems.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cartItems?.map((item, index) => (
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
          No items in the cart !
        </p>
      )}

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl text-green-600 font-bold mb-4">
              GrooFi Payment Summary
            </h2>
            <ul className="space-y-2 mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-black">{item.name}</span>
                  <span className="text-black">${item.price}</span>
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
