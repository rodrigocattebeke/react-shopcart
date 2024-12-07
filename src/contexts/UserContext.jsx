import { createContext, useState } from "react";

const UserContext = createContext();

const nullUserState = {
  isLogged: false,
  name: null,
};

const savedUser = sessionStorage.getItem("user") ? { isLogged: true, name: sessionStorage.getItem("user") } : null;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => (savedUser ? savedUser : nullUserState));

  const logIn = (name) => {
    sessionStorage.setItem("user", name);
    setUser({
      isLogged: true,
      name,
    });
  };

  const logOut = () => {
    setUser(nullUserState);
    sessionStorage.removeItem("user");
    window.location.reload();
  };

  return <UserContext.Provider value={{ user, logIn, logOut }}>{children}</UserContext.Provider>;
};

export { UserContext };
