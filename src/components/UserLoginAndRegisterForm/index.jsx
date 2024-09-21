import { useState } from "react";
import "./login.css";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const UserLoginAndRegisterForm = () => {
  const [isLoginActive, setisLoginActive] = useState(true);
  const [isRegisterActive, setisRegisterActive] = useState(false);

  const handleClick = () => {
    setisLoginActive(!isLoginActive);
    setisRegisterActive(!isRegisterActive);
  };

  return (
    <div className="loginBody">
      <section className="login-background">
        <div className="login-container">
          <div className="login-header mb-2">
            <p className={`link linkLeft ${isLoginActive ? "active" : ""}`} onClick={handleClick}>
              Iniciar Sesión
            </p>
            <p className={`link linkRight ${isRegisterActive ? "active" : ""}`} onClick={handleClick}>
              Registrarse
            </p>
          </div>
          <div className="form-container text-center">
            <LoginForm></LoginForm>
          </div>
        </div>
      </section>
    </div>
  );
};
