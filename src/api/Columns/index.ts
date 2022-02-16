import { api } from '../httpClient';
import { COLUMNS } from '../types';

export async function getAllColumns() {
  return await api.get(COLUMNS).catch((error) => {
    return error;
  });
}

export async function getColumn(id: number) {
  return await api.get(`${COLUMNS}/${id}`).catch((error) => {
    return error;
  });
}

export async function createNewColumn(title: string, description: string) {
  return await api.post(COLUMNS, { title: title, description: description }).catch((error) => {
    return error;
  });
}

export async function updateColumn(id: number, title: string, description: string) {
  return await api
    .put(`${COLUMNS}/${id}`, { title: title, description: description })
    .catch((error) => {
      return error;
    });
}

export async function deleteColumn(id: number) {
  return await api.delete(`${COLUMNS}/${id}`).catch((error) => {
    return error;
  });
}

export default{
  getAllColumns,
  getColumn,
  createNewColumn,
  updateColumn,
  deleteColumn,
}
