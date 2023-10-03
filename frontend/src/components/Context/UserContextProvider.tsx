import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import UserContext from "./UserContext";
import { auth } from "../../firebase";
import { User } from "firebase/auth";

interface Props {
  children: ReactNode;
}

// const UserContext = createContext(userDisplay);

export function UserProvider({ children }: Props) {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

// export function useUser() {
//   return useContext(UserContext);
// }
