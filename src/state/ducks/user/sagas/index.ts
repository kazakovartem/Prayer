import { call, put, takeLeading } from 'redux-saga/effects';
import { sagasTypeUser } from '../types';
import types from '../types';
import { routsDirect } from '../../../../api/routsDirect';
import columnTypes from '../../columns/types';
import { sagasTypeColumns } from '../../columns/types';
import { sagasTypePrayers } from '../../prayers/types';
import { sagasTypeComments } from '../../comments/types';
import { IAddUserInState } from '../types';

export function* addUserInState({ payload }: IAddUserInState) {
  try {
    const { data } = yield call(routsDirect.user.signIn, payload.email, payload.password);

    yield put({
      type: types.ADD_USER,
      payload: {
        name: data.name,
        email: data.email,
        token: data.token,
        id: data.id,
      },
    });
    yield put({type: sagasTypeColumns.CREATE_COLUMNS});
    yield put({type: sagasTypePrayers.GET_PRAYERS});
    yield put({type: sagasTypeComments.GET_COMMENTS});
  } catch (error) {
    console.log(error);
  }
}

export function* addUserNewInState({ payload }: IAddUserInState) {
  try {
    const { data } = yield call(
      routsDirect.user.signUp,
      payload.email,
      payload.name,
      payload.password,
    );

    const columns = data.columns;

    yield put({
      type: columnTypes.ADD_COLUMNS,
      payload: {
        columns,
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
  yield takeLeading(sagasTypeUser.SIGN_IN, addUserInState);
}

export function* watchSignUp() {
  yield takeLeading(sagasTypeUser.SIGN_UP, addUserNewInState);
}

export default {
  watchSignUp,
  watchSignIn,
};

