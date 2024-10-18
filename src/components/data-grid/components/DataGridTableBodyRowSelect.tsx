import React from 'react';
import { useDataGrid } from '..';

export interface TDataGridTableBodyRowSelectProps {
  id: string;
}

const DataGridTableBodyRowSelect = ({ id }: TDataGridTableBodyRowSelectProps) => {
  const { selectedRowIds, toggleRowSelection } = useDataGrid();
  const isSelected = selectedRowIds.has(id);

  return (
    <td>
      <input
        type="checkbox"
        className="checkbox checkbox-sm"
        checked={isSelected}
        onChange={() => toggleRowSelection(id)}
      />
    </td>
  );
};

export { DataGridTableBodyRowSelect };
