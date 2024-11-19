import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { ProductCartInfo } from "../../Product/ProductCartInfo";
import styles from "./styles.module.css";
import { moneyFormat } from "../../../helpers/moneyFormat";
import { dolarToPYG } from "../../../helpers/dolarToPYG";

export const ProductsSelected = ({}) => {
  const { cartState, getTotalPrice } = useContext(CartContext);

  return (
    <aside className={`${styles.productsResume}`}>
      <p className="">Resumen</p>
      <div className={`${styles.productsContainer}`}>{cartState.cartProducts < 1 ? "Sin items" : cartState.cartProducts.map((product) => <ProductCartInfo product={product} isModifyActive={false} key={product.id}></ProductCartInfo>)}</div>
      <p>Total: Gs. {moneyFormat(dolarToPYG(getTotalPrice()))}</p>
    </aside>
  );
};
