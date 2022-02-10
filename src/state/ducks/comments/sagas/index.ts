import { call, put, takeLatest } from 'redux-saga/effects';
import { sagasTypeComments } from '../types';
import types from '../types';
import { routsDirect } from '../../../../api/routsDirect';
import { IAddCommentInState, IDeleteCommentInState, IUpdateCommentInState } from '../types';

export function* addCommentsInState() {
  try {
    const { data } = yield call(routsDirect.comments.getAllComments);
    yield put({
      type: types.DELETE_ALL_COMMENTS,
    });
    for (let dd in data) {
      let comment = data[dd];
      yield put({
        type: types.ADD_COMMENT,
        payload: {
          id: comment.id,
          body: comment.body,
          created: comment.created,
          prayerId: comment.prayerId,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* addCommentInState({ payload }: IAddCommentInState) {
  try {
    const { data } = yield call(
      routsDirect.comments.createNewComment,
      payload.id,
      payload.body,
    );

    yield put({
      type: types.ADD_COMMENT,
      payload: {
        id: data.id,
        body: data.body,
        created: data.created,
        prayerId: data.prayerId,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export function* deleteCommentInState({ payload }: IDeleteCommentInState) {
  try {
    yield put({
      type: types.DELETE_COMMENT_BY_ID,
      payload: {
        id: payload.id,
      },
    });

    yield call(routsDirect.comments.deleteComment, payload.id);

  } catch (error) {
    console.log(error);
  }
}

export function* updateCommentInState({ payload }: IUpdateCommentInState) {
  try {
    console.log('payload',payload);
    const { data } = yield call(routsDirect.comments.updateComment, payload.id ,payload.body );
    console.log('data',data);
    yield put({
      type: types.UPDATE_COMMENT_BY_ID,
      payload: {
        id: data.id,
        body: data.body,
      },
    });

  } catch (error) {
    console.log(error);
  }
}

export function* watchAddComments() {
  yield takeLatest(sagasTypeComments.GET_COMMENTS, addCommentsInState);
}

export function* watchAddComment() {
  yield takeLatest(sagasTypeComments.CREATE_COMMENT, addCommentInState);
}

export function* watchDeleteComment() {
  yield takeLatest(sagasTypeComments.DELETE_COMMENT, deleteCommentInState);
}

export function* watchUpdateComment() {
  yield takeLatest(sagasTypeComments.UPDATE_COMMENT, updateCommentInState);
}

export default {
  watchAddComments,
  watchAddComment,
  watchDeleteComment,
  watchUpdateComment,
};
