import { KeenIcon } from '@/components';

import { CrudAvatarUpload } from '@/partials/crud';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/auth';
import { useUserContext } from '@/pages/useUserContext.ts';
import { useState } from 'react';

const PersonalInfo = () => {
  const { currentUser } = useAuthContext();
  const { updateImage } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = async (file: File) => {
    setIsLoading(true);

    await updateImage(file);

    setIsLoading(false);
  };

  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">Personal Info</h3>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="py-2 text-center" colSpan={3}>
                <div className="flex justify-center items-center my-7">
                  <CrudAvatarUpload
                    isLoading={isLoading}
                    dataURL={currentUser?.imageUrl}
                    onChange={(file) => {
                      if (file) {
                        uploadImage(file!.file!);
                      }
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600 font-normal">Name</td>
              <td className="py-2 text-gray-800 font-normaltext-sm">{currentUser?.name}</td>
              <td className="py-2 text-center">
                <Link to="/update" className="btn btn-sm btn-icon btn-clear btn-light">
                  <KeenIcon icon="notepad-edit" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600 font-normal">Email</td>
              <td className="py-2 text-gray-800 font-normaltext-sm">
                {currentUser?.email} <br />
                {currentUser?.imageUrl}
              </td>
              <td className="py-2 text-center">
                <Link to="/update" className="btn btn-sm btn-icon btn-clear btn-light">
                  <KeenIcon icon="notepad-edit" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-3">Address</td>
              <td className="py-3 text-gray-800 font-normaltext-sm">{currentUser?.address}</td>
              <td className="py-3 text-center">
                <Link to="/update" className="btn btn-sm btn-icon btn-clear btn-light">
                  <KeenIcon icon="notepad-edit" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-3">Password</td>
              <td className="py-3 text-gray-800 font-normaltext-sm">*****</td>
              <td className="py-3 text-center">
                <Link to="/password" className="btn btn-sm btn-icon btn-clear btn-light">
                  <KeenIcon icon="notepad-edit" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { PersonalInfo };
