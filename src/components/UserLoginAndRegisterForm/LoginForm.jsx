import { Link } from "react-router-dom";
import useFormDataRetriever from "../../helpers/formDataRetriever";

export const LoginForm = ({ classNames = "" }) => {
  const initialForm = { email: "", password: "" };
  const { formData, onFormInputChange } = useFormDataRetriever(initialForm);

  return (
    <form className={`loginForm ${classNames}`}>
      <input type="email" name="email" placeholder="Correo electrónico" id="email" title="email" className="login-input" onChange={onFormInputChange} required />
      <input type="password" name="password" placeholder="Contraseña" id="password" title="password" className="login-input" onChange={onFormInputChange} required />
      <Link to={"/"} className="btn button-color-primary login-submit">
        Iniciar Sesión
      </Link>
    </form>
  );
};
