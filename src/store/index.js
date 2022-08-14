// vendor
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// locale
// store
import coordinatesSaga from "./sagas";
import { mapReducer } from "./slices/mapSlice";
import { tableReducer } from "./slices/tableSlice";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    table: tableReducer,
    map: mapReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;

sagaMiddleware.run(coordinatesSaga);
