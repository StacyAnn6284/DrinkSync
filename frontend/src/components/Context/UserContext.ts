import { User } from "firebase/auth";
import { createContext } from "react";

interface UserModel {
  user: User | null;
}

const defaultValue: UserModel = {
  user: null,
};

const UserContext = createContext(defaultValue);
export default UserContext;
