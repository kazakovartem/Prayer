import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../state/store';
import { API_LINK } from './types';

const headers = {
  'Content-type': 'application/json',
  'accept': '*/*',
};
const axiosCfg: AxiosRequestConfig = {
  baseURL: API_LINK,
  headers: headers,
};
export const api = axios.create(axiosCfg);

api.interceptors.request.use((axiosCfg) => {
  try {
    const token = store.getState().user.token;
    axiosCfg.headers!.Authorization = `Bearer ${token}`;
    return axiosCfg;
  } catch {
    axiosCfg.headers!.Authorization = `Bearer `;
    return axiosCfg;
  }
});
