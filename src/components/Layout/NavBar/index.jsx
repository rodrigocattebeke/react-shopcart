import { HeaderLinks } from "../HaderLinks";
import SearchInput from "../../Common/SearchInput";
import { UserControls } from "../UserControls";

export const NavBar = () => {
  return (
    <nav className={`container d-flex row row-gap-3 align-items-start align-items-md-center py-2`}>
      <HeaderLinks responsiveClass="col-9 col-sm-9 col-md-4 order-1"></HeaderLinks>
      <SearchInput responsiveClass="col-12 col-md-6 order-3 order-md-2 "></SearchInput>
      <UserControls responsiveClass="col-3 col-sm-3 col-md-2 order-2 order-md-3 pt-4 pt-md-0 justify-content-end justify-content-md-center"></UserControls>
    </nav>
  );
};
