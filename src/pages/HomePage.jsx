import { useEffect, useState } from "react";
import { HomeCatalogue } from "../components/HomeCatalogue";
import { ProductsSale } from "../components/ProductsSale";
import { Loader } from "../components/Common/Loader";

export const HomePage = () => {
  const [catalogueIsLoading, setCatalogueIsLoading] = useState(true);
  const [saleIsLoading, setSaleIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (saleIsLoading == false && catalogueIsLoading == false) {
      setIsLoading(false);
    }
  }, [saleIsLoading, catalogueIsLoading]);

  return (
    <>
      {isLoading && <Loader />}
      <ProductsSale setIsLoading={setSaleIsLoading} />
      <HomeCatalogue setIsLoading={setCatalogueIsLoading} />
    </>
  );
};
