import { toAbsoluteUrl } from '@/utils';

const ScreenLoader = () => {
  return (
    <div className="flex flex-col animate-pulse items-center gap-2 justify-center fixed inset-0 z-50 bg-light transition-opacity duration-700 ease-in-out">
      <img className="h-[100px] max-w-none" src={toAbsoluteUrl('/media/app/logo.png')} alt="logo" />
      <div className="text-gray-500 font-medium text-sm">
        {/*<span>*/}
        {/*  <svg*/}
        {/*    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"*/}
        {/*    xmlns="http://www.w3.org/2000/svg"*/}
        {/*    fill="none"*/}
        {/*    viewBox="0 0 24 24"*/}
        {/*  >*/}
        {/*    <circle*/}
        {/*      className="opacity-25"*/}
        {/*      cx="12"*/}
        {/*      cy="12"*/}
        {/*      r="10"*/}
        {/*      stroke="#17C653"*/}
        {/*      stroke-width="4"*/}
        {/*    ></circle>*/}
        {/*    <path*/}
        {/*      className="opacity-75"*/}
        {/*      fill="#17C653"*/}
        {/*      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"*/}
        {/*    ></path>*/}
        {/*  </svg>*/}
        {/*Loading...*/}
        {/*</span>*/}
      </div>
    </div>
  );
};

export { ScreenLoader };
