import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/utils';
import useBodyClasses from '@/hooks/useBodyClasses';
import { AuthBrandedLayoutProvider } from './AuthBrandedLayoutProvider';

const Layout = () => {
  // Applying body classes to manage the background color in dark mode
  useBodyClasses('dark:bg-coal-500');

  return (
    <Fragment>
      <style>
        {`
          .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/1.png')}');
          }
          .dark .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/1-dark.png')}');
          }
        `}
      </style>

      <div className="grid lg:grid-cols-2 grow">
        <div className="flex justify-center items-center p-8 lg:p-10 order-2 lg:order-1">
          <Outlet />
        </div>

        <div className="lg:rounded-xl lg:border lg:border-gray-200 lg:m-5 order-1 lg:order-2 bg-top xxl:bg-center xl:bg-cover bg-no-repeat branded-bg">
          <div className="flex flex-col p-8 lg:p-14 gap-4">
            <Link to="/">
              <img
                src={toAbsoluteUrl('/media/app/logo.png')}
                className="h-[100px] max-w-none"
                alt=""
              />
            </Link>

            <div className="flex flex-col gap-3">
              <div className="text-base font-medium text-gray-600">
                A sleek, <span className="text-gray-900 font-semibold">serverless</span> app
                offering seamless login, <br />
                registration, and profile updates with image uploads. <br />
                Powered by{' '}
                <span className="text-gray-900 font-semibold">AWS API GateWay, Lambda, and S3</span>
                ,
                <br />
                it provides a modern, scalable solution
                <br />
                with zero server maintenance.
                <br />
                Perfect for <span className="text-gray-900 font-semibold">rapid</span> and{' '}
                <span className="text-gray-900 font-semibold">secure</span> user management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// AuthBrandedLayout component that wraps the Layout component with AuthBrandedLayoutProvider
const AuthBrandedLayout = () => (
  <AuthBrandedLayoutProvider>
    <Layout />
  </AuthBrandedLayoutProvider>
);

export { AuthBrandedLayout };
