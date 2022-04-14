import { configureStore } from '@reduxjs/toolkit';

import sheltersReducer from './features/sheltersSlice';

export const store = configureStore({
  reducer: {
    shelters: sheltersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
