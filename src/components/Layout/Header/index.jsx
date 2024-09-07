import { NavBar } from "../NavBar";
import "./header.css";
export const Header = ({ shopCartItems = {} }) => {
  return (
    <header className="sticky-top">
      <NavBar shopCartItems={shopCartItems}></NavBar>
    </header>
  );
};
