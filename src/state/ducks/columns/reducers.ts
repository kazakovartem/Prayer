import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialState';
import { ColumnState } from './types';

const Columns = createReducer(initialState.columns, (builder) => {
  builder
    .addCase(actions.default.addColumn, (state, action) => {
      state.push(action.payload);
      return state;
    })
    .addCase(actions.default.addColumns, (state, action) => {
      action.payload.columns.map((column:ColumnState) => {
        state.push(column);
        
      })
      return state;
    })
    .addCase(actions.default.dellAllColumns, (state) => {
      return [...state.filter((column) => column.id == null)];
    })
    .addCase(actions.default.dellColumnById, (state, action) => {
      return [...state.filter((column) => column.id == action.payload.id)];
    })
    .addCase(actions.default.updateColumnById, (state, action) => {
      const change = state.find((column) => column.id === action.payload.id);
      if (change) {
        change.description = action.payload.description;
        change.title = action.payload.title;
      }
      return state;
    });
});

export default Columns;
