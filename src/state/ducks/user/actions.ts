import { createAction } from '@reduxjs/toolkit';
import types,{ sagasType } from './types';
import { IAddUser, IUserSignIn, IUserSignUp } from './types';

const addUser = createAction<IAddUser>(types.ADD_USER);

const signIn = createAction<IUserSignIn>(sagasType.SIGN_IN);
const signUp = createAction<IUserSignUp>(sagasType.SIGN_UP);

export default {
  addUser,
  signIn,
  signUp,
};
