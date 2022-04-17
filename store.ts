import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './features/filtersSlice';
import sheltersReducer from './features/sheltersSlice';

export const store = configureStore({
  reducer: {
    shelters: sheltersReducer,
    filters: filtersReducer,
  },
});
