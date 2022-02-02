import { call, put, takeLatest } from 'redux-saga/effects';
import { sagasType } from '../types';
import types from '../types';
import { signIn } from '../../../../api/user';

export function* addColumnsInState({
  payload,
}: any) {
  try {
    const { data } = yield call(signIn , payload.email, payload.password,);
    console.log('data:',data);
    yield put({
      type: types.ADD_COLUMNS,
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
export function* watchAddColumns() {
  yield takeLatest(sagasType.CREATE_COLUMNS, addColumnsInState);
}

export default {
  watchAddColumns,
};
