import { useLocation } from "react-router-dom";
import simpleFetch from "../../hooks/SimpleFetch";
import { apiUrls } from "../../config/apiUrls";
import { useEffect, useState } from "react";
import { ProductList } from "../Product/ProductList";
import { ErrorScreen } from "../Common/ErrorScreen";
import { Loader } from "../Common/Loader";

export const CategoryProducts = () => {
  const Location = useLocation();

  const [categoryData, setCategoryData] = useState([]);
  const [loaderIsActive, setLoaderIsActive] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [categoryPaths, setCategoryPaths] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      const category = Location.pathname.split("/category/")[1];
      setCategoryPaths(Location.pathname.split("category/")[1].split("/"));
      setCategoryData([]);
      setLoaderIsActive(true);
      try {
        const result = await simpleFetch(`${apiUrls.categoryDetail(`${category}`)}`);
        if (result.isSuccess) {
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

  const pathToLi = (array) => {
    if (!array) return;
    let lastPath = "category";
    let liArray = array.map((category, i) => {
      if (i < array.length - 1) {
        lastPath += `/${category}`;
        return (
          <li key={category} className={`${"prevCategory"}`}>
            <a href={`${lastPath}`}>{`${category}`}</a>
          </li>
        );
      } else {
        return (
          <li key={category}>
            <p>{`${category}`}</p>
          </li>
        );
      }
    });
    return liArray;
  };

  if (hasError && categoryData.length == 0) return <ErrorScreen errorMessage="No se encontraron productos para esta categoría"></ErrorScreen>;

  return (
    <>
      {loaderIsActive ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="">
            <div className="container">
              <ul className="d-flex">
                <li>
                  <a href="/">Inicio</a>
                </li>
                {pathToLi(categoryPaths)};
              </ul>
            </div>
          </div>
          <ProductList products={categoryData}></ProductList>
        </>
      )}{" "}
    </>
  );
};
