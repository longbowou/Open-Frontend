/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { createContext, type PropsWithChildren } from 'react';
import { genericErrorMessage, uploadImageToS3 } from '@/utils/API.ts';
import { useAuthContext, UserModel } from '@/auth';
import { slugify } from '@/utils';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const UPDATE_PROFILE_URL = `${API_URL}/update-profile`;
export const UPDATE_PASSWORD_URL = `${API_URL}/update-password`;
export const UPDATE_IMAGE_URL = `${API_URL}/update-image`;

interface UserContextProps {
  updateProfile: (name: string, email: string, address: string) => Promise<any>;
  updatePassword: (currentPassword: string, password: string) => Promise<any>;
  updateImage: (file: File) => Promise<any>;
}

const UserContext = createContext<UserContextProps | null>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const { setCurrentUser, currentUser } = useAuthContext();

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

  const updateImage = async (file: File) => {
    try {
      const fileName = slugify(file.name);
      const contentType = file.type;

      let response = await axios.post(UPDATE_IMAGE_URL, {
        fileName,
        contentType
      });

      if (response.data.errors && response.data.errors.length == 0) {
        await uploadImageToS3(response.data.uploadURL, file).then(() => {
          setCurrentUser({
            ...currentUser,
            imageUrl: response.data.imageUrl
          } as UserModel);
        });
      }

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
        updateProfile,
        updatePassword,
        updateImage
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
