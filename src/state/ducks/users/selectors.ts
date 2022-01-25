import { ICountState } from './types';
import { createSelector } from 'reselect';

const getUser = (state: ICountState) => state.user.count;

function getName() {
  return createSelector(getUser, (state: number) => state);
}

export default {
  getName,
};
