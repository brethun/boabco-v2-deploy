import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export interface SessionUser {
  id: string;
  name: string;
  email: string;
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

interface PersistedSession {
  user: SessionUser;
  token: string;
}

export const DEMO_CREDENTIALS = {
  email: 'demo@boabco.com',
  password: 'demo1234'
} as const;

const DEMO_USER: SessionUser = {
  id: 'demo-admin',
  name: 'Demo Administrator',
  email: DEMO_CREDENTIALS.email
};

const SESSION_STORAGE_KEY = 'boabco.session';
const initialSession: SessionSnapshot = {
  user: null,
  token: null,
  status: 'idle'
};

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export const SessionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<SessionSnapshot>(initialSession);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const raw = window.localStorage.getItem(SESSION_STORAGE_KEY);

    if (!raw) {
      return;
    }

    try {
      const persisted: PersistedSession = JSON.parse(raw);
      setSession({ ...persisted, status: 'idle' });
    } catch (error) {
      console.warn('Unable to parse persisted session', error);
      window.localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }, []);

  const login = useCallback(async ({ email, password }: LoginCredentials) => {
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail || !password) {
      throw new Error('Email and password are required.');
    }

    setSession((previous) => ({ ...previous, status: 'authenticating' }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 450));

      const isValidCredentials =
        trimmedEmail === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password;

      if (!isValidCredentials) {
        throw new Error('Invalid email or password.');
      }

      const mockSession: PersistedSession = {
        user: DEMO_USER,
        token: 'mock-token'
      };

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(mockSession));
      }

      setSession({ ...mockSession, status: 'idle' });
    } catch (error) {
      setSession({ user: null, token: null, status: 'idle' });
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(SESSION_STORAGE_KEY);
    }

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
