import { ErrorScreen } from "../../Common/ErrorScreen";
import { ExpandProductCard } from "../ExpandProductCard";
import styles from "./styles.module.css";

export const ExpandProductList = ({ catalogue = [] }) => {
  return <section className={`container ${styles.listContainer}`}>{catalogue.length == 0 ? <ErrorScreen errorMessage="No hay productos para mostrar"></ErrorScreen> : catalogue.map((product) => <ExpandProductCard key={product.id} product={product}></ExpandProductCard>)}</section>;
};
