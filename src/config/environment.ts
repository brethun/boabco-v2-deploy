// Environment configuration for API switching
export interface EnvironmentConfig {
  useMocks: boolean;
  apiBaseUrl: string;
  apiTimeout: number;
  enableDevTools: boolean;
  openAIApiKey: string | null;
  enableAIFeatures: boolean;
}

// Parse environment variables with defaults
const parseBoolean = (value: string | undefined, defaultValue: boolean): boolean => {
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === 'true';
};

export const environment: EnvironmentConfig = {
  useMocks: parseBoolean(process.env.REACT_APP_USE_MOCKS, true), // Default to mocks
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:4000/api',
  apiTimeout: parseInt(process.env.REACT_APP_API_TIMEOUT ?? '10000'),
  enableDevTools: parseBoolean(process.env.REACT_APP_ENABLE_DEVTOOLS, process.env.NODE_ENV !== 'production'),
  openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY ?? null,
  enableAIFeatures: parseBoolean(process.env.REACT_APP_ENABLE_AI_FEATURES, true)
};

// Utility to check if we're in mock mode
export const isMockMode = () => environment.useMocks;

// Utility to get API base URL (returns mock base URL if in mock mode)
export const getApiBaseUrl = () => {
  return environment.useMocks ? 'mock://api' : environment.apiBaseUrl;
};