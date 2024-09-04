import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <HomePage></HomePage>
    </CartProvider>
  );
}

export default App;
