/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { createContext, type Dispatch, type PropsWithChildren, type SetStateAction, useEffect, useState } from 'react';

import * as authHelper from '../_helpers';
import { type UserModel } from '@/auth';
import { genericErrorMessage } from '@/utils/API.ts';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const FETCH_USER_URL = `${API_URL}/fetch-user`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot-password`;

export interface ErrorMessage {
  field: string;
  message: string;
}

interface AuthContextProps {
  isLoading: boolean;
  auth: string | undefined;
  saveAuth: (auth: string | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  login: (email: string, password: string) => Promise<any>;
  register: (
    name: string,
    email: string,
    address: string,
    password: string,
    passwordConfirmation: string,
    fileName: string,
    contentType: string
  ) => Promise<any>;
  requestPassword: (email: string) => Promise<void>;
  logout: () => void;
  verify: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<string | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>();
  const [errors, setErrors] = useState<Array<ErrorMessage>>([]);

  useEffect(() => {
    verify().finally(() => {
      // delay for layout initialization
      setLoading(false);
    });
  }, []);

  // Verity user session and validate bearer authentication
  const verify = async () => {
    if (auth) {
      try {
        const response = await fetchUser();
        setCurrentUser(response.data.user);
      } catch (error) {
        saveAuth(undefined);
        setCurrentUser(undefined);
      }
    }
  };

  // Set auth object and save it to local storage
  const saveAuth = (auth: string | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  // Login user with email and password
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(LOGIN_URL, {
        email,
        password
      });

      if (response.data.errors && response.data.errors.length == 0) {
        saveAuth(response.data.authToken);
        setCurrentUser(response.data.user);
      }

      return response.data;
    } catch (error) {
      saveAuth(undefined);
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

  // Register user using default registration information
  const register = async (
    name: string,
    email: string,
    address: string,
    password: string,
    passwordConfirmation: string,
    fileName: string,
    contentType: string
  ) => {
    try {
      const response = await axios.post(REGISTER_URL, {
        name,
        email,
        address,
        password,
        passwordConfirmation,
        fileName,
        contentType
      });

      return response.data;
    } catch (error) {
      saveAuth(undefined);
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

  // Server should return object => { result: boolean } (Is Email in DB)
  const requestPassword = async (email: string) => {
    await axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
      email
    });
  };

  // Returns user by using bearer authentication token
  const fetchUser = async () => {
    return await axios.get(FETCH_USER_URL);
  };

  // Delete auth local storage and resets current user state
  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading: loading,
        auth,
        saveAuth,
        currentUser,
        setCurrentUser,
        login,
        register,
        requestPassword,
        logout,
        verify
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
