import { useContext, useEffect, useState } from "react";
import { ProductList } from "./Product/ProductList";
import { ErrorScreen } from "./Common/ErrorScreen";
import { ProductsContext } from "../context/ProductsContext";

export const HomeCatalogue = ({ setIsLoading }) => {
  const { productsState, isSuccess } = useContext(ProductsContext);

  useEffect(() => {
    if (productsState) {
      setIsLoading(false);
    }
  }, [productsState, setIsLoading]);

  return !isSuccess ? <ErrorScreen /> : !productsState ? "" : <ProductList catalogue={productsState}></ProductList>;
};
