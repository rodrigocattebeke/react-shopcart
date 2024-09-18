import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartContext";
import { ProductPageView } from "./pages/ProductPageView";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { ViewCategoryProducts } from "./components/Categories/viewCategoryProducts";

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products/*" element={<ProductPageView />}></Route>
          <Route path="/category/*" element={<ViewCategoryProducts />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
