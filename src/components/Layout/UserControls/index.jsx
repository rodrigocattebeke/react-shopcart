import { ShopCartOffCanvas } from "../ShopCartOffCanvas";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import styles from "./userControls.module.css";

export const UserControls = ({ responsiveClass = "" }) => {
  const { cartState } = useContext(CartContext);
  return (
    <>
      {/* USer control icons */}

      <div className={`${styles.userControlsContainer} ${responsiveClass}`}>
        <div>
          <span className={`material-symbols-outlined ${(styles.userControl, styles.userControlCart)}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            shopping_cart
          </span>
          <p className={`${styles.cartCounter} ${cartState.cartProducts.length > 0 ? `${styles.active}` : ""}`}>{cartState.cartProducts.length > 0 ? `${cartState.cartProducts.length}` : ""}</p>
        </div>
        <Link to="/login" className={`material-symbols-outlined ${(styles.userControl, styles.userControlPerson)}`}>
          person
        </Link>
      </div>

      {/* User control shopcart (offcanvas) */}

      <ShopCartOffCanvas></ShopCartOffCanvas>
    </>
  );
};
