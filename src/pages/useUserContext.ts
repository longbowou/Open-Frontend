import { useContext } from 'react';
import { UserContext } from '@/pages/UserProvider.tsx';

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUserContext must be used within UserProvider');

  return context;
};
