import { KeenIcon } from '@/components';

import { CrudAvatarUpload } from '@/partials/crud';
import { Link } from 'react-router-dom';

const UpdatePassword = () => {
  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">Update Password</h3>
        <div className="flex gap-3">
          <Link to="/" className="btn btn-clear btn-primary">
            <KeenIcon icon="double-left-arrow" /> Return
          </Link>
        </div>
      </div>
      <div className="card-table scrollable-x-auto pb-3">
        <table className="table align-middle text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="py-2 min-w-28 text-gray-600 font-normal">Photo</td>
              <td className="py-2 text-gray700 font-normal min-w-32 text-2sm">JPEG, PNG Image</td>
              <td className="py-2 text-center">
                <div className="flex justify-center items-center">
                  <CrudAvatarUpload />
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600 font-normal">Name</td>
              <td className="py-2 text-gray-800 font-normaltext-sm">Jason Tatum</td>
              <td className="py-2 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-2 text-gray-600 font-normal">Email</td>
              <td className="py-2 text-gray-800 font-normaltext-sm">Jason.Tatum@gmail.com</td>
              <td className="py-2 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">Address</td>
              <td className="py-3 text-gray-800 font-normaltext-sm">1000 N 4Th St, IA 52557</td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">Password</td>
              <td className="py-3 text-gray-800 font-normaltext-sm">*****</td>
              <td className="py-3 text-center">
                <a href="#" className="btn btn-sm btn-icon btn-clear btn-primary">
                  <KeenIcon icon="notepad-edit" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { UpdatePassword };
