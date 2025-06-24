import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Components/Auth/AuthContext";
import { CartProvider } from "./Components/Auth/CartContext";
import { AmountProvider } from "./Components/Custom/AmountContext";
import "./index.css";
import router from "./Routes/Routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <AmountProvider>
            <RouterProvider router={router} />
          </AmountProvider>
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
