import { createAction } from '@reduxjs/toolkit';
import types, { sagasType } from './types';
import { IAddColumn, ICreateColumn, IAddColumns } from './types';

const addColumn = createAction<IAddColumn>(types.ADD_COLUMN);
const addColumns = createAction<IAddColumns>(types.ADD_COLUMNS);

const createColumn = createAction<ICreateColumn>(sagasType.CREATE_COLUMN);

export default {
  addColumn,
  addColumns,
  createColumn,
};
