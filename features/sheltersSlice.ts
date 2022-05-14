import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

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
export const sheltersSelector = (state: any) => state.shelters.data;
export const loadingSelector = (state: any) => state.shelters.loading;

export default sheltersSlice.reducer;

export const fetchShelters = () => {
  axios.defaults.baseURL = 'http://65.108.153.196:1337';

  return async (dispatch: Dispatch) => {
    dispatch(getShelters());
    try {
      const response = await axios.get(`/api/shelters/`);
      dispatch(getSheltersSuccess(response.data.data));
    } catch {
      dispatch(getSheltersFailure());
    }
  };
};
