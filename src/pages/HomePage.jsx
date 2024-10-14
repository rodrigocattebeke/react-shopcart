import { useState } from "react";
import { HomeCatalogue } from "../components/HomeCatalogue";
import { ProductsSale } from "../components/ProductsSale";
import { Loader } from "../components/Common/Loader";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <ProductsSale setIsLoading={setIsLoading} />
      <HomeCatalogue />
    </>
  );
};
