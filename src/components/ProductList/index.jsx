import { ProductCard } from "../ProductCard";
import "./productList.css";

export const ProductList = ({ catalogue = [], onAddToCart }) => {
  return <section className="list-container">{catalogue.length < 1 ? "" : catalogue.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}></ProductCard>)}</section>;
};
