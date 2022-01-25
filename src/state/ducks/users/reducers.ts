import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';
import {initialState} from './initialState';

const Users = createReducer(initialState.user, builder => {
  builder
    .addCase(actions.default.addCount, (state) => {
      state.count++;
    });
});

export default Users;
