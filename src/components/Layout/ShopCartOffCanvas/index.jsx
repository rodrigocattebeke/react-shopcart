import { CartProducts } from "./CartProducts";

export const ShopCartOffCanvas = () => {
  return (
    <div className="offcanvas offcanvas-end shopcart-menu" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header shopcart-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Carrito
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body shopcart-body">
        <div className="shopcart-body-items overflow-y-auto overflow-x-hidden">
          <CartProducts></CartProducts>
        </div>
        <div className="shopcart-body-actions d-flex flex-column align-items-center justify-content-between">
          <div className="total-price d-flex justify-content-between w-100">
            <h5>Total:</h5>
            <h5>$22</h5>
          </div>
          <button type="button" className="btn btn-success">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};
