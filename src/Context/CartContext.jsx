import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialCartState = { cartProducts: [] };

const cartTypes = {
  addProduct: "[CART] Add Product",
  deleteProduct: "[CART] Delete Product",
};

const cartReducer = (cartState = initialCartState, action = {}) => {
  if (Object.keys(action).length <= 0) return;

  switch (action.type) {
    case cartTypes.addProduct:
      return { cartProducts: [...cartState.cartProducts, action.payload] };
    case cartTypes.deleteProduct:
      return { cartProducts: [cartState.cartProducts.map((item) => item.id !== action.payload.id)] };
    default:
      return cartState;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addProductToCart = (product) => {
    const action = {
      type: cartTypes.addProduct,
      payload: product,
    };
    dispatch(action);
  };

  return <CartContext.Provider value={{ cartState, addProductToCart }}>{children}</CartContext.Provider>;
};

export { CartContext };
