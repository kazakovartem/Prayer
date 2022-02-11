import { UserState } from './types';
import { createSelector } from 'reselect';

const select = (state: UserState) => state.user;

function selectUser() {
  return createSelector(select, (state) => state);
}

export default {
  selectUser,
};
