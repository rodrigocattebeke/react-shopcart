import "./UserControls.css";
import { ShopCartOffCanvas } from "../ShopCartOffCanvas";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export const UserControls = ({ responsiveClass = "" }) => {
  const { cartState } = useContext(CartContext);
  return (
    <>
      {/* USer control icons */}

      <div className={`user-controls-container ${responsiveClass}`}>
        <div>
          <span className="material-symbols-outlined user-control user-control-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            shopping_cart
          </span>
          <p className={`cart-counter ${cartState.cartProducts.length > 0 ? "active" : ""}`}>{cartState.cartProducts.length > 0 ? `${cartState.cartProducts.length}` : ""}</p>
        </div>
        <span className="material-symbols-outlined user-control user-control-person">person</span>
      </div>

      {/* User control shopcart (offcanvas) */}

      <ShopCartOffCanvas></ShopCartOffCanvas>
    </>
  );
};
