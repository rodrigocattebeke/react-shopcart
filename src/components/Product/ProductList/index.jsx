import { ErrorScreen } from "../../Common/ErrorScreen";
import { ProductCard } from "../ProductCard";
import "./productList.css";

export const ProductList = ({ catalogue = [] }) => {
  return <section className="list-container">{catalogue.length == 0 ? <ErrorScreen errorMessage="No hay productos para mostrar"></ErrorScreen> : catalogue.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}</section>;
};
