import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../components/Common/Loader";
import { ErrorScreen } from "../components/Common/ErrorScreen";
import { ProductList } from "../components/Product/ProductList";
import { ProductsContext } from "../context/ProductsContext";
import { CategoryIndex } from "../components/CategoryIndex";

export const SearchPage = () => {
  const location = useLocation();
  const { productsState } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [productsSearched, setProductsSearched] = useState([]);
  const [searched, setSearched] = useState("");

  //get URL variables
  useEffect(() => {
    if (!productsState) return;

    const urlVariables = new URLSearchParams(location.search);
    const searchValue = urlVariables.get("sv").toLowerCase();
    setSearched(urlVariables.get("sv"));

    if (productsState.length > 0) {
      const products = productsState.filter((product) => product.title.toLowerCase().includes(searchValue));
      setProductsSearched(products);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      return setProductsSearched([]);
    }
  }, [location.search, productsState]);

  return productsSearched.length == 0 && isLoading ? (
    <Loader />
  ) : productsSearched.length == 0 && !isLoading ? (
    <ErrorScreen errorMessage={`No se encontraron resultados para: "${searched}"`} />
  ) : (
    <div className="container-fluid">
      <CategoryIndex />
      <div className="container">
        <p className="fs-3">Resultados de búsqueda para: {`"${searched}"`}</p>
        <ProductList products={productsSearched}></ProductList>
      </div>
    </div>
  );
};
