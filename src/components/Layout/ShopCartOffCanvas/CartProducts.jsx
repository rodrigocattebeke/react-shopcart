import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./shopCart.css";
import { QuantitySelector } from "../../Common/QuantitySelector";

export const CartProducts = ({ product = {} }) => {
  const { cartState, modifyProductQuantity, removeProductFromCart } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(product.quantity);

  const handleQuantity = (quantity) => {
    setProductQuantity(quantity);
  };

  const updateProductQuantity = () => {
    const updatedProduct = { ...product, quantity: productQuantity, totalPrice: product.price * productQuantity };

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
          <QuantitySelector initialQuantity={product.quantity} onQuantityChange={handleQuantity}></QuantitySelector>
          <button className={`update-product-button ${product.quantity == productQuantity ? "" : "active"}`} onClick={updateProductQuantity}>
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
