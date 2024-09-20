import { useEffect, useState } from "react";
import simpleFetch from "../hooks/SimpleFetch";
import { ProductList } from "./Product/ProductList";
import { Loader } from "./Common/Loader";
import { ErrorScreen } from "./Common/ErrorScreen";
import { apiUrls } from "../config/apiUrls";

export const HomeCatalogue = () => {
  const [catalogue, setCatalogue] = useState([]);
  const [isSuccess, setIsSucces] = useState(true);

  const loadCatalogue = async () => {
    const result = await simpleFetch(apiUrls.products);
    setIsSucces(result.isSuccess);
    setCatalogue(result.data);
  };

  useEffect(() => {
    loadCatalogue();
  }, []);

  return catalogue.length == 0 ? <Loader></Loader> : !isSuccess ? <ErrorScreen></ErrorScreen> : <ProductList catalogue={catalogue}></ProductList>;
};
