import { useState } from "react";
import "./login.css";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const UserLoginAndRegisterForm = () => {
  const [isLoginActive, setisLoginActive] = useState(true);
  const [isRegisterActive, setisRegisterActive] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const loginActive = () => {
    setisLoginActive(true);
    setShowRegisterForm(false);
    setTimeout(() => {
      setShowLoginForm(true);
      setisRegisterActive(false);
    }, 500);
  };

  const registerActive = () => {
    setisRegisterActive(true);
    setShowLoginForm(false);
    setTimeout(() => {
      setShowRegisterForm(true);
      setisLoginActive(false);
    }, 500);
  };

  return (
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
