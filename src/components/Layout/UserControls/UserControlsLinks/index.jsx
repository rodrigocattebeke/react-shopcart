import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { UserContext } from "../../../../contexts/UserContext";

export const UserControlsLinks = () => {
  const { logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <ul className={`${styles.ulControls}`}>
        <li>
          <Link to="/user">
            <span className={`material-symbols-outlined`}>account_box</span>
            Mi cuenta
          </Link>
        </li>
        <li>
          <Link>
            <span className={`material-symbols-outlined`}>order_approve</span>
            Mis pedidos
          </Link>
        </li>
        <li>
          <Link>
            <span className={`material-symbols-outlined`}>shopping_bag</span>
            Mi carrito
          </Link>
        </li>
        <li onClick={handleLogOut}>
          <Link>
            <span className={`material-symbols-outlined`}>logout</span>
            Cerrar sesión
          </Link>
        </li>
      </ul>
    </>
  );
};
