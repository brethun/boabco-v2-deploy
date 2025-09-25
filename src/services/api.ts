import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authUtils } from './auth';

/**
 * Central RTK Query service that other features can inject endpoints into.
 * Base URL pulls from environment configuration so it works across envs.
 */
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:4000/api',
    prepareHeaders: (headers) => {
      // Get current JWT token from auth utilities
      const tokens = authUtils.getStoredTokens();
      if (tokens) {
        headers.set('authorization', `Bearer ${tokens.accessToken}`);
      }

      return headers;
    }
  }),
  tagTypes: ['Health', 'Business', 'Campaign', 'Referral', 'ServiceProvider', 'People'],
  endpoints: (builder) => ({
    health: builder.query<{ status: string }, void>({
      query: () => ({ url: '/health' })
    })
  })
});

export const { useHealthQuery } = api;
