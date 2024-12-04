import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductViewPage } from "./pages/ProductViewPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { ViewCategoryProductsPage } from "./pages/ViewCategoryProductsPage";
import { UserLoginPage } from "./pages/UserLoginPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Footer } from "./components/Layout/Footer";
import { ScrollToTop } from "./hooks/ScrollToTop";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { SearchPage } from "./pages/SearchPage";
import { UserProvider } from "./contexts/UserContext.jsx";

function App() {
  const location = useLocation();

  // LOCATIONS WITH HEADER HIDE
  const hideHeaderLocations = ["/login", "/checkout"];
  const hideFooterLocations = ["/login"];

  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <ScrollToTop />
          {!hideHeaderLocations.includes(location.pathname) && <Header />}
          <main className="container-fluid p-0 min-vh-100">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/category/*" element={<ViewCategoryProductsPage />}></Route>
              <Route path="/checkout" element={<CheckoutPage />}></Route>
              <Route path="/login" element={<UserLoginPage />}></Route>
              <Route path="/products/*" element={<ProductViewPage />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>
          </main>
          {!hideFooterLocations.includes(location.pathname) && <Footer />}
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
