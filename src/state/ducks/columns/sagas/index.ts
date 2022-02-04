import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { sagasTypeColumns } from '../types';
import types from '../types';
import { routsDirect } from '../../../../api/routsDirect';
import { IAddColumnInState, IUpdateColumnInState, IDeleteColumnInState } from '../types';

export function* addColumnsInState() {
  try {
    const { data } = yield call(routsDirect.columns.getAllColumns);
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
    const { data } = yield call(
      routsDirect.columns.createNewColumn,
      payload.description,
      payload.title,
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
    const { data } = yield call(
      routsDirect.columns.updateColumn,
      payload.id,
      payload.description,
      payload.title,
    );
    yield put({
      type: types.UPDATE_COLUMN_BY_ID,
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

export function* deleteColumnInState({ payload }: IDeleteColumnInState) {
  try {
    yield call(
      routsDirect.columns.deleteColumn,
      payload.id,
    );
    yield put({
      type: types.DELL_COLUMN_BY_ID,
      payload: {
        id: payload.id,
      },
    });
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
