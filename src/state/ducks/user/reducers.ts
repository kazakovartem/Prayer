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
    state.message = null;
    return state;
  })
  .addCase(actions.default.errorUser, (state, action) => {
    if (action.payload.message){
      let message = '';
      for (let i = 0;i<action.payload.message.length ;i++){
        if(action.payload.message[i] !== ':'){
          message = message + action.payload.message[i];
        } else {
          break;
        }
      }
      state.message = message;
    } else {
      state.message = action.payload.message;
    }
    
    return state;
  });
});

export default User;
