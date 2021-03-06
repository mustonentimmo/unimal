import { createSlice } from '@reduxjs/toolkit';

interface animalsFilter {
  species: string[];
  sex: string[];
  size: string[];
  age: string[];
  color: string[];
  character: string[];
}

interface InitialState {
  locationFilter: string;
  animalsFilter: animalsFilter;
}

export const initialState: InitialState = {
  locationFilter: '',
  animalsFilter: {
    species: [],
    sex: [],
    size: [],
    color: [],
    age: [],
    character: [],
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocationFilter: (state, { payload }) => {
      state.locationFilter = payload.value;
    },
    addAnimalsFilter: (state, { payload }) => {
      if (payload.section === 'species') {
        state.animalsFilter.species = [...state.animalsFilter.species, payload.value];
      }
      if (payload.section === 'sex') {
        state.animalsFilter.sex = [...state.animalsFilter.sex, payload.value];
      }
      if (payload.section === 'size') {
        state.animalsFilter.size = [...state.animalsFilter.size, payload.value];
      }
      if (payload.section === 'color') {
        state.animalsFilter.color = [...state.animalsFilter.color, payload.value];
      }
      if (payload.section === 'age') {
        state.animalsFilter.age = [...state.animalsFilter.age, payload.value];
      }
      if (payload.section === 'character') {
        state.animalsFilter.character = [...state.animalsFilter.character, payload.value];
      }
    },
    removeAnimalsFilter: (state, { payload }) => {
      if (payload.section === 'species') {
        state.animalsFilter.species = state.animalsFilter.species.filter(
          (value) => value !== payload.value
        );
      }
      if (payload.section === 'sex') {
        state.animalsFilter.sex = state.animalsFilter.sex.filter(
          (value) => value !== payload.value
        );
      }
      if (payload.section === 'size') {
        state.animalsFilter.size = state.animalsFilter.size.filter(
          (value) => value !== payload.value
        );
      }
      if (payload.section === 'color') {
        state.animalsFilter.color = state.animalsFilter.color.filter(
          (value) => value !== payload.value
        );
      }
      if (payload.section === 'age') {
        state.animalsFilter.age = state.animalsFilter.age.filter(
          (value) => value !== payload.value
        );
      }
      if (payload.section === 'character') {
        state.animalsFilter.character = state.animalsFilter.character.filter(
          (value) => value !== payload.value
        );
      }
    },
  },
});

export const { setLocationFilter, addAnimalsFilter, removeAnimalsFilter } = filtersSlice.actions;
export const locationFilterSelector = (state: any) => state.filters.locationFilter;
export const animalsFilterSelector = (state: any) => state.filters.animalsFilter;

export default filtersSlice.reducer;
