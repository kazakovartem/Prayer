import { ICountState } from './types';
import { createSelector } from 'reselect';

const getUser = (state: ICountState) => state.user;

function getName() {
  return createSelector(getUser, (state) => state.count);
}

export default {
  getName,
};
