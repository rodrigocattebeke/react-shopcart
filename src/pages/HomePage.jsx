import { useContext, useEffect, useState } from "react";
import { HomeCatalogue } from "../components/HomeCatalogue";
import { ProductsSale } from "../components/ProductsSale";
import { Loader } from "../components/Common/Loader";
import { ProductsSlider } from "../components/Sliders";
import { ProductsContext } from "../context/ProductsContext";
import { apiUrls } from "../config/apiUrls";

export const HomePage = () => {
  const [catalogueIsLoading, setCatalogueIsLoading] = useState(true);
  const [saleIsLoading, setSaleIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { productsState } = useContext(ProductsContext);
  const [productStateCopy, setProductStateCopy] = useState(null);

  useState(() => {
    if (!productsState) return;
    setProductStateCopy(productsState);
  }, [productsState]);

  useEffect(() => {
    if (saleIsLoading == false && catalogueIsLoading == false) {
      setIsLoading(false);
    }
  }, [saleIsLoading, catalogueIsLoading]);

  return !productStateCopy ? (
    ""
  ) : (
    <>
      {isLoading && <Loader />}
      <ProductsSale setIsLoading={setSaleIsLoading} />
      <div className="container-fluid">
        <div className="row row-gap-5 my-5">
          <div className="col-12 col-lg-6 px-3">
            <ProductsSlider title={"Nuevos Productos"} products={productStateCopy.slice(5)} viewAllUrl={`/category/electronics`} />
          </div>
          <div className="col-12 col-lg-6">
            <ProductsSlider title={"Productos Con Envío Gratis A Todo El País"} products={productStateCopy.slice(7)} viewAllUrl={`/category/electronics`} />
          </div>
          <div className="col-12 col-lg-6">
            <ProductsSlider title={"Ropa Moderna"} products={productStateCopy.slice(2)} viewAllUrl={`/category/electronics`} />
          </div>
          <div className="col-12 col-lg-6">
            <ProductsSlider title={"Electronicos"} products={productStateCopy.slice(9)} viewAllUrl={`/category/electronics`} />
          </div>
          <div className="col-12 col-lg-6">
            <ProductsSlider title={"Para El Hogar"} products={productStateCopy.toReversed()} viewAllUrl={`/category/electronics`} />
          </div>
          <div className="col-12 col-lg-6">
            <ProductsSlider title={"Para La Cocina"} products={productStateCopy.slice(3)} viewAllUrl={`/category/electronics`} />
          </div>
        </div>
      </div>
      <HomeCatalogue setIsLoading={setCatalogueIsLoading} />
    </>
  );
};
