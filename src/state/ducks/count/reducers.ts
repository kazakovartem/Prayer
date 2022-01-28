import {createReducer, createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';
import {initialState} from './initialState';
import types from './types';

const Count = createReducer(initialState.count, builder => {
  builder
    .addCase(actions.default.addCount, (state) => {
      state++;
      return state;
    })
    .addCase(actions.default.decCount, (state) => {
      state--;
      return state;
    });
});

export default Count;
