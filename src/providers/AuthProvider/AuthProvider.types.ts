import { ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
}
export interface AuthProviderProps {
  children: ReactNode;
}
