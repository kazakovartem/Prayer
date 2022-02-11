import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './types';
import { CommentState } from './types';

const Comments = createReducer(initialState.comments, (builder) => {
  builder
    .addCase(actions.default.addComment, (state, action) => {
      state.push(action.payload);
      return state;
    })
    .addCase(actions.default.addComments, (state, action) => {
      action.payload.columns.map((column: CommentState) => {
        state.push(column);
      });
      return state;
    })
    .addCase(actions.default.deleteAllComments, (state) => {
      return [...state.filter((comment) => comment.id == null)];
    })
    .addCase(actions.default.deleteCommentById, (state, action) => {
      return [...state.filter((comment) => comment.id !== action.payload.id)];
    })
    .addCase(actions.default.updateCommentById, (state, action) => {
      const change = state.find((comment) => comment.id === action.payload.id);
      if (change) {
        change.body = action.payload.body;
      }
      return state;
    });
});

export default Comments;
