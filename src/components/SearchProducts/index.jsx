import { useContext, useEffect, useState } from "react";
import { ProductList } from "../Product/ProductList";
import { ProductsContext } from "../../context/ProductsContext";
import { useLocation } from "react-router-dom";
import { ErrorScreen } from "../Common/ErrorScreen";
import { Loader } from "../Common/Loader";

export const SearchProducts = () => {
  const [productsSearched, setProductsSearched] = useState([]);
  const { productsState } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  //get URL variables
  useEffect(() => {
    if (!productsState) return;

    const urlVariables = new URLSearchParams(location.search);
    const searchValue = urlVariables.get("sv").toLowerCase();

    if (productsState.length > 0) {
      const products = productsState.filter((product) => product.title.toLowerCase().includes(searchValue));
      setProductsSearched(products);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      return setProductsSearched([]);
    }
  }, [location.search, productsState]);

  return productsSearched.length == 0 && isLoading ? <Loader /> : productsSearched.length == 0 && !isLoading ? <ErrorScreen errorMessage="No se encontraron resultados para la búsqueda." /> : <ProductList catalogue={productsSearched} />;
};
