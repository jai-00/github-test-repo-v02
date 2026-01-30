import { createContext } from "react";
import type { authContextType } from "../types/authTypes";

const AuthContext = createContext<authContextType>({
  user: null,
  loading: true,
  setUser: () => {},
});

export default AuthContext;
