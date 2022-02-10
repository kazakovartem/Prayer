import { api } from '..';
import { COMMENTS, PRAYERS } from '../types';

export async function getAllComments() {
  return await api.get(COMMENTS).catch((error) => {
    return error;
  });
}

export async function getComment(id: number) {
  return await api.get(`${COMMENTS}/${id}`).catch((error) => {
    return error;
  });
}

export async function createNewComment(id: number, body: string) {
  return await api
    .post(`${PRAYERS}/${id}${COMMENTS}`, { body: body })
    .catch((error) => {
      return error;
    });
}

export async function updateComment(id: number, body: string) {
  return await api
    .put(`${COMMENTS}/${id}`, { body: body })
    .catch((error) => {
      return error;
    });
}

export async function deleteComment(id: number) {
  return await api.delete(`${COMMENTS}/${id}`).catch((error) => {
    return error;
  });
}

export default{
  getAllComments,
  getComment,
  createNewComment,
  updateComment,
  deleteComment,
}
