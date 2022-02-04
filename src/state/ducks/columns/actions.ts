import { createAction } from '@reduxjs/toolkit';
import types, { sagasTypeColumns } from './types';
import {
  IAddColumn,
  ICreateColumnSaga,
  IAddColumns,
  ICreateColumnsSaga,
  IDellColumnById,
  IDellAllColumns,
  IUpdateColumns,
  IDeleteColumnSaga,
  IUpdateColumnsSaga,
} from './types';

const addColumn = createAction<IAddColumn>(types.ADD_COLUMN);
const addColumns = createAction<IAddColumns>(types.ADD_COLUMNS);
const dellAllColumns = createAction<IDellAllColumns>(types.DELL_ALL_COLUMNS);
const dellColumnById = createAction<IDellColumnById>(types.DELL_COLUMN_BY_ID);
const updateColumnById = createAction<IUpdateColumns>(types.UPDATE_COLUMN_BY_ID);

const createColumnSaga = createAction<ICreateColumnSaga>(sagasTypeColumns.CREATE_COLUMN);
const createColumnsSaga = createAction<ICreateColumnsSaga>(sagasTypeColumns.CREATE_COLUMNS);
const deleteColumnSaga = createAction<IDeleteColumnSaga>(sagasTypeColumns.CREATE_COLUMN);
const updateColumnSaga = createAction<IUpdateColumnsSaga>(sagasTypeColumns.CREATE_COLUMN);

export default {
  addColumn,
  addColumns,
  dellAllColumns,
  dellColumnById,
  updateColumnById,
  createColumnsSaga,
  createColumnSaga,
  deleteColumnSaga,
  updateColumnSaga,
};
