import { Link } from "react-router-dom";
import styles from "./checkoutForm.module.css";

export const CheckoutForm = () => {
  return (
    <div className={`${styles.checkoutFormContainer}`}>
      <div className={`${styles.formTitle}`}>
        <span className="material-symbols-outlined">home_pin</span>
        <p>Datos para el envío</p>
      </div>
      <form className={`${styles.checkoutForm} d-flex flex-column `}>
        <input type="text" placeholder="Nombre" name="name" />
        <input type="text" placeholder="Apellido" name="lastname" />
        <input type="text" placeholder="Departamento" name="district" />
        <input type="text" placeholder="Ciudad" name="city" />
        <input type="text" placeholder="Direccion" name="direction" />
        <Link to="/" className="btn button-color-primary">
          Confirmar
        </Link>
      </form>
    </div>
  );
};
