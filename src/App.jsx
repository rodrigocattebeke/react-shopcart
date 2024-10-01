import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartContext";
import { ProductViewPage } from "./pages/ProductViewPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { ViewCategoryProductsPage } from "./pages/ViewCategoryProductsPage";
import { UserLoginPage } from "./pages/UserLoginPage";
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {
  const location = useLocation();

  // LOCATIONS WITH HEADER HIDE
  const hideHeaderLocations = ["/login", "/checkout"];

  return (
    <CartProvider>
      {!hideHeaderLocations.includes(location.pathname) && <Header />}
      <main className="wh-100">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/category/*" element={<ViewCategoryProductsPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/login" element={<UserLoginPage />}></Route>
          <Route path="/products/*" element={<ProductViewPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
