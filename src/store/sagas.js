// vendor imports
import { call, put, takeEvery } from "redux-saga/effects";

// locale imports
// classes
import MapBoxApi from "../class/api";
// store
import sagaActionTypes from "./sagaActionTypes";
import { setCurrentPolylineCoordinates } from "./slices/mapSlice";

function* fetchCoordinates(action) {
  const { startX, startY, endX, endY } = action.payload;
  const coordinates = yield call(() => {
    return MapBoxApi.callApi({ startX, startY, endX, endY })
  });
  yield put(setCurrentPolylineCoordinates(coordinates));
}

function* coordinatesSaga() {
  yield takeEvery(sagaActionTypes.setIsLoadingAction, fetchCoordinates);
}

export default coordinatesSaga;
