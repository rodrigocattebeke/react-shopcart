import { ShopCartOffCanvas } from "../ShopCartOffCanvas";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import styles from "./userControls.module.css";
import { UserContext } from "../../../context/UserContext";

export const UserControls = ({ responsiveClass = "" }) => {
  const { cartState } = useContext(CartContext);
  const { user } = useContext(UserContext);

  return (
    <>
      {/* USer control icons */}

      <div className={`${styles.userControlsContainer} ${responsiveClass}`}>
        <div className={`${styles.cartIconContainer} imgFlyHere`}>
          <span className={`material-symbols-outlined ${(styles.userControl, styles.userControlCart)}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            shopping_cart
          </span>
          <p className={`${styles.cartCounter} ${cartState.cartProducts.length > 0 ? `${styles.active}` : ""}`}>{cartState.cartProducts.length > 0 ? `${cartState.cartProducts.length}` : ""}</p>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/login" className={`material-symbols-outlined ${(styles.userControl, styles.userControlPerson)}`}>
            person
          </Link>
          {!user.isLogged ? (
            <ul className={`${styles.userLogoutLinks}`}>
              {/* hay que poner urlDelLogin o de register + #login o #register en cada uno */}
              <Link>
                <li>Iniciar sesión</li>
              </Link>
              <Link>
                <li>Registrarme</li>
              </Link>
            </ul>
          ) : (
            <p className={`${styles.userLogInName} d-none d-md-block`}>Hola, Rodrigo</p>
          )}
        </div>
      </div>
      {/* User control shopcart (offcanvas) */}
      <ShopCartOffCanvas></ShopCartOffCanvas>
    </>
  );
};
