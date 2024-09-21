import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartContext";
import { ProductViewPage } from "./pages/ProductViewPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { ViewCategoryProductsPage } from "./pages/ViewCategoryProductsPage";
import { UserLoginPage } from "./pages/UserLoginPage";

function App() {
  const location = useLocation();

  // LOCATIONS WITH HEADER HIDE
  const hideHeaderLocations = ["/login"];

  return (
    <CartProvider>
      {!hideHeaderLocations.includes(location.pathname) && <Header></Header>}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products/*" element={<ProductViewPage />}></Route>
          <Route path="/category/*" element={<ViewCategoryProductsPage />}></Route>
          <Route path="/login" element={<UserLoginPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
