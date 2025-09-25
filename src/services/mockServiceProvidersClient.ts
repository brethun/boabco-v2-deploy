import { initialServiceProviderRecords, ServiceProviderData } from '../mocks/serviceProvidersMockData';

const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));
const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

const serviceProvidersStore: { records: ServiceProviderData[] } = {
  records: clone(initialServiceProviderRecords)
};

export const mockServiceProvidersClient = {
  async getServiceProvidersList() {
    await delay();
    return clone(serviceProvidersStore.records);
  },

  async getServiceProviderRecord(providerId: string) {
    await delay();
    const record = serviceProvidersStore.records.find((provider) => provider.id === parseInt(providerId));

    if (!record) {
      throw new Error('Service provider record not found');
    }

    return clone(record);
  },

  async createServiceProvider(providerData: Omit<ServiceProviderData, 'id'>) {
    await delay();
    const newProvider: ServiceProviderData = {
      ...providerData,
      id: Math.max(...serviceProvidersStore.records.map(p => p.id)) + 1
    };

    serviceProvidersStore.records.push(newProvider);
    return clone(newProvider);
  },

  async updateServiceProvider(providerId: string, providerData: Partial<ServiceProviderData>) {
    await delay();
    const recordIndex = serviceProvidersStore.records.findIndex((provider) => provider.id === parseInt(providerId));

    if (recordIndex < 0) {
      throw new Error('Service provider record not found');
    }

    const updatedProvider: ServiceProviderData = {
      ...serviceProvidersStore.records[recordIndex],
      ...providerData,
      id: parseInt(providerId) // Ensure ID cannot be changed
    };

    serviceProvidersStore.records[recordIndex] = updatedProvider;
    return clone(updatedProvider);
  },

  async deleteServiceProvider(providerId: string) {
    await delay();
    const recordIndex = serviceProvidersStore.records.findIndex((provider) => provider.id === parseInt(providerId));

    if (recordIndex < 0) {
      throw new Error('Service provider record not found');
    }

    serviceProvidersStore.records.splice(recordIndex, 1);
    return { success: true };
  },

  async getServiceProvidersByStatus(status: ServiceProviderData['status']) {
    await delay();
    return clone(serviceProvidersStore.records.filter(p => p.status === status));
  },

  async getServiceProviderMetrics() {
    await delay();
    const providers = serviceProvidersStore.records;
    const statusCounts = providers.reduce((acc, provider) => {
      acc[provider.status] = (acc[provider.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: providers.length,
      ...statusCounts
    };
  }
};

export type MockServiceProvidersClient = typeof mockServiceProvidersClient;