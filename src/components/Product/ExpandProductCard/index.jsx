import { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import { moneyFormat } from "../../../hooks/moneyFormat";
import { dolarToPYG } from "../../../hooks/dolarToPYG";

export const ExpandProductCard = ({ product = {} }) => {
  const { addProductToCart } = useContext(CartContext);
  return (
    <div className={`${styles.card} card`} to={`/products/${product.id}`} data-id={product.id}>
      <Link className={`${styles.cardImgContainer}`} to={`/products/${product.id}`}>
        <img src={product.image} className={`${styles.cardImg} card-img`} alt={product.title} />
      </Link>
      <div className={`${styles.cardBody} card-body`}>
        <Link to={`/products/${product.id}`}>
          <h4 className={`${styles.cardTitle} card-title`}>{product.title}</h4>
          <p className={`${styles.cardPrice} card-price`}>Gs. {moneyFormat(dolarToPYG(product.price))}</p>
        </Link>
        <button className="btn button-color-primary" onClick={() => addProductToCart(product)}>
          <span className={`material-symbols-outlined addToCartIcon`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            shopping_cart
          </span>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
