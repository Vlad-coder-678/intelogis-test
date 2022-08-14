// vendor
import { createSlice } from "@reduxjs/toolkit";
// mock
import POINTS from "../mock/points";
import ROUTES from "../mock/routes";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    points: POINTS,
    routes: ROUTES,
    currentRoute: ROUTES[0],
  },
  reducers: {
    createRoute(state, action) {
      state.routes = [ ...state.routes, action.payload ];
    },
    changeRoute(state, action) {
      state.routes.splice(action.payload.routeId, 1, action.payload);
    },
    removeRoute(state, action) {
      state.routes = state.routes
        .filter(({ routeId }) => (routeId !== action.payload))
        .map((route, index) => ({ ...route, routeId: index }));
    },
    setCurrentRoute(state, action) {
      state.currentRoute = state.routes[action.payload];
    },
  }
});

export const {
  createRoute,
  changeRoute,
  removeRoute,
  setCurrentRoute,
} = tableSlice.actions;

export const tableState = state => state.table;

export const tableReducer = tableSlice.reducer;
