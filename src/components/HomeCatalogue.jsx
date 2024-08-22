import { useEffect, useState } from "react";
import simpleFetch from "../hooks/SimpleFetch";
import { ProductList } from "./ProductList";

const mainUrl = "https://fakestoreapi.com",
  productsUrl = "https://fakestoreapi.com/products";

export const HomeCatalogue = () => {
  const [catalogue, setCatalogue] = useState([]);

  const handleAddToCart = (product) => {
    console.log(product);
  };

  const loadCatalogue = async () => {
    const data = await simpleFetch(productsUrl);
    setCatalogue(data);
  };

  useEffect(() => {
    loadCatalogue();
  }, []);

  return <ProductList catalogue={catalogue} onAddToCart={handleAddToCart}></ProductList>;
};
