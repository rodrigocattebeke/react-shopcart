import { useEffect, useState } from "react";
import simpleFetch from "../hooks/SimpleFetch";
import { ProductList } from "./Product/ProductList";

const mainUrl = "https://fakestoreapi.com",
  productsUrl = "https://fakestoreapi.com/products";

export const HomeCatalogue = ({ onAddToCart }) => {
  const [catalogue, setCatalogue] = useState([]);

  const loadCatalogue = async () => {
    const data = await simpleFetch(productsUrl);
    setCatalogue(data);
  };

  useEffect(() => {
    loadCatalogue();
  }, []);

  return <ProductList catalogue={catalogue} onAddToCart={onAddToCart}></ProductList>;
};
