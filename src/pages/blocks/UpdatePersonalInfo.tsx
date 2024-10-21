import { KeenIcon } from '@/components';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { genericErrorMessage } from '@/utils/API.ts';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useAuthContext } from '@/auth';
import { useUserContext } from '@/pages/useUserContext.ts';
import { ErrorMessage } from '@/auth/providers/JWTProvider.tsx';

const signupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required')
});

const UpdatePersonalInfo = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuthContext();
  const { updateProfile } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Update Password - Open';
  }, []);

  const initialValues = {
    name: currentUser?.name,
    address: currentUser?.address,
    email: currentUser?.email
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, { setStatus, setSubmitting, setFieldError }) => {
      setLoading(true);
      try {
        if (!updateProfile) {
          throw new Error('UserProvider is required for this form.');
        }

        const response = await updateProfile(values.name!, values.email!, values.address!);

        const errors: Array<ErrorMessage> = response.errors;
        if (errors && errors.length > 0) {
          for (const error of errors) {
            setFieldError(error.field, error.message);
          }
          setLoading(false);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error(error);
        setStatus(genericErrorMessage);
        setSubmitting(false);
        setLoading(false);
      }
    }
  });

  return (
    <div className="card min-w-full">
      <div className="card-header">
        <h3 className="card-title">Update Personal Info</h3>
        <div className="flex gap-3">
          <Link to="/" className="btn btn-clear btn-secondary">
            <KeenIcon icon="double-left-arrow" /> Return
          </Link>
        </div>
      </div>

      <div className="card-table scrollable-x-auto pb-3">
        <form
          className="card-body flex flex-col gap-5 p-10"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Full Name</label>
            <label className="input">
              <input
                placeholder="Enter yout full name"
                autoFocus={true}
                type="text"
                {...formik.getFieldProps('name')}
                className={clsx(
                  'form-control bg-transparent',
                  { 'is-invalid': formik.touched.name && formik.errors.name },
                  {
                    'is-valid': formik.touched.name && !formik.errors.name
                  }
                )}
              />
            </label>
            {formik.touched.name && formik.errors.name && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Email</label>
            <label className="input">
              <input
                placeholder="Enter your email"
                type="email"
                {...formik.getFieldProps('email')}
                className={clsx(
                  'form-control bg-transparent',
                  { 'is-invalid': formik.touched.email && formik.errors.email },
                  {
                    'is-valid': formik.touched.email && !formik.errors.email
                  }
                )}
              />
            </label>
            {formik.touched.email && formik.errors.email && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Address</label>
            <label className="input">
              <input
                placeholder="Enter your address"
                type="email"
                {...formik.getFieldProps('address')}
                className={clsx(
                  'form-control bg-transparent',
                  { 'is-invalid': formik.touched.address && formik.errors.address },
                  {
                    'is-valid': formik.touched.address && !formik.errors.address
                  }
                )}
              />
            </label>
            {formik.touched.address && formik.errors.address && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.address}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-success flex justify-center grow"
            disabled={loading || formik.isSubmitting}
          >
            {loading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}

            {loading ? 'Please wait...' : 'Submit'}
          </button>

          {formik.status && (
            <div className="text-danger text-xs mt-1" role="alert">
              {formik.status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export { UpdatePersonalInfo };
