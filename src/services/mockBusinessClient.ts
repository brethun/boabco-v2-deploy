import { initialBusinessRecords, BusinessData } from '../mocks/businessMockData';

const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));
const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

const businessStore: { records: BusinessData[] } = {
  records: clone(initialBusinessRecords)
};

export const mockBusinessClient = {
  async getBusinessList() {
    await delay();
    return clone(businessStore.records);
  },

  async getBusinessRecord(businessId: string) {
    await delay();
    const record = businessStore.records.find((business) => business.id === businessId);

    if (!record) {
      throw new Error('Business record not found');
    }

    return clone(record);
  },

  async createBusiness(businessData: Omit<BusinessData, 'id'>) {
    await delay();
    const newBusiness: BusinessData = {
      ...businessData,
      id: (Math.max(...businessStore.records.map(b => parseInt(b.id))) + 1).toString()
    };

    businessStore.records.push(newBusiness);
    return clone(newBusiness);
  },

  async updateBusiness(businessId: string, businessData: Partial<BusinessData>) {
    await delay();
    const recordIndex = businessStore.records.findIndex((business) => business.id === businessId);

    if (recordIndex < 0) {
      throw new Error('Business record not found');
    }

    const updatedBusiness: BusinessData = {
      ...businessStore.records[recordIndex],
      ...businessData,
      id: businessId // Ensure ID cannot be changed
    };

    businessStore.records[recordIndex] = updatedBusiness;
    return clone(updatedBusiness);
  },

  async deleteBusiness(businessId: string) {
    await delay();
    const recordIndex = businessStore.records.findIndex((business) => business.id === businessId);

    if (recordIndex < 0) {
      throw new Error('Business record not found');
    }

    businessStore.records.splice(recordIndex, 1);
    return { success: true };
  }
};

export type MockBusinessClient = typeof mockBusinessClient;