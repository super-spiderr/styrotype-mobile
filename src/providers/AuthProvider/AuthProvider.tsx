import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { AuthContextType, User,AuthProviderProps } from "./AuthProvider.types"

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      const storedUser: User | null = null;
      setUser(storedUser);
      setLoading(false);
    };
    checkUser();
  }, []);

  const login = useCallback((userData: User) => setUser(userData), []);
  const logout = useCallback(() => setUser(null), []);

  const value = useMemo(() => ({ user, login, logout, loading }), [user, loading, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
