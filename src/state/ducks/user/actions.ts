import { createAction } from '@reduxjs/toolkit';
import types,{ sagasTypeUser } from './types';
import { IAddUser, IUserSignIn, IUserSignUp } from './types';

const addUser = createAction<IAddUser>(types.ADD_USER);

const signIn = createAction<IUserSignIn>(sagasTypeUser.SIGN_IN);
const signUp = createAction<IUserSignUp>(sagasTypeUser.SIGN_UP);

export default {
  addUser,
  signIn,
  signUp,
};
