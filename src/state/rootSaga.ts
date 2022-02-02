import { all } from 'redux-saga/effects';
import userWatcher from './ducks/user/sagas/index';

export default function* rootSaga() {
  yield all([
    console.log('saga ready'),
    userWatcher.watchSignIn(),
    userWatcher.watchSignUp(),
  ]);
}
