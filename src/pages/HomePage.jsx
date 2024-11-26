import { useEffect, useState } from "react";
import { HomeCatalogue } from "../components/HomeCatalogue";
import { ProductsSale } from "../components/ProductsSale";
import { Loader } from "../components/Common/Loader";
import { HomeSliders } from "../components/Sliders";

export const HomePage = () => {
  const [catalogueIsLoading, setCatalogueIsLoading] = useState(true);
  const [homeSlidersIsLoading, setHomeSlidersIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [saleIsLoading, setSaleIsLoading] = useState(true);

  useEffect(() => {
    if (!saleIsLoading && !catalogueIsLoading && !homeSlidersIsLoading) {
      setIsLoading(false);
    }
  }, [saleIsLoading, catalogueIsLoading, homeSlidersIsLoading]);

  return (
    <>
      {isLoading && <Loader />}
      <ProductsSale setIsLoading={setSaleIsLoading} />
      <HomeSliders setIsLoading={setHomeSlidersIsLoading} />
      <HomeCatalogue setIsLoading={setCatalogueIsLoading} />
    </>
  );
};
