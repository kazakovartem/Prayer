export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const DELETE_ALL_COMMENTS = 'DELETE_ALL_COMMENTS';
export const DELETE_COMMENT_BY_ID = 'DELETE_COMMENT_BY_ID';
export const UPDATE_COMMENT_BY_ID = 'UPDATE_COMMENT_BY_ID';

export default {
  ADD_COMMENT,
  ADD_COMMENTS,
  DELETE_ALL_COMMENTS,
  DELETE_COMMENT_BY_ID,
  UPDATE_COMMENT_BY_ID,
};

export const sagasTypeComments = {
  CREATE_COMMENT: 'CREATE_COMMENT',
  GET_COMMENTS: 'GET_COMMENTS',
  DELETE_COMMENT: 'DELETE_COMMENT',
  UPDATE_COMMENT: 'DELETE_COMMENT',
};

export interface IAddComment {
  id: number;
  body: string | null;
  created: string;
  prayerId: number | null;
}

export interface IAddComments {
  columns: {
    id: number;
    body: string | null;
    created: string;
    prayerId: number | null;
  }[];
}

export interface IDeleteAllComments{}

export interface IDeleteCommentById{
  id: number;
}

export interface IUpdateCommentById{
  id: number;
  body: string;
}

export interface ICreateComment {
  id: number;
  body: string;
}

export type CommentsState = {
  comments: {
    id: number;
    body: string | null;
    created: string;
    prayerId: number | null;
  }[];
};

export type CommentState = {
  id: number;
  body: string | null;
  created: string;
  prayerId: number | null;
};

export interface IAddCommentInState{
  type: string;
  payload: {
    id: number;
    body: any;
  };
}

export interface IDeleteCommentInState{
  type: string;
  payload: {
    id: number;
  };
}

export interface IUpdateCommentInState{
  type: string;
  payload: {
    id: number;
    body: string;
  };
}
