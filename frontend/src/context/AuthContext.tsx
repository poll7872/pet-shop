import React, { createContext, useState } from "react";
import { loginUser } from "../api/auth";

interface AuthContextProps {
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  login: async () => { },
  logout: () => { }
})


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  const login = async (email: string, password: string) => {
    try {
      const { token } = await loginUser({ email, password });
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

