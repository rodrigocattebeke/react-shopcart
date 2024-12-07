import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CategoryIndex } from "../CategoryIndex";

export const UserPanel = () => {
  const { user } = useContext(UserContext);

  return !user.name ? (
    <div className="container fs-1">
      <p>Necesitas iniciar sesión</p>
    </div>
  ) : (
    <>
      <section className="container-fluid">
        <div className="container">
          <CategoryIndex></CategoryIndex>
        </div>
      </section>
      <section className="container"></section>
    </>
  );
};
