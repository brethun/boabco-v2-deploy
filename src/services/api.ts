import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../app/store';

/**
 * Central RTK Query service that other features can inject endpoints into.
 * Base URL pulls from environment configuration so it works across envs.
 */
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:4000/api',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = (state as { auth?: { token?: string } }).auth?.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    }
  }),
  tagTypes: ['Health'],
  endpoints: (builder) => ({
    health: builder.query<{ status: string }, void>({
      query: () => ({ url: '/health' })
    })
  })
});

export const { useHealthQuery } = api;
