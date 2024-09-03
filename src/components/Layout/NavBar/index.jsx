import SearchInput from "../../Common/SearchInput";
import { HeaderLinks } from "../HaderLinks";
import { UserControls } from "../UserControls";

export const NavBar = ({ shopCartItems = {} }) => {
  return (
    <nav className="d-flex row navbar">
      <HeaderLinks responsiveClass="col-9 col-md-4 order-1"></HeaderLinks>
      <SearchInput responsiveClass="col-12 col-md-6 order-3 order-md-2"></SearchInput>
      <UserControls shopCartItems={shopCartItems} responsiveClass="col-3 col-md-2 order-2 order-md-3"></UserControls>
    </nav>
  );
};
