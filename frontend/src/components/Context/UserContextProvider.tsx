import React, { createContext, useState, useContext, ReactNode } from "react";
import UserContext from "./UserContext";

interface Props {
  children: ReactNode;
}

// const UserContext = createContext(userDisplay);

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

// export function useUser() {
//   return useContext(UserContext);
// }
