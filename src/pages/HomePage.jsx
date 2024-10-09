import { HomeCatalogue } from "../components/HomeCatalogue";
import { Header } from "../components/Layout/Header";
import { ProductsSale } from "../components/ProductsSale";

export const HomePage = () => {
  return (
    <>
      {/* <Header></Header> */}
      <ProductsSale />
      <HomeCatalogue />
    </>
  );
};
