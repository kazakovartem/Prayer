import { ColumnsState, ColumnState } from './types';
import { createSelector } from 'reselect';

const getColumns = (state: ColumnsState) => state.columns;

function selectAllColumns() {
  return createSelector(getColumns, (state) => state);
}

function selectColumnsById(id: number) {
  return createSelector(getColumns, (state) =>
    state.find((columns: ColumnState) => columns.id === id),
  );
}

export default {
  selectAllColumns,
  selectColumnsById,
};
