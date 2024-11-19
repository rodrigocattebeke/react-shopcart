import { useLocation } from "react-router-dom";
import { CategoryProducts } from "../components/CategoryProducts";
import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../services/fetchProductsByCategory";
import { Loader } from "../components/Common/Loader";
import { ErrorScreen } from "../components/Common/ErrorScreen";
import { ProductFilter } from "../components/ProductFilter";
import { CategoryIndex } from "../components/CategoryIndex";

export const ViewCategoryProductsPage = () => {
  const location = useLocation();
  const [categoryProducts, setCategoryProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoaderActive, setIsLoaderActive] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoaderActive(true);
      const category = location.pathname.split("/category/")[1]; //Get category for the url
      const result = await fetchProductsByCategory(category);
      setCategoryProducts(result.data);
      setFilteredProducts(result.data); //initial products
      setIsSuccess(result.isSuccess);
      setIsLoaderActive(false);
    };
    fetchProduct();
  }, [location.pathname]);

  return (
    <>
      {isLoaderActive && <Loader />}
      {!filteredProducts && !isSuccess ? (
        <ErrorScreen errorMessage="No se encontraron productos para esta categoría." />
      ) : (
        <>
          <CategoryIndex />
          <ProductFilter products={categoryProducts} setFilteredProducts={setFilteredProducts} />
          <CategoryProducts products={filteredProducts} />
        </>
      )}
    </>
  );
};
