import { createContext, useState } from "react";

const UserContext = createContext();

const nullUserState = {
  isLogged: false,
  name: null,
  lastName: null,
  email: null,
};

const savedUser = sessionStorage.getItem("user")
  ? {
      isLogged: true,
      name: sessionStorage.getItem("user"),
      lastName: sessionStorage.getItem("lastName"),
      email: sessionStorage.getItem("email"),
    }
  : null;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => (savedUser ? savedUser : nullUserState));

  const logIn = (name) => {
    sessionStorage.setItem("user", name);
    sessionStorage.setItem("lastName", "Kenchinjan");
    sessionStorage.setItem("email", "examplemail@example.com");
    setUser({
      isLogged: true,
      name,
      lastName: "Kenchinjan",
      email: "examplemail@example.com",
    });
  };

  const logOut = () => {
    setUser(nullUserState);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("email");
    window.location.reload();
  };

  return <UserContext.Provider value={{ user, logIn, logOut }}>{children}</UserContext.Provider>;
};

export { UserContext };
