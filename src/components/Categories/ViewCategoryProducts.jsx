import { useLocation } from "react-router-dom";
import simpleFetch from "../../hooks/SimpleFetch";
import { apiUrls } from "../../config/apiUrls";
import { useEffect, useState } from "react";
import { ProductList } from "../Product/ProductList";
import { ErrorScreen } from "../Common/ErrorScreen";
import { Loader } from "../Common/Loader";

export const ViewCategoryProducts = () => {
  const Location = useLocation();

  const [categoryData, setCategoryData] = useState([]);
  const [loaderIsActive, setLoaderIsActive] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getCategory = async () => {
      const category = Location.pathname.split("/category/")[1];
      setCategoryData([]);
      setLoaderIsActive(true);
      try {
        const result = await simpleFetch(`${apiUrls.categoryDetail(`${category}`)}`);
        if (result.isSucces) {
          setCategoryData(result.data);
          if (result.data.length == 0) {
            setHasError(true);
          } else {
            setHasError(false);
          }
        } else {
          setHasError(true);
        }
      } catch (error) {
        setHasError(true);
        console.error(error);
      } finally {
        setLoaderIsActive(false);
      }
    };
    getCategory();
  }, [Location.pathname]);

  if (hasError && categoryData.length == 0) return <ErrorScreen errorMessage="No se encontraron productos para esta categoría"></ErrorScreen>;

  return <>{loaderIsActive ? <Loader></Loader> : <ProductList catalogue={categoryData}></ProductList>} </>;
};
