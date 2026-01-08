// JWT utilities for mock authentication
export interface TokenPayload {
  sub: string;
  email: string;
  name: string;
  role: string;
  exp: number;
  iat: number;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

const TOKEN_KEY = 'boabco_auth_tokens';
const MOCK_SECRET = 'mock_jwt_secret_key';

// Simple base64 encoding/decoding for mock JWT
const base64UrlEncode = (str: string): string => {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

const base64UrlDecode = (str: string): string => {
  const padding = (4 - (str.length % 4)) % 4;
  str += '='.repeat(padding);
  return atob(str.replace(/-/g, '+').replace(/_/g, '/'));
};

export const authUtils = {
  // Generate a mock JWT token
  generateMockToken(payload: Omit<TokenPayload, 'exp' | 'iat'>): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };

    const now = Math.floor(Date.now() / 1000);
    const fullPayload: TokenPayload = {
      ...payload,
      iat: now,
      exp: now + (24 * 60 * 60) // 24 hours
    };

    const headerEncoded = base64UrlEncode(JSON.stringify(header));
    const payloadEncoded = base64UrlEncode(JSON.stringify(fullPayload));
    
    // In a real implementation, this would be a proper HMAC signature
    const signature = base64UrlEncode(`${headerEncoded}.${payloadEncoded}.${MOCK_SECRET}`);

    return `${headerEncoded}.${payloadEncoded}.${signature}`;
  },

  // Validate and decode a mock JWT token
  validateMockToken(token: string): TokenPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return null;
      }

      const payload = JSON.parse(base64UrlDecode(parts[1]));
      const now = Math.floor(Date.now() / 1000);

      // Check if token is expired
      if (payload.exp < now) {
        return null;
      }

      return payload as TokenPayload;
    } catch (error) {
      return null;
    }
  },

  // Mock login - generates tokens for valid credentials
  async mockLogin(email: string, password: string): Promise<AuthTokens | null> {
    // Mock validation - in real app, this would call an API
    const mockUsers = {
      'admin@boabco.com.au': { name: 'Admin User', role: 'admin' },
      'admin@boabco.com': { name: 'Admin User', role: 'admin' },
      'user@boabco.com': { name: 'Standard User', role: 'user' }
    };

    const validPassword = process.env.REACT_APP_DEMO_PASSWORD || 'password';

    // Simple password check for mock - in real app, this would be hashed
    if (!mockUsers[email as keyof typeof mockUsers] || password !== validPassword) {
      return null;
    }

    const user = mockUsers[email as keyof typeof mockUsers];
    const userId = Math.random().toString(36).substring(2, 15);

    const accessToken = this.generateMockToken({
      sub: userId,
      email,
      name: user.name,
      role: user.role
    });

    const refreshToken = this.generateMockToken({
      sub: userId,
      email,
      name: user.name,
      role: 'refresh'
    });

    const expiresAt = Date.now() + (24 * 60 * 60 * 1000); // 24 hours

    return {
      accessToken,
      refreshToken,
      expiresAt
    };
  },

  // Store tokens in localStorage
  storeTokens(tokens: AuthTokens): void {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
  },

  // Retrieve tokens from localStorage
  getStoredTokens(): AuthTokens | null {
    try {
      const stored = localStorage.getItem(TOKEN_KEY);
      if (!stored) {
        return null;
      }

      const tokens = JSON.parse(stored) as AuthTokens;
      
      // Check if tokens are expired
      if (Date.now() > tokens.expiresAt) {
        this.clearStoredTokens();
        return null;
      }

      return tokens;
    } catch (error) {
      return null;
    }
  },

  // Clear tokens from localStorage
  clearStoredTokens(): void {
    localStorage.removeItem(TOKEN_KEY);
  },

  // Get current user from token
  getCurrentUser(): TokenPayload | null {
    const tokens = this.getStoredTokens();
    if (!tokens) {
      return null;
    }

    return this.validateMockToken(tokens.accessToken);
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  },

  // Refresh tokens (mock implementation)
  async refreshTokens(): Promise<AuthTokens | null> {
    const currentTokens = this.getStoredTokens();
    if (!currentTokens) {
      return null;
    }

    const refreshPayload = this.validateMockToken(currentTokens.refreshToken);
    if (!refreshPayload || refreshPayload.role !== 'refresh') {
      return null;
    }

    // Generate new tokens
    const newAccessToken = this.generateMockToken({
      sub: refreshPayload.sub,
      email: refreshPayload.email,
      name: refreshPayload.name,
      role: 'user' // Restore original role
    });

    const newRefreshToken = this.generateMockToken({
      sub: refreshPayload.sub,
      email: refreshPayload.email,
      name: refreshPayload.name,
      role: 'refresh'
    });

    const newTokens: AuthTokens = {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
    };

    this.storeTokens(newTokens);
    return newTokens;
  },

  // Logout - clear all tokens
  logout(): void {
    this.clearStoredTokens();
  }
};