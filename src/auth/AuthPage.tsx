import { Navigate, Route, Routes } from 'react-router';
import { Login, Signup } from './pages/jwt';
import { AuthBrandedLayout } from '@/layouts/auth-branded';

const AuthPage = () => (
  <Routes>
    <Route element={<AuthBrandedLayout />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { AuthPage };
