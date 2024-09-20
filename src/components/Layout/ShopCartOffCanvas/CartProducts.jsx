import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import styles from "./shopCart.module.css";
import { QuantitySelector } from "../../Common/QuantitySelector";
import { Link } from "react-router-dom";

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
        <Link to={`/products/${product.id}`} className="product-link">
          <p className={styles.productTitle}>{product.title}</p>
        </Link>
        <p className={`${styles.productPrice} small my-0`}>${product.price}</p>
        <div className="d-flex">
          <p className="my-0">Cantidad:</p>
          <QuantitySelector initialQuantity={product.quantity} onQuantityChange={handleQuantity}></QuantitySelector>
          <button className={`${styles.updateProductButton} ${product.quantity == productQuantity ? "" : styles.active}`} onClick={updateProductQuantity}>
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
