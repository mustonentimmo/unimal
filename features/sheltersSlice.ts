import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../store';

export const initialState = {
  loading: false,
  hasError: false,
  data: [],
};

const sheltersSlice = createSlice({
  name: 'shelters',
  initialState,
  reducers: {
    getShelters: (state) => {
      state.loading = true;
    },
    getSheltersSuccess: (state, { payload }) => {
      (state.loading = false), (state.hasError = false), (state.data = payload);
    },
    getSheltersFailure: (state) => {
      (state.loading = false), (state.hasError = true), (state.data = []);
    },
  },
});

export const { getShelters, getSheltersSuccess, getSheltersFailure } = sheltersSlice.actions;
export const sheltersSelector = (state: RootState) => state.shelters.data;
export const loadingSelector = (state: RootState) => state.shelters.loading;

export default sheltersSlice.reducer;

export const fetchShelters = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getShelters());
    try {
      const response = await axios.get(`${process.env.API_HOST}/api/shelters/`);
      dispatch(getSheltersSuccess(response.data.data));

      return response;
    } catch {
      dispatch(getSheltersFailure());
    }
  };
};
