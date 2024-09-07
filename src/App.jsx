import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartContext";
import { ViewProductPage } from "./pages/ViewProductPage";

function App() {
  return (
    <CartProvider>
      {/* <HomePage></HomePage> */}
      <ViewProductPage></ViewProductPage>
    </CartProvider>
  );
}

export default App;
