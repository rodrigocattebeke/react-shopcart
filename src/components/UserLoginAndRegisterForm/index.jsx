import { useEffect, useState } from "react";
import "./login.css";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useLocation } from "react-router-dom";

export const UserLoginAndRegisterForm = () => {
  const [isLoginActive, setisLoginActive] = useState(true);
  const [isRegisterActive, setisRegisterActive] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const location = useLocation();

  const loginActive = () => {
    window.location.hash = "login";
    setisLoginActive(true);
    setShowRegisterForm(false);
    setTimeout(() => {
      setShowLoginForm(true);
      setisRegisterActive(false);
    }, 500);
  };

  const registerActive = () => {
    window.location.hash = "register";
    setisRegisterActive(true);
    setShowLoginForm(false);
    setTimeout(() => {
      setShowRegisterForm(true);
      setisLoginActive(false);
    }, 500);
  };

  useEffect(() => {
    if (location.hash == "#login") {
      setisLoginActive(true);
      setShowRegisterForm(false);
      setTimeout(() => {
        setShowLoginForm(true);
        setisRegisterActive(false);
      }, 500);
    } else if (location.hash == "#register") {
      setisRegisterActive(true);
      setShowLoginForm(false);
      setTimeout(() => {
        setShowRegisterForm(true);
        setisLoginActive(false);
      }, 500);
    }
  }, [location]);

  return (
    // PLANTEÉ MAL LA FORMA DE APARECER Y DESAPARECER LOS FORMS, SI NECESITA MODIFICACIÓN, PODRIA HACER QUE CADA FORM, AL DESAPAREER (IRSE FUERA DEL CONTAINER), QUE DESAPAREZCA CON UN OVERFLOW HIDDEN, PERO EN VEZ DE NO RENDERIZAR EL COMPONENTE, SOLO PONERLE UN VISIBILITY NONE, ENTONCES LOS DOS FORMS SE MANEJARAN COMO UN CARROUSEL AL MOMENTO DE MOSTRARSE UNO U OTRO

    <div className="loginBody">
      <section className="login-container">
        <div className="login-header mb-2">
          <p className={`link linkLeft ${isLoginActive ? "active" : ""}`} onClick={loginActive}>
            Iniciar Sesión
          </p>
          <p className={`link linkRight ${isRegisterActive ? "active" : ""}`} onClick={registerActive}>
            Registrarse
          </p>
        </div>
        <div className="form-container">
          {isLoginActive && <LoginForm classNames={showLoginForm ? "active" : ""}></LoginForm>}
          {isRegisterActive && <RegisterForm classNames={showRegisterForm ? "active" : ""}></RegisterForm>}
        </div>
      </section>
    </div>
  );
};
