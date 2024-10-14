import { useContext } from "react";
import { ProductCartInfo } from "../../Product/ProductCartInfo";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const removeBodyStyles = () => {
  const bodyStyles = document.body.style;
  bodyStyles.overflow = "auto";
  bodyStyles.paddingRight = "0";
};

export const ShopCartOffCanvas = () => {
  const { cartState, getTotalPrice } = useContext(CartContext);
  return (
    <div className={`${styles.offCanvas} offcanvas offcanvas-end shopcart-menu`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header shopcart-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Carrito
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body shopcart-body">
        <div className={`shopcart-body-items h-75 overflow-y-auto overflow-x-hidden ${cartState.cartProducts.length < 1 ? "text-center align-content-center" : ""}`}>{cartState.cartProducts.length < 1 ? "Carrito vacío" : cartState.cartProducts.map((product) => <ProductCartInfo key={product.id} product={product} />)}</div>
        {cartState.cartProducts.length < 1 ? (
          ""
        ) : (
          <div className="shopcart-body-actions align-items-center  d-flex flex-column h-25 justify-content-between ">
            <div className={`${styles.totalPrice} d-flex justify-content-between w-100`}>
              <p>Total:</p>
              <p>{getTotalPrice()}</p>
            </div>
            <Link to="/checkout" className="btn btn-success" onClick={removeBodyStyles}>
              Finalizar pedido
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
