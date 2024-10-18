import { CheckoutForm } from "./CheckoutForm";
import { ProductsSelected } from "./ProductsSelected";
import styles from "./checkout.module.css";

export const Checkout = () => {
  return (
    <div className={`${styles.checkoutBackground}`}>
      <div className={`${styles.divsContainer}`}>
        <div className={`row mx-3 row-gap-3`}>
          <div className="col-12 col-sm-8 ">
            <CheckoutForm></CheckoutForm>
          </div>
          <div className="col-12 col-sm-4 ">
            <ProductsSelected></ProductsSelected>
          </div>
        </div>
      </div>
    </div>
  );
};
