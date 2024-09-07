import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./shopCart.css";

export const CartProducts = ({ product = {} }) => {
  const { cartState, modifyProductQuantity, removeProductFromCart } = useContext(CartContext);
  const [inputValue, setInputValue] = useState(product.quantity);

  useEffect(() => {
    setInputValue(product.quantity);
  }, [product.quantity]);

  const handleChange = (e) => {
    if (/\D+/.test(e.target.value)) return;
    setInputValue(e.target.value);
  };

  const incrementOrDecrement = (action) => {
    if (action == "decrement" && inputValue == 1) return;
    switch (action) {
      case "increment":
        return setInputValue(inputValue + 1);
      case "decrement":
        return setInputValue(inputValue - 1);
      default:
        break;
    }
  };

  const updateProductQuantity = () => {
    const updatedProduct = { ...product, quantity: inputValue, totalPrice: product.price * inputValue };

    modifyProductQuantity(updatedProduct);
  };

  let borderBottom = false;
  if (cartState.cartProducts.length > 1) borderBottom = true;

  return (
    <div className={`row py-4 ${borderBottom ? "border-top" : " "}`} key={product.id}>
      <div className="col-2">
        <img src={product.image} alt={product.title} className="img-fluid"></img>
      </div>
      <div className="col-8">
        <p className="my-0">{product.title}</p>
        <p className="small my-0">${product.price}</p>
        <div className="d-flex">
          <p className="my-0">Cantidad:</p>
          <div className="shopCart-quantity">
            <button
              onClick={() => {
                incrementOrDecrement("decrement");
              }}
            >
              -
            </button>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button
              onClick={() => {
                incrementOrDecrement("increment");
              }}
            >
              +
            </button>
          </div>
          <button className={`update-product-button ${product.quantity == inputValue ? "" : "active"}`} onClick={updateProductQuantity}>
            Actualizar
          </button>
        </div>
      </div>
      <div className="col-2">
        <span
          className="material-symbols-outlined shopIcon"
          onClick={() => {
            removeProductFromCart(product);
          }}
        >
          delete
        </span>
      </div>
    </div>
  );
};
