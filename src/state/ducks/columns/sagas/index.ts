import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { sagasTypeColumns } from '../types';
import types from '../types';
import api from '../../../../api';
import { IAddColumnInState, IUpdateColumnInState, IDeleteColumnInState } from '../types';

export function* addColumnsInState() {
  try {
    const { data } = yield call(api.columns.getAllColumns);
    yield put({
      type: types.DELL_ALL_COLUMNS,
    });
    for (let dd in data) {
      let column = data[dd];
      yield put({
        type: types.ADD_COLUMN,
        payload: {
          description: column.description,
          id: column.id,
          title: column.title,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* addColumnInState({ payload }: IAddColumnInState) {
  try {
    console.log(payload);
    const { data } = yield call(
      api.columns.createNewColumn,
      payload.title,
      payload.description,
    );
    yield put({
      type: types.ADD_COLUMN,
      payload: {
        description: data.description,
        id: data.id,
        title: data.title,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export function* updateColumnInState({ payload }: IUpdateColumnInState) {
  try {
    yield put({
      type: types.UPDATE_COLUMN_BY_ID,
      payload: {
        description: payload.description,
        id: payload.id,
        title: payload.title,
      },
    });
    yield call(api.columns.updateColumn, payload.id, payload.title, payload.description);
  } catch (error) {
    console.log(error);
  }
}

export function* deleteColumnInState({ payload }: IDeleteColumnInState) {
  try {
    yield put({
      type: types.DELL_COLUMN_BY_ID,
      payload: {
        id: payload.id,
      },
    });
    yield call(api.columns.deleteColumn, payload.id);
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddColumns() {
  yield takeLeading(sagasTypeColumns.CREATE_COLUMNS, addColumnsInState);
}

export function* watchAddColumn() {
  yield takeLatest(sagasTypeColumns.CREATE_COLUMN, addColumnInState);
}

export function* watchUpdateColumn() {
  yield takeLatest(sagasTypeColumns.UPDATE_COLUMN, updateColumnInState);
}

export function* watchDeleteColumn() {
  yield takeLatest(sagasTypeColumns.DELETE_COLUMN, deleteColumnInState);
}

export default {
  watchAddColumns,
  watchAddColumn,
  watchUpdateColumn,
  watchDeleteColumn,
};
