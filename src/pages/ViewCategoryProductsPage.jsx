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
  const [category, setCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [isSimLoadingActive, setIsSimLoadingActive] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoaderActive(true);
      const categorySearched = location.pathname.split("/category/")[1]; //Get category for the url
      let category = categorySearched.split("/")[categorySearched.split("/").length - 1];
      category = category[0].toUpperCase() + category.slice(1);
      setCategory(category);

      const result = await fetchProductsByCategory(categorySearched);
      setCategoryProducts(result.data);
      setFilteredProducts(result.data); //initial products
      setIsSuccess(result.isSuccess);
      setIsLoaderActive(false);
    };
    fetchProduct();
  }, [location.pathname]);

  //Simulate the API request time
  useEffect(() => {
    setIsSimLoadingActive(true);
    setTimeout(() => {
      setIsSimLoadingActive(false);
    }, 700);
  }, [filteredProducts]);

  return (
    <>
      {isLoaderActive && <Loader />}
      {!filteredProducts && !isSuccess ? (
        <ErrorScreen errorMessage="No se encontraron productos para esta categoría." />
      ) : (
        <>
          <CategoryIndex />
          <div className="container my-3">
            <p className="fs-2 m-0">{category}</p>
          </div>
          <ProductFilter products={categoryProducts} setFilteredProducts={setFilteredProducts} />
          {isSimLoadingActive && (
            <div className="container-fluid vh-100 position-fixed top-0 z-2">
              <Loader fullscreen={false} />
            </div>
          )}
          <CategoryProducts products={filteredProducts} />
        </>
      )}
    </>
  );
};
