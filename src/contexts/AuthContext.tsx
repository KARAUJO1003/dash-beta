'use client'
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import { createContext, useContext } from "react";

import { getTestUser } from "@/hooks/getTestUserAuth";
interface AuthContextType {
  user: User | null;
  signOut: () => void;
}

interface User {
  name: string;
  email: string;
  permissions: string[];
  ability: string[];
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signOut: () => null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 'nextauth.token': token } = parseCookies()

  const { data: userAuth } = useQuery({
    queryKey: ['userAuth'],
    queryFn: getTestUser,

  })

  const signOut = () => {
    destroyCookie(undefined, 'nextauth.token')
    destroyCookie(undefined, 'nextauth.refreshToken')
    destroyCookie(undefined, 'nextauth.user')
    window.location.reload()
    redirect('/auth/signin')
  }

  return (
    <AuthContext.Provider value={{ user: userAuth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGetUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useGetUser must be used within a UserProvider');
  }
  return context;
};
