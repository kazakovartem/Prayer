import { createAction } from '@reduxjs/toolkit';
import types, { sagasTypePrayers } from './types';
import {
  IAddPrayer,
  ICreatePrayer,
  IAddPrayers,
  IDellPrayerById,
  IDellAllPrayers,
  IUpdatePrayerById,
} from './types';

const addPrayer = createAction<IAddPrayer>(types.ADD_PRAYER);
const addPrayers = createAction<IAddPrayers>(types.ADD_PRAYERS);
const dellPrayerById = createAction<IDellPrayerById>(types.DELL_PRAYER_BY_ID);
const dellAllPrayers = createAction<IDellAllPrayers>(types.DELL_ALL_PRAYERS);
const updatePrayerById = createAction<IUpdatePrayerById>(types.UPDATE_PRAYER_BY_ID);

const createPrayer = createAction<ICreatePrayer>(sagasTypePrayers.CREATE_PRAYER);
const deletePrayerSaga = createAction<IDellPrayerById>(sagasTypePrayers.DELETE_PRAYER_SAGA);
const updatePrayerSaga = createAction<IUpdatePrayerById>(sagasTypePrayers.UPDATE_PRAYER_SAGA);

export default {
  addPrayer,
  addPrayers,
  createPrayer,
  dellPrayerById,
  dellAllPrayers,
  updatePrayerById,
  deletePrayerSaga,
  updatePrayerSaga,
};
