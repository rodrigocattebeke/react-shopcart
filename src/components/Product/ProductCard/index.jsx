import { useContext } from "react";
import "./card.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { moneyFormat } from "../../../helpers/moneyFormat";
import { dolarToPYG } from "../../../helpers/dolarToPYG";
import { imgFlyAnimation } from "../../../helpers/imgFlyAnimation";

export const ProductCard = ({ product = {} }) => {
  const { addProductToCart } = useContext(CartContext);

  const handleButtonClick = (e, product) => {
    imgFlyAnimation(e);
    addProductToCart(product);
  };

  return (
    <div className="card" to={`/products/${product.id}`} data-id={product.id}>
      <Link className="card-img-container" to={`/products/${product.id}`}>
        <img src={product.image} className="cardImg" alt={product.title} />
      </Link>
      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <h4 className="card-title">{product.title}</h4>
          <p className="card-price">Gs. {moneyFormat(dolarToPYG(product.price))}</p>
        </Link>
        <button className="btn button-color-primary" onClick={(e) => handleButtonClick(e, product)}>
          <span className={`material-symbols-outlined addToCartIcon`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            shopping_cart
          </span>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
