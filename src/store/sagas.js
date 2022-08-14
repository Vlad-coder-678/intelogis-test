// vendor
import { call, put, takeEvery } from "redux-saga/effects";

// locale
// classes
import MapBoxApi from "../class/api";
// store
import sagaActionTypes from "./sagaActionTypes";
import { setCurrentPolylineCoordinates, setCurrentPolylineDefaultCoordinates } from './slices/mapSlice';

function* fetchCoordinates(action) {
  try {
    const { startX, startY, endX, endY } = action.payload;
    const coordinates = yield call(() => {
      return MapBoxApi.callApi({ startX, startY, endX, endY })
    });
    yield put(setCurrentPolylineCoordinates(coordinates));
  } catch (error) {
    console.log("error", error.message);
    yield put(setCurrentPolylineDefaultCoordinates());
  }
}

function* mySaga() {
  yield takeEvery(sagaActionTypes.setIsLoadingAction, fetchCoordinates);
}

export default mySaga;
