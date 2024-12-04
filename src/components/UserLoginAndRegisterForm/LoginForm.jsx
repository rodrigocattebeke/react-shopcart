import useFormDataRetriever from "../../helpers/formDataRetriever";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { Loader } from "../Common/Loader";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ setIsLoaderActive, showFormClass = "" }) => {
  const initialForm = { username: "", password: "" };
  const { formData, onFormInputChange } = useFormDataRetriever(initialForm);
  const { logIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.username) return alert("Debes de ingresar un nombre de usuario");
    if (!formData.password) return alert("Contraseña incorrecta");
    logIn(formData.username);
    setIsLoaderActive(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <form className={`loginForm ${showFormClass}`}>
      <input type="text" name="username" placeholder="Usuario" id="username" title="username" className="login-input" onChange={onFormInputChange} required />
      <input type="password" name="password" placeholder="Contraseña" id="password" title="password" className="login-input" onChange={onFormInputChange} required />
      <button className="btn button-color-primary login-submit" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </form>
  );
};
