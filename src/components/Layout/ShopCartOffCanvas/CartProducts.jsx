import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export const CartProducts = ({ shopCartProducts = {} }) => {
  const { cartState } = useContext(CartContext);

  const cartProduct = (products) => {
    let borderBottom = false;
    if (products.length === 0) return "Carrito vacío";
    if (products.length > 1) borderBottom = true;

    return products.map((product) => (
      <div className={`row py-4 ${borderBottom ? "border-top" : " "}`} key={product.id}>
        <div className="col-2">
          <img src={product.image} alt={product.title} className="img-fluid"></img>
        </div>
        <div className="col-8">
          <p className="my-0">{product.title}</p>
          <p className="small my-0">{product.price}</p>
        </div>
        <div className="col-2">
          <span className="material-symbols-outlined">delete</span>
        </div>
      </div>
    ));
  };

  return cartProduct(cartState.cartProducts);
};
