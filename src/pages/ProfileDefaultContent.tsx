import React from 'react';
import { PersonalInfo } from '@/pages/blocks';
import { Route, Routes } from 'react-router';
import { UpdatePersonalInfo } from '@/pages/blocks/UpdatePersonalInfo.tsx';
import { UpdatePassword } from '@/pages/blocks/UpdatePassword.tsx';

const ProfileDefaultContent = () => {
  return (
    <div className="grid grid-cols-1 pt-5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/update" element={<UpdatePersonalInfo />} />
            <Route path="/password" element={<UpdatePassword />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export { ProfileDefaultContent };
