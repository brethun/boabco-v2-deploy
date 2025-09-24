import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../services/api';
import peopleReducer from '../features/people/peopleSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    people: peopleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
