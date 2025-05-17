// src/context/AmountContext.jsx
import { createContext, useContext, useState } from "react";

const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(0); // initial amount

  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export const useAmount = () => useContext(AmountContext);
