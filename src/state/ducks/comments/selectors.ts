import { CommentsState, CommentState } from './types';
import { createSelector } from 'reselect';

const select = (state: CommentsState) => state.comments;

function selectAllComments() {
  return createSelector(select, (state) => state);
}

function selectCommentById(id: number) {
  return createSelector(select, (state) =>
    state.find((columns: CommentState) => columns.id === id),
  );
}

function selectCommentsByPrayerId(id: number) {
  return createSelector(select, (state) =>
    state.filter((columns: CommentState) => columns.prayerId === id),
  );
}

export default {
  selectAllComments,
  selectCommentById,
  selectCommentsByPrayerId,
};
