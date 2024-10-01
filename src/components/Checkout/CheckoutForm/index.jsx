import styles from "./checkoutForm.module.css";

export const CheckoutForm = () => {
  return (
    <div className={`${styles.checkoutBackground}`}>
      <div className={`${styles.container}`}>
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
            <button type="button" className="btn button-color-primary">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
