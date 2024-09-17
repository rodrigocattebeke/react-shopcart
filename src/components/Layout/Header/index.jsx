import simpleFetch from "../../../hooks/SimpleFetch";
import { NavBar } from "../NavBar";
import "./header.css";
export const Header = () => {
  console.log(simpleFetch("https://fakestoreapi.com/products/categories"));
  return (
    <header className="sticky-top">
      <NavBar></NavBar>
    </header>
  );
};
