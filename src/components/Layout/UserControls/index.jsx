import React from "react";
import "./UserControls.css";
import { ShopCartOffCanvas } from "../ShopCartOffCanvas";

export const UserControls = ({ responsiveClass = "", shopCartItems = {} }) => {
  return (
    <>
      {/* USer control icons */}

      <div className={`user-controls-container ${responsiveClass}`}>
        <div>
          <span className="material-symbols-outlined user-control user-control-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            shopping_cart
          </span>
          <p className={`cart-counter ${shopCartItems.cartItems.length > 0 ? "active" : ""}`}>{shopCartItems.cartItems.length > 0 ? `${shopCartItems.cartItems.length}` : ""}</p>
        </div>
        <span className="material-symbols-outlined user-control user-control-person">person</span>
      </div>

      {/* User control shopcart (offcanvas) */}

      <ShopCartOffCanvas shopCartItems={shopCartItems}></ShopCartOffCanvas>
    </>
  );
};
