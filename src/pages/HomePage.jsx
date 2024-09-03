import { useState, useReducer, useEffect } from "react";
import { HomeCatalogue } from "../components/HomeCatalogue";
import { Header } from "../components/Layout/Header";

export const HomePage = () => {
  const [shopCartItems, setShopCartItems] = useState({ cartItems: [], totalPrice: 0 });

  const initialCartState = { cartItems: [] };

  const handleAddToCart = async (product) => {
    let count = 0;
    for (const item of shopCartItems.cartItems) {
      if (product.id == item.id) count = 1;
    }

    if (count == 0) {
      let newItems = [...shopCartItems.cartItems, product],
        newTotalPrice = Number.parseFloat(shopCartItems.totalPrice + product.price).toFixed(2);
      setShopCartItems({ cartItems: newItems, totalPrice: newTotalPrice });
    } else return;
  };

  const cartReducer = (cartState = initialCartState, action = {}) => {
    if (Object.keys(action).length <= 0) return;

    switch (action.type) {
      case "[CART] Add Item":
        return { cartItems: [...cartState.cartItems, action.payload] };
      default:
        return cartState;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addCartItem = (item) => {
    const action = {
      type: "[CART] Add Item",
      payload: item,
    };
    dispatch(action);
  };
  console.log(state);

  return (
    <>
      <Header shopCartItems={state} setShopCartIems={addCartItem}></Header>
      <HomeCatalogue onAddToCart={addCartItem}></HomeCatalogue>
    </>
  );
};
