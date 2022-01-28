export const ADD_COUNT = 'ADD_COUNT';
export const DEC_COUNT = 'DEC_COUNT';

export default {
  ADD_COUNT,
  DEC_COUNT,
};

export const sagasType = {
  ADD_COUNT: 'addC',
  DEC_COUNT: 'decC',
};

export type CountState = {
  count: number;
};
