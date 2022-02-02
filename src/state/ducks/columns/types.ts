export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_COLUMNS = 'ADD_COLUMNS';

export default {
  ADD_COLUMN,
  ADD_COLUMNS,
};

export const sagasType = {
  CREATE_COLUMN: 'CREATE_COLUMN',
  CREATE_COLUMNS: 'CREATE_COLUMNS',
};

export interface IAddColumn {
  title: string;
  description: string | null;
  id: number;
}

export interface IAddColumns {
  columns: {
    title: string;
    description: string | null;
    id: number;
  }[];
}

export interface ICreateColumn {
  title: string;
  description: string;
}

export type ColumnsState = {
  columns: {
    title: string;
    description: string | null;
    id: number;
  }[];
};

export type ColumnState = {
  title: string;
  description: string | null;
  id: number;
};
