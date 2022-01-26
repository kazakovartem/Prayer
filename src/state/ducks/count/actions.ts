import { createAction } from '@reduxjs/toolkit';
import types from './types';

const addCount = createAction<void>(types.ADD_COUNT);
const decCount = createAction<void>(types.DEC_COUNT);

export default {
  addCount,
  decCount,
}