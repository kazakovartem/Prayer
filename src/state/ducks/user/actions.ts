import { createAction } from '@reduxjs/toolkit';
import types, { sagasTypeUser } from './types';
import { IAddUser, IUserSignIn, IUserSignUp, IErrorUser } from './types';

const addUser = createAction<IAddUser>(types.ADD_USER);
const errorUser = createAction<IErrorUser>(types.ERROR_USER);

const signIn = createAction<IUserSignIn>(sagasTypeUser.SIGN_IN);
const signUp = createAction<IUserSignUp>(sagasTypeUser.SIGN_UP);
const deleteMessage = createAction<IErrorUser>(sagasTypeUser.DELL_MESSAGE);

export default {
  addUser,
  errorUser,
  signIn,
  signUp,
  deleteMessage,
};
