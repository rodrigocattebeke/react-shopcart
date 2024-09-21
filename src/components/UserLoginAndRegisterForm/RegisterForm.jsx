import useFormDataRetriever from "../../hooks/formDataRetriever";

export const RegisterForm = () => {
  const initialForm = { user: "", email: "", password: "" };
  const { formData, onFormInputChange } = useFormDataRetriever(initialForm);
  const onSubmitClick = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form>
      <input type="text" name="user" placeholder="Nombre de usuario" id="user" title="user" className="login-form" onChange={onFormInputChange} required />
      <input type="email" name="email" placeholder="Correo electrónico" id="email" title="email" className="login-form" onChange={onFormInputChange} required />
      <input type="password" name="password" placeholder="Contraseña" id="password" title="password" className="login-form" onChange={onFormInputChange} required />
      <button type="submit" className="btn button-color-primary register-submit" onClick={onSubmitClick}>
        Registrarse
      </button>
    </form>
  );
};
