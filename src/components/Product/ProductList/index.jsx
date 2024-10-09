import { ErrorScreen } from "../../Common/ErrorScreen";
import { ProductCard } from "../ProductCard";
import styles from "./styles.module.css";

export const ProductList = ({ catalogue = [] }) => {
  return <section className={`container ${styles.listContainer}`}>{catalogue.length == 0 ? <ErrorScreen errorMessage="No hay productos para mostrar"></ErrorScreen> : catalogue.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}</section>;
};
