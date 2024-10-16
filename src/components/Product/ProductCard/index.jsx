import { useContext } from "react";
import "./card.css";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

export const ProductCard = ({ product = {} }) => {
  const { addProductToCart } = useContext(CartContext);
  return (
    <div className="card" to={`/products/${product.id}`} data-id={product.id}>
      <Link className="card-img-container" to={`/products/${product.id}`}>
        <img src={product.image} className="card-img" alt={product.title} />
      </Link>
      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <h4 className="card-title">{product.title}</h4>
          <p className="card-price">${product.price}</p>
        </Link>
        <button className="btn btn-primary" onClick={() => addProductToCart(product)}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};
