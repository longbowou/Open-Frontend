import React, { ReactNode } from 'react';
import { DataGridTableBodyRowSelect, useDataGrid } from '..';

export interface TDataGridTableBodyRowProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const DataGridTableBodyRow = ({ id, children, className }: TDataGridTableBodyRowProps) => {
  const { props } = useDataGrid();

  return (
    <tr className={className && className}>
      {props.rowSelect && <DataGridTableBodyRowSelect id={id} />}
      {children}
    </tr>
  );
};

export { DataGridTableBodyRow };
