import {all} from 'redux-saga/effects';
import {watchIncrymentCounter} from './ducks/count/sagaWatcher';

export default function* rootSaga() {
  yield all([console.log('saga redy'), watchIncrymentCounter()]);
}
