export const ADD_COUNT = 'ADD_COUNT';

export default {
  ADD_COUNT,
}

export interface INewBoard {
  count: number,
}

export type CountState = {
  count: number,
}