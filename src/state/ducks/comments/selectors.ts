import { CommentsState, CommentState } from './types';
import { createSelector } from 'reselect';

const getComments = (state: CommentsState) => state.comments;

function selectAllComments() {
  return createSelector(getComments, (state) => state);
}

function selectCommentById(id: number) {
  return createSelector(getComments, (state) =>
    state.find((columns: CommentState) => columns.id === id),
  );
}

function selectCommentsByPrayerId(id: number) {
  return createSelector(getComments, (state) =>
    state.filter((columns: CommentState) => columns.prayerId === id),
  );
}

export default {
  selectAllComments,
  selectCommentById,
  selectCommentsByPrayerId,
};
