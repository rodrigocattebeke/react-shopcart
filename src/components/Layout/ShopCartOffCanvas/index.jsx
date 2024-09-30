import { useContext } from "react";
import { CartProducts } from "./CartProducts";
import { CartContext } from "../../../Context/CartContext";

const getTotalPrice = (products = {}) => {
  if (products.length == 0) return;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].totalPrice;
  }
  return totalPrice.toFixed(2);
};

export const ShopCartOffCanvas = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className="offcanvas offcanvas-end shopcart-menu" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header shopcart-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Carrito
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      {console.log(cartState.cartProducts)}
      <div className="offcanvas-body shopcart-body">
        <div className="shopcart-body-items h-75 overflow-y-auto overflow-x-hidden">{cartState.cartProducts.length < 1 ? "Carrito vacío" : cartState.cartProducts.map((product) => <CartProducts key={product.id} product={product} />)}</div>
        <div className="shopcart-body-actions align-items-center  d-flex flex-column h-25 justify-content-between ">
          <div className="total-price d-flex justify-content-between w-100">
            <h5>Total:</h5>
            <h5>{getTotalPrice(cartState.cartProducts)}</h5>
          </div>
          <button type="button" className="btn btn-success">
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
};
