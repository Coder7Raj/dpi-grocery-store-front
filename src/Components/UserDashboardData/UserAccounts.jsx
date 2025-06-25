import axios from "axios";
import { useEffect, useState } from "react";
import { FaCoins, FaMoneyBillWave } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../Auth/AuthContext";

export default function MyAccount() {
  const [amount, setAmount] = useState("");
  const [balanceAmount, setBalanceAmount] = useState("");
  const [Payamount, setPayAmount] = useState("");

  const [transferEmail, setTransferEmail] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [history, setHistory] = useState([]);

  const { user, updateUser } = useAuth();

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        "https://dpi-grocery-store-backend.vercel.app/api/wallet/history",
        {
          withCredentials: true,
        }
      );
      setHistory(response.data.transactions);
    } catch (err) {
      console.error("Error fetching wallet history:", err);
    }
  };

  const convertToBalance = async () => {
    try {
      const numericAmount = Number(amount);

      const res = await axios.post(
        "https://dpi-grocery-store-backend.vercel.app/api/wallet/useCoin",
        { coinsToUse: numericAmount },
        { withCredentials: true }
      );
      updateUser({
        walletBalance: res.data.newBalance,
        coins: res.data.remainingCoins,
      });
      setAmount(res.data.newBalance);
      setAmount("");
    } catch (error) {
      console.error("Conversion failed", error);
      toast.error(error.response?.data?.message || "Conversion failed");
    }
  };

  const convertToCoin = async () => {
    try {
      const numericAmount = Number(balanceAmount);
      const res = await axios.post(
        `https://dpi-grocery-store-backend.vercel.app/api/wallet/useBalance`,
        { coinsToBuy: numericAmount },
        { withCredentials: true }
      );

      updateUser({
        walletBalance: res.data.newBalance,
        coins: res.data.totalCoins,
      });
      setBalanceAmount(res.data.newBalance);
      setAmount("");
    } catch (error) {
      console.error("Conversion failed", error);
    }
  };

  const transferBalance = async () => {
    try {
      const numericAmount = Number(Payamount);
      if (!transferEmail || !numericAmount || numericAmount <= 0) {
        toast.info("Please enter a valid recipient and amount");
        return;
      }

      const res = await axios.post(
        `https://dpi-grocery-store-backend.vercel.app/api/wallet/transfer`,
        {
          receiverPayId: transferEmail,
          amount: numericAmount,
        },
        { withCredentials: true }
      );
      updateUser({
        walletBalance: res.data.sender.newBalance,
      });

      fetchHistory();

      setPayAmount("");
      setTransferEmail("");
    } catch (error) {
      console.error("Transfer failed", error);
      toast.error(error.response?.data?.message || "Transfer failed");
    }
  };

  // transaction
  // history
  useEffect(() => {
    fetchHistory();
  }, []);
  const displayBalance = Math.floor(user?.walletBalance); // 356

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 space-y-8">
      <h2 className="text-2xl font-bold text-center">My Account</h2>

      {/* Balance and Coins */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-green-100 rounded-xl p-4">
          <h3 className="text-xl font-semibold text-green-800 flex justify-center items-center gap-2">
            Balance <FaMoneyBillWave />
          </h3>
          <p className="text-3xl font-bold text-green-700">${displayBalance}</p>
        </div>
        <div className="bg-yellow-100 rounded-xl p-4">
          <h3 className="text-xl font-semibold text-yellow-700 flex justify-center items-center gap-2">
            Coins <FaCoins />
          </h3>
          <p className="text-3xl font-bold text-yellow-600">{user?.coins}</p>
        </div>
      </div>

      {/* Convert Coin & Balance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <h4 className="text-lg font-semibold">Convert Coin → Balance</h4>
          <input
            type="number"
            placeholder="Enter coin to balance"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={convertToBalance}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Convert to Balance
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <h4 className="text-lg font-semibold">Convert Balance → Coin</h4>
          <input
            type="number"
            placeholder="Enter coin to buy"
            value={balanceAmount}
            onChange={(e) => setBalanceAmount(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={convertToCoin}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full"
          >
            Convert to Coin
          </button>
        </div>
      </div>

      {/* Transfer Balance */}
      <div className="bg-purple-100 p-4 rounded-lg space-y-2">
        <h4 className="text-lg font-semibold">
          Transfer Balance to Another User
        </h4>
        <input
          type="email"
          placeholder="Recipient Email"
          value={transferEmail}
          onChange={(e) => setTransferEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount to transfer"
          value={Payamount}
          onChange={(e) => setPayAmount(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        />
        <button
          onClick={transferBalance}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full mt-2"
        >
          Transfer Balance
        </button>
      </div>

      {/* Transaction History */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">Transaction History</h4>
        {history?.length === 0 ? (
          <p className="text-gray-500">No transactions yet.</p>
        ) : (
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {history?.map((tx, index) => (
              <li key={index} className="bg-white p-2 rounded shadow text-sm">
                <div>
                  <strong>{tx.type}</strong>: {tx.amount}{" "}
                  {tx.type === "coin" ? "🪙" : "$"}
                </div>
                <div className="text-gray-500 text-xs">
                  {tx.date} - {tx.description}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
