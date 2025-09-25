import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { authUtils, TokenPayload } from '../../services/auth';

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

type SessionStatus = 'idle' | 'authenticating';

interface SessionSnapshot {
  user: SessionUser | null;
  token: string | null;
  status: SessionStatus;
}

interface SessionContextValue extends SessionSnapshot {
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const DEMO_CREDENTIALS = {
  email: 'admin@boabco.com',
  password: 'password'
} as const;
const initialSession: SessionSnapshot = {
  user: null,
  token: null,
  status: 'idle'
};

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

// Helper to convert TokenPayload to SessionUser
const tokenPayloadToUser = (payload: TokenPayload): SessionUser => ({
  id: payload.sub,
  name: payload.name,
  email: payload.email,
  role: payload.role
});

export const SessionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<SessionSnapshot>(initialSession);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Try to hydrate session from stored JWT tokens
    const storedTokens = authUtils.getStoredTokens();
    if (!storedTokens) {
      return;
    }

    const currentUser = authUtils.getCurrentUser();
    if (currentUser) {
      setSession({
        user: tokenPayloadToUser(currentUser),
        token: storedTokens.accessToken,
        status: 'idle'
      });
    }
  }, []);

  const login = useCallback(async ({ email, password }: LoginCredentials) => {
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail || !password) {
      throw new Error('Email and password are required.');
    }

    setSession((previous) => ({ ...previous, status: 'authenticating' }));

    try {
      // Use JWT auth utilities for login
      const tokens = await authUtils.mockLogin(trimmedEmail, password);

      if (!tokens) {
        throw new Error('Invalid email or password.');
      }

      // Store tokens in localStorage
      authUtils.storeTokens(tokens);

      // Get user from token and update session
      const currentUser = authUtils.getCurrentUser();
      if (currentUser) {
        setSession({
          user: tokenPayloadToUser(currentUser),
          token: tokens.accessToken,
          status: 'idle'
        });
      }
    } catch (error) {
      setSession({ user: null, token: null, status: 'idle' });
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    // Use JWT auth utilities for logout
    authUtils.logout();
    setSession(initialSession);
  }, []);

  const value = useMemo<SessionContextValue>(() => ({
    ...session,
    isAuthenticated: Boolean(session.user),
    login,
    logout
  }), [session, login, logout]);

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSession = (): SessionContextValue => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider.');
  }

  return context;
};
