import { PrayersState, PrayerState } from './types';
import { createSelector } from 'reselect';

const getPrayers = (state: PrayersState) => state.prayers;

function selectAllPrayers() {
  return createSelector(getPrayers, (state) => state);
}

function selectPrayerById(id: number) {
  return createSelector(getPrayers, (state) =>
    state.find((columns: PrayerState) => columns.id === id),
  );
}

function selectPrayersByColumnId(id: number) {
  return createSelector(getPrayers, (state) =>
    state.filter((columns: PrayerState) => columns.columnId === id),
  );
}

export default {
  selectAllPrayers,
  selectPrayerById,
  selectPrayersByColumnId,
};
