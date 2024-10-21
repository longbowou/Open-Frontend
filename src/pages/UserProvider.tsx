/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { createContext, type PropsWithChildren, useState } from 'react';
import { genericErrorMessage } from '@/utils/API.ts';
import { useAuthContext } from '@/auth';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const UPDATE_PROFILE_URL = `${API_URL}/update-profile`;
export const UPDATE_PASSWORD_URL = `${API_URL}/update-password`;

interface UserContextProps {
  isLoading: boolean;
  updateProfile: (name: string, email: string, address: string) => Promise<any>;
  updatePassword: (currentPassword: string, password: string) => Promise<any>;
}

const UserContext = createContext<UserContextProps | null>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const { setCurrentUser } = useAuthContext();

  const updateProfile = async (name: string, email: string, address: string) => {
    try {
      const response = await axios.post(UPDATE_PROFILE_URL, {
        name,
        email,
        address
      });

      setCurrentUser(response.data.user);

      return response.data;
    } catch (error) {
      return {
        errors: [
          {
            field: 'name',
            message: genericErrorMessage
          }
        ]
      };
    }
  };

  const updatePassword = async (currentPassword: string, password: string) => {
    try {
      const response = await axios.post(UPDATE_PASSWORD_URL, {
        currentPassword,
        password
      });

      return response.data;
    } catch (error) {
      return {
        errors: [
          {
            field: 'name',
            message: genericErrorMessage
          }
        ]
      };
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoading: loading,
        updateProfile,
        updatePassword
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
