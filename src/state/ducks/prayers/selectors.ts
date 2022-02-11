import { PrayersState, PrayerState } from './types';
import { createSelector } from 'reselect';

const select = (state: PrayersState) => state.prayers;

function selectAllPrayers() {
  return createSelector(select, (state) => state);
}

function selectPrayerById(id: number) {
  return createSelector(select, (state) =>
    state.find((columns: PrayerState) => columns.id === id),
  );
}

function selectPrayersByColumnId(id: number) {
  return createSelector(select, (state) =>
    state.filter((columns: PrayerState) => columns.columnId === id),
  );
}

export default {
  selectAllPrayers,
  selectPrayerById,
  selectPrayersByColumnId,
};
