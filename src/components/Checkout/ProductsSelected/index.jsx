import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { ProductCartInfo } from "../../Product/ProductCartInfo";
import styles from "./styles.module.css";

export const ProductsSelected = ({}) => {
  const { cartState } = useContext(CartContext);

  return (
    <aside className={`${styles.productsResume}`}>
      <p className="">Resumen</p>
      <div className={`${styles.productsContainer}`}>{cartState.cartProducts < 1 ? "Sin items" : cartState.cartProducts.map((product) => <ProductCartInfo product={product} isModifyActive={false} key={product.id}></ProductCartInfo>)}</div>
    </aside>
  );
};
