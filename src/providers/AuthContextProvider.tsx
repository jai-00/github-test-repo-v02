import { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import type { authContextType } from "../types/authTypes";
import { redirect } from "react-router-dom";

type AuthContextProvider = {
  children?: React.ReactNode;
};

export default function AuthContextProvider({ children }: AuthContextProvider) {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");

    if (!token) {
      throw redirect("/login");
    }

    const response = await;
  });

  const authCtxValue: authContextType = {
    user,
    loading,
    setUser,
  };

  return (
    <AuthContext.Provider value={authCtxValue}>{children}</AuthContext.Provider>
  );
}
