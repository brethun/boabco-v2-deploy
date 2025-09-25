// API Service Factory - switches between mock and real API clients
import { isMockMode } from '../config/environment';

// Mock clients
import { mockApiClient, MockApiClient } from './mockApiClient';
import { mockBusinessClient, MockBusinessClient } from './mockBusinessClient';
import { mockCampaignsClient, MockCampaignsClient } from './mockCampaignsClient';
import { mockReferralsClient, MockReferralsClient } from './mockReferralsClient';
import { mockServiceProvidersClient, MockServiceProvidersClient } from './mockServiceProvidersClient';

// TODO: Real API clients would be imported here when implemented
// import { realApiClient } from './realApiClient';
// import { realBusinessClient } from './realBusinessClient';
// etc...

// Type definitions for real clients (to be implemented later)
type RealApiClient = MockApiClient;
type RealBusinessClient = MockBusinessClient;
type RealCampaignsClient = MockCampaignsClient;
type RealReferralsClient = MockReferralsClient;
type RealServiceProvidersClient = MockServiceProvidersClient;

// Service factory functions
export const createApiClient = (): MockApiClient | RealApiClient => {
  if (isMockMode()) {
    return mockApiClient;
  }
  
  // TODO: Return real API client when implemented
  // return realApiClient;
  throw new Error('Real API client not implemented yet. Please set REACT_APP_USE_MOCKS=true');
};

export const createBusinessClient = (): MockBusinessClient | RealBusinessClient => {
  if (isMockMode()) {
    return mockBusinessClient;
  }
  
  // TODO: Return real business client when implemented
  // return realBusinessClient;
  throw new Error('Real business API client not implemented yet. Please set REACT_APP_USE_MOCKS=true');
};

export const createCampaignsClient = (): MockCampaignsClient | RealCampaignsClient => {
  if (isMockMode()) {
    return mockCampaignsClient;
  }
  
  // TODO: Return real campaigns client when implemented
  // return realCampaignsClient;
  throw new Error('Real campaigns API client not implemented yet. Please set REACT_APP_USE_MOCKS=true');
};

export const createReferralsClient = (): MockReferralsClient | RealReferralsClient => {
  if (isMockMode()) {
    return mockReferralsClient;
  }
  
  // TODO: Return real referrals client when implemented
  // return realReferralsClient;
  throw new Error('Real referrals API client not implemented yet. Please set REACT_APP_USE_MOCKS=true');
};

export const createServiceProvidersClient = (): MockServiceProvidersClient | RealServiceProvidersClient => {
  if (isMockMode()) {
    return mockServiceProvidersClient;
  }
  
  // TODO: Return real service providers client when implemented
  // return realServiceProvidersClient;
  throw new Error('Real service providers API client not implemented yet. Please set REACT_APP_USE_MOCKS=true');
};

// Singleton instances - created once and reused
let _apiClient: MockApiClient | RealApiClient | null = null;
let _businessClient: MockBusinessClient | RealBusinessClient | null = null;
let _campaignsClient: MockCampaignsClient | RealCampaignsClient | null = null;
let _referralsClient: MockReferralsClient | RealReferralsClient | null = null;
let _serviceProvidersClient: MockServiceProvidersClient | RealServiceProvidersClient | null = null;

// Getter functions that return singleton instances
export const getApiClient = (): MockApiClient | RealApiClient => {
  if (!_apiClient) {
    _apiClient = createApiClient();
  }
  return _apiClient;
};

export const getBusinessClient = (): MockBusinessClient | RealBusinessClient => {
  if (!_businessClient) {
    _businessClient = createBusinessClient();
  }
  return _businessClient;
};

export const getCampaignsClient = (): MockCampaignsClient | RealCampaignsClient => {
  if (!_campaignsClient) {
    _campaignsClient = createCampaignsClient();
  }
  return _campaignsClient;
};

export const getReferralsClient = (): MockReferralsClient | RealReferralsClient => {
  if (!_referralsClient) {
    _referralsClient = createReferralsClient();
  }
  return _referralsClient;
};

export const getServiceProvidersClient = (): MockServiceProvidersClient | RealServiceProvidersClient => {
  if (!_serviceProvidersClient) {
    _serviceProvidersClient = createServiceProvidersClient();
  }
  return _serviceProvidersClient;
};