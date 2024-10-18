import React, { ReactNode } from 'react';

export interface TDataGridTableBodyeProps {
  children: ReactNode;
}

const DataGridTableBody = ({ children }: TDataGridTableBodyeProps) => {
  return <tbody>{children}</tbody>;
};

export { DataGridTableBody };
