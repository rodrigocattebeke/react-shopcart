import { CheckoutForm } from "./CheckoutForm";
import { ProductsSelected } from "./ProductsSelected";
import styles from "./checkout.module.css";

export const Checkout = () => {
  return (
    <div className={`${styles.checkoutBackground}`}>
      <div className={`${styles.container} d-flex flex-column flex-sm-row`}>
        <CheckoutForm></CheckoutForm>
        <ProductsSelected></ProductsSelected>
      </div>
    </div>
  );
};
