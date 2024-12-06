import { useContext } from "react";
import { UserPanel } from "../components/User/UserPanel";
import { UserContext } from "../contexts/UserContext";

export const UserPage = () => {
  const { user } = useContext(UserContext);

  return !user.name ? (
    <div className="container fs-1">
      <p>Necesitas iniciar sesión</p>
    </div>
  ) : (
    <div>
      <UserPanel />
    </div>
  );
};
