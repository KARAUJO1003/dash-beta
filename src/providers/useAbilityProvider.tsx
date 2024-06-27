'use client'
import { useGetUser } from '@/contexts/AuthContext';
import {
  createContext,
  ReactNode,
  useContext
} from 'react';

interface UserContextType {
  can: (permission: string) => boolean;
}

const AbilityContext = createContext<UserContextType>({
  can: () => false,
});

export const AbilityProvider = ({ children }: { children: ReactNode }) => {

  const { user } = useGetUser()
  console.log('[AbilityProvider] ==> user', user);


  const can = (permission: string) => {
    return user?.ability.includes(permission) || false;
  };

  return (
    <AbilityContext.Provider value={{ can }}>
      {children}
    </AbilityContext.Provider>
  );
};

export const useAbility = () => {
  const context = useContext(AbilityContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
