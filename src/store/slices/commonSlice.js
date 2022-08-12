// vendor
import { createSlice } from '@reduxjs/toolkit'
// constants
import POINTS from '../mock/points';
// mock
import ROUTES from '../mock/routes';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    defaultPoint: POINTS[0],
    currentPoint: POINTS[0],
    currentRoute: ROUTES[0],
    points: POINTS,
    routes: ROUTES,
  },
  reducers: {
    setCurrentPoint(state, action) {
      state.currentPoint = state.points[action.payload];
    },
    setCurrentRoute(state, action) {
      state.currentRoute = state.routes[action.payload];
    },
    createRoute(state, action) {
      state.routes.push(action.payload);
    },
    changeRoute(state, action) {
      state.routes = state.routes.splice(action.payload.index, [1, [action.payload.newRoute]]);
    },
    removeRoute(state, action) {
      state.routes = state.routes.filter(route => route[action.payload]);
    },
  }
});

export const {
  setCurrentPoint,
  setCurrentRoute,
  createRoute,
  changeRoute,
  removeRoute,
} = commonSlice.actions

export const commonState = state => state.common;

export const commonReducer = commonSlice.reducer;
