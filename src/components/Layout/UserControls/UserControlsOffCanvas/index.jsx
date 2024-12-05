import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { UserControlsLinks } from "../UserControlsLinks";

export const UserControlsOffcanvas = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="userControlsOffcanvas" aria-labelledby="userControlsOffcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="userControlsOffcanvasLabel">
          Hola, {user?.name[0].toUpperCase() + user?.name.slice(1)}
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <UserControlsLinks />
      </div>
    </div>
  );
};
