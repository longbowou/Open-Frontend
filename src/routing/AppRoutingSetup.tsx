import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ProfileDefaultPage } from '@/pages';
import { AuthPage } from '@/auth';
import { RequireAuth } from '@/auth/RequireAuth';
import { ErrorsRouting } from '@/errors';
import { Demo7Layout } from '@/layouts/demo7';

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo7Layout />}>
          <Route path="/*" element={<ProfileDefaultPage />} />
        </Route>
      </Route>
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRoutingSetup };
