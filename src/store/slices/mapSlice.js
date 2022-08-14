// vendor
import { createSlice } from "@reduxjs/toolkit";

// locale imports
// mock
import POINTS from "../mock/points";
import ROUTES from "../mock/routes";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    isLoading: false,
    defaultMapCenter: POINTS[0],
    currentMapCenter: POINTS[0],
    currentPolylineCoordinates: ROUTES[0].defaultPolylineCoordinates,
  },
  reducers: {
    setCurrentMapCenter(state, action) {
      state.currentMapCenter = action.payload;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setCurrentPolylineCoordinates(state, action) {
      state.currentPolylineCoordinates = action.payload;
      state.isLoading = false;
    },
  }
});

export const {
  setIsLoading,
  setCurrentRoute,
  setCurrentMapCenter,
  setCurrentPolylineCoordinates,
} = mapSlice.actions;

export const mapState = state => state.map;

export const mapReducer = mapSlice.reducer;
