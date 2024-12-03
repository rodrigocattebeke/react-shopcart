import { createContext, useState } from "react";

const UserContext = createContext();

const initialUserState = {
  isLogged: false,
  name: null,
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState);

  const logIn = (name) => {
    setUser({
      isLogged: true,
      name,
    });
  };

  const logOut = () => {
    setUser(initialUserState);
  };

  return <UserContext.Provider value={{ user, logIn, logOut }}>{children}</UserContext.Provider>;
};

export { UserContext };
