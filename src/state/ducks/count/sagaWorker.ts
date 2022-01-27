import {call, put, takeEvery} from 'redux-saga/effects';
import types from './types';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* incrymentCounter() {
  try {
    console.log('rrtpo');
    yield put({type: types.ADD_COUNT});
  } catch (error) {
    console.log(error);
  }
}
