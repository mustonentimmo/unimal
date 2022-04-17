import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  locationFilter: '',
  animalsFilter: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocationFilter: (state, { payload }) => {
      state.locationFilter = payload.value;
    },
    setAnimalsFilter: () => {},
  },
});

export const { setLocationFilter, setAnimalsFilter } = filtersSlice.actions;
export const locationFilterSelector = (state) => state.filters.locationFilter;
export const locationAnimalsFilterSelector = (state) => state.filters.animalsFilter;

export default filtersSlice.reducer;
