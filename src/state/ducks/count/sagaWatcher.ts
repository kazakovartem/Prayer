import {takeLatest} from 'redux-saga/effects';
import {incrymentCounter} from './sagaWorker';
import {sagasType} from './types';

export function* watchIncrymentCounter() {
  yield takeLatest(sagasType.ADD_COUNT, incrymentCounter);
}