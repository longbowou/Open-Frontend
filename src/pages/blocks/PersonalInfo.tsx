import { KeenIcon } from '@/components';

import { CrudAvatarUpload } from '@/partials/crud';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/auth';

const PersonalInfo = () => {
  const { currentUser } = useAuthContext();

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
                  <CrudAvatarUpload dataURL={currentUser?.imageUrl} />
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600 font-normal">Name</td>
              <td className="py-2 text-gray-800 font-normaltext-sm">{currentUser?.name}</td>
              <td className="py-2 text-center">
                <Link to="/update" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600 font-normal">Email</td>
              <td className="py-2 text-gray-800 font-normaltext-sm">{currentUser?.email}</td>
              <td className="py-2 text-center">
                <Link to="/update" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-3">Address</td>
              <td className="py-3 text-gray-800 font-normaltext-sm">{currentUser?.address}</td>
              <td className="py-3 text-center">
                <Link to="/update" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-3">Password</td>
              <td className="py-3 text-gray-800 font-normaltext-sm">*****</td>
              <td className="py-3 text-center">
                <Link to="/password" className="btn btn-sm btn-icon btn-clear btn-primary">
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
