import { UserState } from './types';

export const initialState: UserState = {
  user: {
    name: '',
    email: '',
    token: '',
    id: 0,
    logged: false,
  },
};
