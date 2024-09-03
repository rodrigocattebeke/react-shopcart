import { NavBar } from "../NavBar";
import "./header.css";
export const Header = ({ shopCartItems = {} }) => {
  return (
    <header className="container sticky-top">
      <NavBar shopCartItems={shopCartItems}></NavBar>
    </header>
  );
};
