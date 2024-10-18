/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { DataGridInner, DataGridProvider } from '.';

export type TDataGridTableSpacing = 'xs' | 'sm' | 'lg';

export type TDataGridSelectedRowIds = Set<string>;

export type TDataGridRequestParams = {
  pageIndex: number;
  pageSize: number;
  sorting?: { id: string; desc?: boolean }[];
  filters?: { id: string; value: unknown }[];
};

export interface TDataGridProps<TData extends object> {
  columns: any[];
  data?: TData[];
  rowSelect?: boolean;
  onRowsSelectChange?: (selectedRowIds: TDataGridSelectedRowIds) => void;
  messages?: {
    loading?: ReactNode | string;
    empty?: ReactNode | string;
  };
  layout?: {
    cellsBorder?: boolean;
    tableSpacing?: TDataGridTableSpacing;
  };
  pagination?: {
    page?: number;
    size?: number;
    sizes?: number[];
    sizesInfo?: string;
    sizesLabel?: string;
    sizesDescription?: string;
    more?: boolean;
    moreLimit?: number;
    info?: string;
  };
  sorting?: { id: string; desc?: boolean }[];
  filters?: { id: string; value: unknown }[];
  serverSide?: boolean;
  onFetchData?: (params: any) => Promise<any>;
}

const DataGrid = <TData extends object>(props: TDataGridProps<TData>) => {
  return (
    <DataGridProvider {...props}>
      <DataGridInner />
    </DataGridProvider>
  );
};

export { DataGrid };
