import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';
import {initialState} from './initialState';

const Boards = createReducer(initialState.user, builder => {
  builder
    .addCase(actions.default.addCount, (state, action) => {
      state.count++;
    });
});

export default Boards;
