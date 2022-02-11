import { ColumnsState, ColumnState } from './types';
import { createSelector } from 'reselect';

const select = (state: ColumnsState) => state.columns;

function selectAllColumns() {
  return createSelector(select, (state) => state);
}

function selectColumnsById(id: number) {
  return createSelector(select, (state) =>
    state.find((columns: ColumnState) => columns.id === id),
  );
}

export default {
  selectAllColumns,
  selectColumnsById,
};
