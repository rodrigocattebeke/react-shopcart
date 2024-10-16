import SearchInput from "../../Common/SearchInput";
import { HeaderLinks } from "../HaderLinks";
import { UserControls } from "../UserControls";

export const NavBar = () => {
  return (
    <nav className="container d-flex row row-gap-3 navbar align-items-start align-items-md-center">
      <HeaderLinks responsiveClass="col-6 col-sm-9 col-md-4 order-1"></HeaderLinks>
      <SearchInput responsiveClass="col-12 col-md-6 order-3 order-md-2 "></SearchInput>
      <UserControls responsiveClass="col-6 col-sm-3 col-md-2 order-2 order-md-3 justify-content-end justify-content-md-center"></UserControls>
    </nav>
  );
};
