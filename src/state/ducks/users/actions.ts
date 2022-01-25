import { createAction } from '@reduxjs/toolkit';
import types from './types';
import {INewBoard} from './types'

const addCount = createAction<INewBoard>(types.ADD_COUNT);

export default {
  addCount,
}