import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface TDataGridTableFootProps {
  className?: string;
  children: ReactNode;
}

const DataGridTableFoot = ({ children, className }: TDataGridTableFootProps) => {
  return <tfoot className={clsx(className && className)}>{children}</tfoot>;
};

export { DataGridTableFoot };
