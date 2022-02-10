export const ADD_PRAYER = 'ADD_PRAYER';
export const ADD_PRAYERS = 'ADD_PRAYERS';
export const DELL_PRAYER_BY_ID = 'DELL_PRAYER_BY_ID';
export const DELL_ALL_PRAYERS = 'DELL_ALL_PRAYERS';
export const UPDATE_PRAYER_BY_ID = 'UPDATE_PRAYER_BY_ID';

export default {
  ADD_PRAYER,
  ADD_PRAYERS,
  DELL_PRAYER_BY_ID,
  DELL_ALL_PRAYERS,
  UPDATE_PRAYER_BY_ID,
};

export const sagasTypePrayers = {
  GET_PRAYERS: 'GET_PRAYERS',
  CREATE_PRAYER: 'CREATE_PRAYER',
  UPDATE_PRAYER_SAGA: 'UPDATE_PRAYER_SAGA',
  DELETE_PRAYER_SAGA: 'DELETE_PRAYER_SAGA',
};

export interface IAddPrayer {
  id: number;
  title: string;
  description: string | null;
  checked: boolean;
  columnId: number;
  commentsIds: number[] | null;
}

export interface IAddPrayers {
  prayers: {
    id: number;
    title: string;
    description: string | null;
    checked: boolean;
    columnId: number;
    commentsIds: number[] | null;
  }[];
}

export interface IDellPrayerById {
  id: number;
}

export interface IDellAllPrayers {}

export interface IUpdatePrayerById {
  id: number;
  title: string;
  description: string | null;
  checked: boolean;
}

export interface ICreatePrayer {
  id: number;
  title: string;
  description: string | null;
}

export type PrayersState = {
  prayers: {
    id: number;
    title: string;
    description: string | null;
    checked: boolean;
    columnId: number;
    commentsIds: number[] | null;
  }[];
};

export type PrayerState = {
  id: number;
  title: string;
  description: string | null;
  checked: boolean;
  columnId: number;
  commentsIds: number[] | null;
};

export interface IAddPrayerInState {
  type: string;
  payload: {
    id: number;
    title: string;
    description: string | null;
  };
}

export interface IUpdatePrayerInState {
  type: string;
  payload: {
    id: number;
    title: string;
    description: string | null;
    checked: boolean;
  };
}

export interface IDeletePrayerInState {
  type: string;
  payload: {
    id: number;
  };
}
