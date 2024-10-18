import { Container } from '@/components';
import { ReactNode } from 'react';

export interface IToolbarProps {
  children?: ReactNode;
}

const Toolbar = ({ children }: IToolbarProps) => {
  return (
    <div className="container-fixed">
      <div className="border-t border-gray-200 dark:border-coal-100"></div>
      <div className="flex items-center justify-between flex-wrap gap-2 la:gap-5 my-5">
        {children}
      </div>
      <div className="border-b border-gray-200 dark:border-coal-100 mb-5 lg:mb-7.5"></div>
    </div>
  );
};

export { Toolbar };
