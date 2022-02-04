import { call, put, takeLatest } from 'redux-saga/effects';
import { sagasTypePrayers } from '../types';
import types from '../types';
import { routsDirect } from '../../../../api/routsDirect';
import { IAddPrayerInState, IUpdatePrayerInState, IDeletePrayerInState } from '../types';

export function* addAllPrayersInState() {
  try {
    const { data } = yield call(routsDirect.prayers.getAllPrayers);
    yield put({
      type: types.DELL_ALL_PRAYERS,
    });
    for (let dd in data) {
      let prayer = data[dd];
      yield put({
        type: types.ADD_PRAYER,
        payload: {
          id: prayer.id,
          title: prayer.title,
          description: prayer.description,
          checked: prayer.checked,
          columnId: prayer.columnId,
          commentsIds: prayer.commentsIds,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* addPrayerInState({ payload }: IAddPrayerInState) {
  try {
    const { data } = yield call(
      routsDirect.prayers.createPrayer,
      payload.id,
      payload.title,
      payload.description,
    );
    yield put({
      type: types.ADD_PRAYER,
      payload: {
        id: data.id,
        title: data.title,
        description: data.description,
        checked: data.checked,
        columnId: data.columnId,
        commentsIds: data.commentsIds,
      },
    });
    
  } catch (error) {
    console.log(error);
  }
}

export function* updatePrayerInState({ payload }: IUpdatePrayerInState) {
  try {
    const { data } = yield call(
      routsDirect.prayers.updatePrayer,
      payload.id,
      payload.title,
      payload.description,
      payload.checked,
    );
    yield put({
      type: types.UPDATE_PRAYER_BY_ID,
      payload: {
        id: data.id,
        title: data.title,
        description: data.description,
        checked: data.checked,
        columnId: data.columnId,
        commentsIds: data.commentsIds,
      },
    });
    
  } catch (error) {
    console.log(error);
  }
}

export function* deletePrayerInState({ payload }: IDeletePrayerInState) {
  try {
    yield call(
      routsDirect.prayers.deletePrayer,
      payload.id,
    );
    yield put({
      type: types.ADD_PRAYER,
      payload: {
        id: payload.id,
      },
    });
    
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddALLPrayers() {
  yield takeLatest(sagasTypePrayers.GET_PRAYERS, addAllPrayersInState);
}

export function* watchAddPrayers() {
  yield takeLatest(sagasTypePrayers.CREATE_PRAYER, addPrayerInState);
}

export function* watchUpdatePrayer() {
  yield takeLatest(sagasTypePrayers.UPDATE_PRAYER_SAGA, updatePrayerInState);
}

export function* watchDeletePrayers() {
  yield takeLatest(sagasTypePrayers.DELETE_PRAYER_SAGA, deletePrayerInState);
}

export default {
  watchAddALLPrayers,
  watchAddPrayers,
  watchUpdatePrayer,
  watchDeletePrayers,
};
