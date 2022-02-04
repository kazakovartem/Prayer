import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialState';
import { PrayerState } from './types';

const Columns = createReducer(initialState.prayers, (builder) => {
  builder
    .addCase(actions.default.addPrayer, (state, action) => {
      state.push(action.payload);
      return state;
    })
    .addCase(actions.default.addPrayers, (state, action) => {
      action.payload.prayers.map((prayer:PrayerState) => {
        state.push(prayer);
      })
      return state;
    })
    .addCase(actions.default.dellPrayerById , (state, action) => {
      return [...state.filter((prayer) => prayer.id == action.payload.id)];
    })
    .addCase(actions.default.dellAllPrayers , (state) => {
      return [...state.filter((prayer) => prayer.id == null)];
    })
    .addCase(actions.default.updatePrayerById, (state, action) => {
      const change = state.find((prayer) => prayer.id === action.payload.id);
      if (change) {
        change.description = action.payload.description;
        change.title = action.payload.title;
        change.checked = action.payload.checked;
      }
      return state;
    });
});

export default Columns;
