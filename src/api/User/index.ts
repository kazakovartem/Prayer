import { api } from '../httpClient';
import { SIGN_IN, SIGN_UP } from '../types';

export async function signIn(email: string, password: string) {
  return await api
    .post(SIGN_IN, {
      email: email,
      password: password,
    })
    .catch((error) => {
      return error;
    });
}

export async function signUp(email: string, name: string, password: string) {
  return await api
    .post(SIGN_UP, {
      email: email,
      name: name,
      password: password,
    })
    .catch((error) => {
      return error;
    });
}

export default{
  signIn,
  signUp,
}
