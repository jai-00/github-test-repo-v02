import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import type { authContextType } from "../types/authTypes";

type AuthContextProvider = {
  children?: React.ReactNode;
};

export default function AuthContextProvider({ children }: AuthContextProvider) {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const authCtxValue: authContextType = {
    user,
    loading,
    setUser,
  };

  return (
    <AuthContext.Provider value={authCtxValue}>{children}</AuthContext.Provider>
  );
}
