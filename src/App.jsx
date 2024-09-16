import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartContext";
import { ViewProductPage } from "./pages/ViewProductPage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products/*" element={<ViewProductPage />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
