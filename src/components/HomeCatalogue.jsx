import { useContext } from "react";
import { ProductList } from "./Product/ProductList";
import { Loader } from "./Common/Loader";
import { ErrorScreen } from "./Common/ErrorScreen";
import { ProductsContext } from "../context/ProductsContext";

export const HomeCatalogue = () => {
  const { productsState, isSuccess } = useContext(ProductsContext);

  return !isSuccess ? <ErrorScreen /> : !productsState ? "" : <ProductList catalogue={productsState}></ProductList>;
};
