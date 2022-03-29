import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';

export const initialState = {
  loading: false,
  hasError: false,
  shelters: [],
};

const sheltersSlice = createSlice({
  name: 'shelters',
  initialState,
  reducers: {
    getShelters: (state) => {
      state.loading = true;
    },
    getSheltersSuccess: (state, { payload }) => {
      (state.loading = false), (state.hasError = false), (state.shelters = payload);
    },
    getSheltersFailure: (state, { payload }) => {
      (state.loading = false), (state.hasError = true), (state.shelters = []);
    },
  },
});

export const { getShelters, getSheltersSuccess, getSheltersFailure } = sheltersSlice.actions;
export const sheltersSelector = (state: RootState) => state.shelters;

export default sheltersSlice.reducer;

export const fetchShelters = () => {
  return function (dispatch: Dispatch) {
    dispatch(getShelters());
    axios
      .get(`${process.env.API_HOST}/api/shelters/`)
      .then((response) => {
        dispatch(getSheltersSuccess(response));
      })
      .catch((error) => {
        dispatch(getSheltersFailure(error));
      });
  };
};
