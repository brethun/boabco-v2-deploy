import { initialCampaignRecords, CampaignData } from '../mocks/campaignsMockData';

const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));
const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

const campaignsStore: { records: CampaignData[] } = {
  records: clone(initialCampaignRecords)
};

export const mockCampaignsClient = {
  async getCampaignsList() {
    await delay();
    return clone(campaignsStore.records);
  },

  async getCampaignRecord(campaignId: string) {
    await delay();
    const record = campaignsStore.records.find((campaign) => campaign.id === campaignId);

    if (!record) {
      throw new Error('Campaign record not found');
    }

    return clone(record);
  },

  async createCampaign(campaignData: Omit<CampaignData, 'id'>) {
    await delay();
    const newCampaign: CampaignData = {
      ...campaignData,
      id: (Math.max(...campaignsStore.records.map(c => parseInt(c.id))) + 1).toString()
    };

    campaignsStore.records.push(newCampaign);
    return clone(newCampaign);
  },

  async updateCampaign(campaignId: string, campaignData: Partial<CampaignData>) {
    await delay();
    const recordIndex = campaignsStore.records.findIndex((campaign) => campaign.id === campaignId);

    if (recordIndex < 0) {
      throw new Error('Campaign record not found');
    }

    const updatedCampaign: CampaignData = {
      ...campaignsStore.records[recordIndex],
      ...campaignData,
      id: campaignId // Ensure ID cannot be changed
    };

    campaignsStore.records[recordIndex] = updatedCampaign;
    return clone(updatedCampaign);
  },

  async deleteCampaign(campaignId: string) {
    await delay();
    const recordIndex = campaignsStore.records.findIndex((campaign) => campaign.id === campaignId);

    if (recordIndex < 0) {
      throw new Error('Campaign record not found');
    }

    campaignsStore.records.splice(recordIndex, 1);
    return { success: true };
  },

  async getCampaignMetrics() {
    await delay();
    const campaigns = campaignsStore.records;
    const activeCampaigns = campaigns.filter(c => c.status === 'Active').length;
    const totalResponses = campaigns.reduce((sum, c) => sum + c.responses, 0);
    const conversionRate = campaigns.length > 0 ? Math.round((totalResponses / campaigns.length) * 0.23) : 0;

    return {
      activeCampaigns,
      totalResponses,
      conversionRate: `${conversionRate}%`
    };
  }
};

export type MockCampaignsClient = typeof mockCampaignsClient;