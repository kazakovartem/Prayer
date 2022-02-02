import { UserState } from './types';
import { createSelector } from 'reselect';

const getUser = (state: UserState) => state.user;

function selectUser() {
  return createSelector(getUser, (state) => state);
}

export default {
  selectUser,
};
