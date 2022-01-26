import { createAction } from '@reduxjs/toolkit';
import types from './types';

const addCount = createAction<void>(types.ADD_COUNT);

export default {
  addCount,
}