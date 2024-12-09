import { useContext, useEffect } from "react";
import { ProductList } from "./Product/ProductList";
import { ErrorScreen } from "./Common/ErrorScreen";
import { ProductsContext } from "../contexts/ProductsContext";

export const HomeCatalogue = ({ setIsLoading }) => {
  const { productsState, isSuccess } = useContext(ProductsContext);

  useEffect(() => {
    if (productsState) {
      setIsLoading(false);
    }
  }, [productsState, setIsLoading]);

  return !isSuccess ? <ErrorScreen /> : !productsState ? "" : <ProductList products={productsState}></ProductList>;
};
