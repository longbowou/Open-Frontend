import React, { ReactNode } from 'react';

export interface TDataGridTableBodyCellProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const DataGridTableBodyCell = ({ id, children, className }: TDataGridTableBodyCellProps) => {
  return (
    <td key={id} className={className && className}>
      {children}
    </td>
  );
};

export { DataGridTableBodyCell };
