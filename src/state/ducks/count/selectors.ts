import { CountState } from './types';
import { createSelector } from 'reselect';

const getCount = (state: CountState) => state.count;

function selectCount() {
  return createSelector(getCount, (state: number) => state);
}

export default {
  selectCount,
};
