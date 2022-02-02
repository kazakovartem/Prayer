import { call, put, takeLatest } from 'redux-saga/effects';
import { sagasType } from '../types';
import types from '../types';
import { signIn, signUp } from '../../../../api/user';
import columnTypes from '../../columns/types';

export function* addUserInState({ payload }: any) {
  try {
    const { data } = yield call(signIn, payload.email, payload.password);
    console.log('data:', data);
    yield put({
      type: types.ADD_USER,
      payload: {
        name: data.name,
        email: data.email,
        token: data.token,
        id: data.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export function* addUserNewInState({ payload }: any) {
  try {
    const { data } = yield call(signUp, payload.email, payload.name, payload.password);
    const columns = data.columns
    yield put({
      type: columnTypes.ADD_COLUMNS,
      payload: {
        columns
      },
    });
    yield put({
      type: types.ADD_USER,
      payload: {
        name: data.name,
        email: data.email,
        token: data.token,
        id: data.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchSignIn() {
  yield takeLatest(sagasType.SIGN_IN, addUserInState);
}

export function* watchSignUp() {
  yield takeLatest(sagasType.SIGN_UP, addUserNewInState);
}

export default {
  watchSignUp,
  watchSignIn,
};
