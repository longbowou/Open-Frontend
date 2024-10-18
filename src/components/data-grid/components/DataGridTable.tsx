import React, { ReactNode } from 'react';
import { useDataGrid } from '..';
import clsx from 'clsx';

export interface TDataGridTableProps {
  children: ReactNode;
}

const DataGridTable = ({ children }: TDataGridTableProps) => {
  const { props } = useDataGrid();

  const spacingClasses = {
    xs: 'table-xs',
    sm: 'table-sm',
    lg: 'table-lg'
  };

  return (
    <table
      className={clsx(
        'table',
        props.layout?.cellsBorder && 'table-border',
        props.layout?.tableSpacing && spacingClasses[props.layout.tableSpacing]
      )}
    >
      {children}
    </table>
  );
};

export { DataGridTable };
