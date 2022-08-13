// vendor
import { createSlice } from '@reduxjs/toolkit'
// constants
import POINTS from '../mock/points';
// mock
import ROUTES from '../mock/routes';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    defaultMapCenter: POINTS[0],
    currentMapCenter: POINTS[0],
    currentRoute: ROUTES[0],
    points: POINTS,
    routes: ROUTES,
  },
  reducers: {
    setCurrentMapCenter(state, action) {
      state.currentMapCenter = action.payload;
    },
    setCurrentRoute(state, action) {
      state.currentRoute = state.routes[action.payload];
    },
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
  }
});

export const {
  setCurrentMapCenter,
  setCurrentRoute,
  createRoute,
  changeRoute,
  removeRoute,
} = commonSlice.actions

export const commonState = state => state.common;

export const commonReducer = commonSlice.reducer;
