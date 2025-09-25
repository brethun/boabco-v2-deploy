import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../services/api';
import { environment } from '../config/environment';
import peopleReducer from '../features/people/peopleSlice';
import businessReducer from '../features/business/businessSlice';
import campaignsReducer from '../features/campaigns/campaignsSlice';
import referralsReducer from '../features/referrals/referralsSlice';
import serviceProvidersReducer from '../features/service-providers/serviceProvidersSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    people: peopleReducer,
    business: businessReducer,
    campaigns: campaignsReducer,
    referrals: referralsReducer,
    serviceProviders: serviceProvidersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(api.middleware),
  devTools: environment.enableDevTools
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
