import { ProductCard } from "../ProductCard";
import "./productList.css";

export const ProductList = ({ catalogue = [] }) => {
  return <section className="list-container">{catalogue.length < 1 ? "" : catalogue.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)}</section>;
};
