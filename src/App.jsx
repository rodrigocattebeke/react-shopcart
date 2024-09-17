import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartContext";
import { ViewProductPage } from "./pages/ViewProductPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Layout/Header";

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products/*" element={<ViewProductPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
