import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components/keenicons';
import { toAbsoluteUrl } from '@/utils';
import { MegaMenu } from '../mega-menu';
import { useDemo7Layout } from '@/layouts/demo7/Demo7LayoutProvider';

const HeaderLogo = () => {
  const { setMobileMegaMenuOpen } = useDemo7Layout();

  const handleMobileMegaMenuOpen = () => {
    setMobileMegaMenuOpen(true);
  };

  return (
    <div className="flex items-stretch gap-10 grow">
      <div className="flex items-center gap-2.5">
        <Link to="/" className="shrink-0">
          <img
            src={toAbsoluteUrl('/media/app/logo.png')}
            className="dark:hidden min-h-[34px] max-h-[50px]"
            alt="logo"
          />
          <img
            src={toAbsoluteUrl('/media/app/logo-dark.png')}
            className="hidden dark:inline-block min-h-[34px] max-h-[50px]"
            alt="logo"
          />
        </Link>
        <button
          className="lg:hidden btn btn-icon btn-light btn-clear btn-sm"
          onClick={handleMobileMegaMenuOpen}
        >
          <KeenIcon icon="burger-menu-2" />
        </button>
      </div>

      <MegaMenu />
    </div>
  );
};

export { HeaderLogo };
