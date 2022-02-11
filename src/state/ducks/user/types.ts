export const ADD_USER = 'ADD_USER';

export const initialState: UserState = {
  user: {
    name: '',
    email: '',
    token: '',
    id: 0,
    logged: false,
  },
};

export default {
  ADD_USER,
};

export const sagasTypeUser = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
};

export interface IAddUser {
  name: string;
  email: string;
  token: string;
  id: number;
  logged: boolean;
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
