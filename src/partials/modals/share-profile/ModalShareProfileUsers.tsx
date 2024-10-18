import { toAbsoluteUrl } from '@/utils';
import React from 'react';
import { Link } from 'react-router-dom';

const ModalShareProfileUsers = () => {
  const items = [
    {
      avatar: '300-3.png',
      userName: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
      role: 'owner'
    },
    {
      avatar: '300-1.png',
      userName: 'Esther Howard',
      email: 'esther.howard@gmail.com',
      role: 'edit'
    },
    {
      avatar: '300-11.png',
      userName: 'Jacob Jones',
      email: 'jacob.jones@gmail.com',
      role: 'viewer'
    }
  ];

  return (
    <div className="flex flex-col px-5 gap-2.5">
      {items.map((item, index) => (
        <div key={index} className="flex items-center flex-wrap gap-2">
          <div className="flex items-center grow gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
              className="rounded-full size-9 shrink-0"
              alt={`${item.userName} avatar`}
            />
            <div className="flex flex-col">
              <Link
                to="#"
                className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
              >
                {item.userName}
              </Link>
              <Link
                to="#"
                className="thover:text-primary-active text-2sm font-medium text-gray-600"
              >
                {item.email}
              </Link>
            </div>
          </div>

          <select className="select select-sm max-w-24" value={item.role}>
            <option value="owner">Owner</option>
            <option value="edit">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export { ModalShareProfileUsers };
