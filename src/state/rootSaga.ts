import { all } from 'redux-saga/effects';
import { sagaWatchers } from './ducks/ducks';

export default function* rootSaga() {
  yield all([
    sagaWatchers.user.watchSignIn(),
    sagaWatchers.user.watchSignUp(),
    sagaWatchers.columns.watchAddColumns(),
    sagaWatchers.columns.watchUpdateColumn(),
    sagaWatchers.columns.watchDeleteColumn(),
    sagaWatchers.prayers.watchAddALLPrayers(),
    sagaWatchers.prayers.watchDeletePrayers(),
    sagaWatchers.prayers.watchUpdatePrayer(),
    sagaWatchers.comments.watchAddComments(),
    sagaWatchers.comments.watchAddComment(),
    sagaWatchers.comments.watchDeleteComment(),
    sagaWatchers.comments.watchUpdateComment(),
  ]);
}
