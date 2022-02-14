export const ADD_USER = 'ADD_USER';
export const ERROR_USER = 'ERROR_USER';

export const initialState: UserState = {
  user: {
    name: '',
    email: '',
    token: '',
    id: 0,
    logged: false,
    message: null
  },
};

export default {
  ADD_USER,
  ERROR_USER,
};

export const sagasTypeUser = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  DELL_MESSAGE: 'DELL_MESSAGE',
};

export interface IAddUser {
  name: string;
  email: string;
  token: string;
  id: number;
  logged: boolean;
}

export interface IErrorUser {
  message: string | null;
}

export interface IUserSignUp {
  name: string;
  email: string;
  password: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export type UserState = {
  user: {
    name: string;
    email: string;
    token: string;
    id: number;
    logged: boolean;
    message: null | string;
  };
};

export interface IAddUserInState {
  type: string;
  payload: {
    password: string;
    email: string;
    name: string;
  };
}

export interface IErrorUserSaga {
  type: string;
  payload: {
    message: string | null;
  };
}
