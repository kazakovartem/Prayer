import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialState';
import { ColumnState } from './types';

const Columns = createReducer(initialState.columns, (builder) => {
  builder
    .addCase(actions.default.addColumn, (state, action) => {
      state[action.payload.id].description = action.payload.description;
      state[action.payload.id].title = action.payload.title;
      state[action.payload.id].id = action.payload.id;
      return state;
    })
    .addCase(actions.default.addColumns, (state, action) => {
      action.payload.columns.map((column:ColumnState) => {
        state.push(column);
      })
      return state;
    });
});

export default Columns;
