import { api } from '../index';
import { PRAYERS, COLUMNS } from '../types';

export async function getAllPrayers() {
  return await api.get(PRAYERS).catch((error) => {
    return error;
  });
}

export async function getPrayer(id: number,) {
  return await api.get(`${PRAYERS}/${id}`).catch((error) => {
    return error;
  });
}

export async function createPrayer(
  id: number,
  title: string,
  description: string | null,
) {
  return await api
    .post(`${COLUMNS}/${id}${PRAYERS}`, {
      title: title,
      description: description,
      checked: false,
    })
    .catch((error) => {
      return error;
    });
}

export async function updatePrayer(
  id: number,
  title: string,
  description: string | null,
  checked: boolean,
) {
  return await api
    .put(`${PRAYERS}/${id}`, {
      title: title,
      description: description,
      checked: checked,
    })
    .catch((error) => {
      return error;
    });
}

export async function deletePrayer(id: number,) {
  return await api.delete(`${PRAYERS}/${id}`).catch((error) => {
    return error;
  });
}

export default{
  getAllPrayers,
  getPrayer,
  createPrayer,
  updatePrayer,
  deletePrayer,
}
