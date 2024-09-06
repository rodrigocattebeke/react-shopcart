import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialCartState = { cartProducts: [] };

const cartTypes = {
  addProduct: "[CART] Add Product",
  modifyQuantity: "[CART] Modify Quantity",
  removeProduct: "[CART] Remove Product",
};

const cartReducer = (cartState = initialCartState, action = {}) => {
  if (Object.keys(action).length <= 0) return;

  switch (action.type) {
    case cartTypes.addProduct:
      return { cartProducts: action.payload };
    case cartTypes.modifyQuantity:
      return { cartProducts: action.payload };
    case cartTypes.removeProduct:
      return { cartProducts: cartState.cartProducts.filter((item) => item.id !== action.payload.id) };
    default:
      return cartState;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addProductToCart = (product) => {
    const existingProduct = cartState.cartProducts.find((item) => item.id == product.id);

    if (existingProduct) {
      let updatedProducts = cartState.cartProducts.map((item) => (item.id == existingProduct.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item));

      updatedProducts = { ...updatedProducts, price: updatedProducts.price * updatedProducts.quantity };

      const action = {
        type: cartTypes.modifyQuantity,
        payload: updatedProducts,
      };

      dispatch(action);
    } else {
      const newProducts = [...cartState.cartProducts, { ...product, quantity: 1 }];
      const action = {
        type: cartTypes.addProduct,
        payload: newProducts,
      };

      dispatch(action);
    }
  };

  const modifyProductQuantity = (product) => {
    const action = {
      type: cartTypes.modifyQuantity,
      payload: product,
    };

    dispatch(action);
  };

  const removeProductFromCart = (product) => {
    const action = {
      type: cartTypes.removeProduct,
      payload: product,
    };
    dispatch(action);
  };

  return <CartContext.Provider value={{ cartState, addProductToCart, modifyProductQuantity, removeProductFromCart }}>{children}</CartContext.Provider>;
};

export { CartContext };
