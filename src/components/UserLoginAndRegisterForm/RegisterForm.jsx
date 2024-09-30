import { Link } from "react-router-dom";
import useFormDataRetriever from "../../hooks/formDataRetriever";

export const RegisterForm = ({ classNames = "" }) => {
  const initialForm = { user: "", email: "", password: "" };
  const { formData, onFormInputChange } = useFormDataRetriever(initialForm);

  return (
    <form className={`registerForm ${classNames} `}>
      <input type="text" name="user" placeholder="Nombre de usuario" id="user" title="user" className="login-input" onChange={onFormInputChange} required />
      <input type="email" name="email" placeholder="Correo electrónico" id="email" title="email" className="login-input" onChange={onFormInputChange} required />
      <input type="password" name="password" placeholder="Contraseña" id="password" title="password" className="login-input" onChange={onFormInputChange} required />
      <Link to={"/"} className="btn button-color-primary register-submit">
        Registrarse
      </Link>
    </form>
  );
};
