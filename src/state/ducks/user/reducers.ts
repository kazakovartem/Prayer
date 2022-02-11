import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './types';

const User = createReducer(initialState.user, (builder) => {
  builder.addCase(actions.default.addUser, (state, action) => {
    state.email = action.payload.email;
    state.name = action.payload.name;
    state.logged = true;
    state.token = action.payload.token;
    state.id = action.payload.id;
    return state;
  });
});

export default User;
