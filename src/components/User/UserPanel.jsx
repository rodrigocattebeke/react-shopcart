import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const UserPanel = () => {
  const { user } = useContext(UserContext);

  return !user.name ? (
    <div className="container fs-1">
      <p>Necesitas iniciar sesión</p>
    </div>
  ) : (
    <div>Aqui ira el panel de usuario de {user?.name}</div>
  );
};
