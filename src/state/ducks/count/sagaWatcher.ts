import {takeLatest, take} from 'redux-saga/effects';
import {incrymentCounter} from './sagaWorker';
import types from './types';

export function* watchIncrymentCounter() {
  //yield takeLatest(types.ADD_COUNT, incrymentCounter);
  
  while(true){
    console.log('3443');
    yield take(types.ADD_COUNT);
    yield incrymentCounter();
  }
}
