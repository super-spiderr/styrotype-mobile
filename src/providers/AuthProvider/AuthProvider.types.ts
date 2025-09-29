import { ReactNode } from "react";
export interface User {
  uid: string;
  email: string;
  // add any other fields you need, e.g.
  displayName?: string;
  photoURL?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
export interface AuthProviderProps {
  children: ReactNode;
}
