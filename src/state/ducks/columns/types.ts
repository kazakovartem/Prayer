export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_COLUMNS = 'ADD_COLUMNS';
export const DELL_ALL_COLUMNS = 'DELL_ALL_COLUMNS';
export const DELL_COLUMN_BY_ID = 'DELL_COLUMN_BY_ID';
export const UPDATE_COLUMN_BY_ID = 'UPDATE_COLUMN_BY_ID';

export default {
  ADD_COLUMN,
  ADD_COLUMNS,
  DELL_ALL_COLUMNS,
  DELL_COLUMN_BY_ID,
  UPDATE_COLUMN_BY_ID,
};

export const sagasTypeColumns = {
  CREATE_COLUMN: 'CREATE_COLUMN',
  CREATE_COLUMNS: 'CREATE_COLUMNS',
  UPDATE_COLUMN: 'UPDATE_COLUMN',
  DELETE_COLUMN: 'DELETE_COLUMN',
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

export interface IDellAllColumns {}

export interface IDellColumnById {
  id: number;
}

export interface IUpdateColumns {
  title: string;
  description: string | null;
  id: number;
}

export interface ICreateColumnSaga {
  title: string;
  description: string;
}

export interface ICreateColumnsSaga {}

export interface IDeleteColumnSaga {
  id: number;
}

export interface IUpdateColumnsSaga {
  id: number;
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

export interface IAddColumnInState {
  type: string;
  payload: {
    description: any;
    id: any;
    title: any;
  };
}

export interface IUpdateColumnInState {
  type: string;
  payload: {
    description: any;
    id: any;
    title: any;
  };
}

export interface IDeleteColumnInState {
  type: string;
  payload: {
    id: any;
  };
}
