import { createContext, useEffect, useState } from "react";
import simpleFetch from "../hooks/SimpleFetch";
import { apiUrls } from "../config/apiUrls";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsState, setProductsState] = useState(null);
  const [isSuccess, setIsSuccess] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await simpleFetch(apiUrls.products);
      setProductsState(products.data);
      setIsSuccess(products.isSuccess);
    };
    getProducts();
  }, []);

  return <ProductsContext.Provider value={{ productsState, isSuccess }}>{children}</ProductsContext.Provider>;
};

export { ProductsContext };
