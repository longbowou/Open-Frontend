import { KeenIcon } from '@/components';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { genericErrorMessage } from '@/utils/API.ts';
import { useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from '@/auth/providers/JWTProvider.tsx';
import { useUserContext } from '@/pages/useUserContext.ts';

const initialValues = {
  currentPassword: '',
  password: '',
  passwordConfirmation: ''
};

const signupSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Current password is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match")
});

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const { updatePassword } = useUserContext();
  const navigate = useNavigate();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowCurrentPassword(!showCurrentPassword);
  };

  const togglePassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, { setStatus, setSubmitting, setFieldError }) => {
      setLoading(true);
      try {
        if (!updatePassword) {
          throw new Error('JWTProvider is required for this form.');
        }

        const response = await updatePassword(values.currentPassword!, values.password!);

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
        <h3 className="card-title">Update Password</h3>
        <div className="flex gap-3">
          <Link to="/" className="btn btn-clear btn-primary">
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
            <label className="form-label text-gray-900">Current Password</label>
            <label className="input">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder="Enter Currrent Password"
                autoComplete="off"
                {...formik.getFieldProps('currentPassword')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.currentPassword && formik.errors.currentPassword
                  },
                  {
                    'is-valid': formik.touched.currentPassword && !formik.errors.currentPassword
                  }
                )}
              />
              <button className="btn btn-icon" onClick={toggleCurrentPassword}>
                <KeenIcon
                  icon="eye"
                  className={clsx('text-gray-500', { hidden: showCurrentPassword })}
                />
                <KeenIcon
                  icon="eye-slash"
                  className={clsx('text-gray-500', { hidden: !showCurrentPassword })}
                />
              </button>
            </label>
            {formik.touched.currentPassword && formik.errors.currentPassword && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.currentPassword}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Password</label>
            <label className="input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                autoComplete="off"
                {...formik.getFieldProps('password')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.password && formik.errors.password
                  },
                  {
                    'is-valid': formik.touched.password && !formik.errors.password
                  }
                )}
              />
              <button className="btn btn-icon" onClick={togglePassword}>
                <KeenIcon icon="eye" className={clsx('text-gray-500', { hidden: showPassword })} />
                <KeenIcon
                  icon="eye-slash"
                  className={clsx('text-gray-500', { hidden: !showPassword })}
                />
              </button>
            </label>
            {formik.touched.password && formik.errors.password && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.password}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Confirm Password</label>
            <label className="input">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-enter Password"
                autoComplete="off"
                {...formik.getFieldProps('passwordConfirmation')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid':
                      formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
                  },
                  {
                    'is-valid':
                      formik.touched.passwordConfirmation && !formik.errors.passwordConfirmation
                  }
                )}
              />
              <button className="btn btn-icon" onClick={toggleConfirmPassword}>
                <KeenIcon
                  icon="eye"
                  className={clsx('text-gray-500', { hidden: showConfirmPassword })}
                />
                <KeenIcon
                  icon="eye-slash"
                  className={clsx('text-gray-500', { hidden: !showConfirmPassword })}
                />
              </button>
            </label>
            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.passwordConfirmation}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary flex justify-center grow"
            disabled={loading || formik.isSubmitting}
          >
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

export { UpdatePassword };
