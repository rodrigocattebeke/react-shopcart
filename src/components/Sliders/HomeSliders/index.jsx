import { useContext, useEffect, useState } from "react";
import { ProductsSlider } from "../ProductsSlider";
import { ProductsContext } from "../../../context/ProductsContext";

export const HomeSliders = ({ setIsLoading = null }) => {
  const { productsState } = useContext(ProductsContext);
  const [productStateCopy, setProductStateCopy] = useState(null);

  useEffect(() => {
    if (!productsState) return;
    setProductStateCopy(productsState);
    if (setIsLoading) setIsLoading(false);
  }, [productsState, setIsLoading]);

  return !productStateCopy ? null : (
    <div className="container-fluid">
      <div className="row row-gap-5 my-5">
        <div className="col-12 col-lg-6">
          <ProductsSlider title={"Nuevos Productos"} products={productStateCopy.slice(5)} viewAllUrl={`/category/electronics`} />
        </div>
        <div className="col-12 col-lg-6">
          <ProductsSlider title={`Productos Con Envío Gratis A Todo El País`} products={productStateCopy.slice(7)} viewAllUrl={`/category/electronics`} />
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
  );
};
