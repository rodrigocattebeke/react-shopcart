import SearchInput from "../../Common/SearchInput";
import { HeaderLinks } from "../HaderLinks";
import { UserControls } from "../UserControls";

export const NavBar = () => {
  return (
    <nav className="container d-flex row navbar align-items-start">
      <HeaderLinks responsiveClass="col-9 col-md-4 order-1 mb-2"></HeaderLinks>
      <SearchInput responsiveClass="col-12 col-md-6 order-3 order-md-2 mb-2 mt-2"></SearchInput>
      <UserControls responsiveClass="col-3 col-md-2 order-2 order-md-3 mb-2"></UserControls>
    </nav>
  );
};
