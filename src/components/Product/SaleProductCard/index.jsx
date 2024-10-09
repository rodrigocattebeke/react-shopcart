import { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

export const SaleProductCard = ({ product = {} }) => {
  const { addProductToCart } = useContext(CartContext);
  product = { ...product, oldPrice: Number.parseFloat(product.price + product.price * 0.3).toFixed(2) };
  return Object.keys(product).length == 0 ? (
    ""
  ) : (
    <div className={`card ${styles.card}`} to={`/products/${product.id}`} data-id={product.id}>
      <Link className={`${styles.cardImgContainer}`} to={`/products/${product.id}`}>
        <img src={product.image} className={`${styles.cardImg}`} alt={product.title} />
      </Link>
      <div className={`card-body ${styles.cardBody}`}>
        <Link to={`/products/${product.id}`}>
          <h4 className={`card-title ${styles.cardTitle}`}>{product.title}</h4>
          <p className={`${styles.oldPrice}`}>${product.oldPrice}</p>
          <p className={`${styles.newPrice}`}>${product.price}</p>
        </Link>
        <button className="btn btn-primary" onClick={() => addProductToCart(product)}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};
