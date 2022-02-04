import { createAction } from '@reduxjs/toolkit';
import types, { sagasTypeComments } from './types';
import {
  IAddComment,
  ICreateComment,
  IAddComments,
  IDeleteAllComments,
  IDeleteCommentById,
  IUpdateCommentById,
} from './types';

const addComment = createAction<IAddComment>(types.ADD_COMMENT);
const addComments = createAction<IAddComments>(types.ADD_COMMENTS);
const deleteAllComments = createAction<IDeleteAllComments>(types.DELETE_ALL_COMMENTS);
const deleteCommentById = createAction<IDeleteCommentById>(types.DELETE_COMMENT_BY_ID);
const updateCommentById = createAction<IUpdateCommentById>(types.UPDATE_COMMENT_BY_ID);

const createCommentsSaga = createAction<ICreateComment>(sagasTypeComments.GET_COMMENTS);
const createCommentSaga = createAction<ICreateComment>(sagasTypeComments.CREATE_COMMENT);
const deleteCommentSaga = createAction<ICreateComment>(sagasTypeComments.DELETE_COMMENT);
const updateCommentSaga = createAction<ICreateComment>(sagasTypeComments.UPDATE_COMMENT);

export default {
  addComment,
  addComments,
  deleteAllComments,
  deleteCommentById,
  updateCommentById,
  createCommentsSaga,
  createCommentSaga,
  deleteCommentSaga,
  updateCommentSaga,
};
