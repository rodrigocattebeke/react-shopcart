import { CheckoutForm } from "./CheckoutForm";
import styles from "./checkout.module.css";

export const Checkout = () => {
  return (
    <div className={`${styles.checkoutBackground}`}>
      <div className={`${styles.container}`}>
        <CheckoutForm></CheckoutForm>
      </div>
    </div>
  );
};
