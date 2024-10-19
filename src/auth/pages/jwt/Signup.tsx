import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuthContext } from '@/auth';
import { KeenIcon } from '@/components';
import { useLayout } from '@/providers';
import { CrudAvatarUpload } from '@/partials/crud';
import { IImageInputFile } from '@/components/image-input';
import { ErrorMessage } from '@/auth/providers/JWTProvider.tsx';
import { genericErrorMessage, uploadImageToS3 } from '@/utils/API.ts';

const initialValues = {
  name: '',
  address: '',
  image: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const signupSchema = Yup.object().shape({
  image: Yup.string().required('Image is required'),
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
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

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { currentLayout } = useLayout();

  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, { setStatus, setSubmitting, setFieldError }) => {
      setLoading(true);
      try {
        if (!register) {
          throw new Error('JWTProvider is required for this form.');
        }

        const fileName = encodeURIComponent(image!.file!.name);
        const contentType = image!.file!.type;

        const result = await register(
          values.name,
          values.email,
          values.address,
          values.password,
          values.passwordConfirmation,
          fileName,
          contentType
        );

        const errors: Array<ErrorMessage> = result.errors;
        if (errors && errors.length > 0) {
          for (const error of errors) {
            setFieldError(error.field, error.message);
          }
          setLoading(false);
        } else {
          uploadImageToS3(result.uploadURL, image!.file!)
            .then(() => {
              navigate(from, { replace: true });
            })
            .catch(() => {
              setFieldError('name', genericErrorMessage);
              setLoading(false);
            });
        }
      } catch (error) {
        console.error(error);
        setStatus(genericErrorMessage);
        setSubmitting(false);
        setLoading(false);
      }
    },
    validate: async (values) => {
      if (image !== null) {
        values.image = 'uploaded';
      } else {
        values.image = '';
      }
    }
  });

  const togglePassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [image, setImage] = useState<IImageInputFile | null>(null);

  return (
    <div className="card max-w-[470px] w-full">
      <form
        className="card-body flex flex-col gap-5 p-10"
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-semibold text-gray-900 leading-none mb-2.5">Sign up</h3>
          <div className="flex items-center justify-center font-medium">
            <span className="text-2sm text-gray-600 me-1.5">Already have an Account ?</span>
            <Link
              to={currentLayout?.name === 'auth-branded' ? '/auth/login' : '/auth/classic/login'}
              className="text-2sm link"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="text-center">
          <CrudAvatarUpload
            size={'size-40'}
            inputProps={{ name: 'image' }}
            onChange={(file) => {
              setImage(file);
            }}
          />
          <div>
            {formik.touched.image && formik.errors.image && (
              <span role="alert" className="text-danger text-xs mt-1">
                {formik.errors.image}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Full Name</label>
          <label className="input">
            <input
              placeholder="Enter yout full name"
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
          {loading ? 'Please wait...' : 'Sign UP'}
        </button>

        {formik.status && (
          <div className="text-danger text-xs mt-1" role="alert">
            {formik.status}
          </div>
        )}
      </form>
    </div>
  );
};

export { Signup };
