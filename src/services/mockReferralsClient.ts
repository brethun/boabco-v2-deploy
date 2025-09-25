import { initialReferralRecords, ReferralData } from '../mocks/referralsMockData';

const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));
const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

const referralsStore: { records: ReferralData[] } = {
  records: clone(initialReferralRecords)
};

export const mockReferralsClient = {
  async getReferralsList() {
    await delay();
    return clone(referralsStore.records);
  },

  async getReferralRecord(referralId: string) {
    await delay();
    const record = referralsStore.records.find((referral) => referral.id === referralId);

    if (!record) {
      throw new Error('Referral record not found');
    }

    return clone(record);
  },

  async createReferral(referralData: Omit<ReferralData, 'id'>) {
    await delay();
    const maxId = Math.max(
      ...referralsStore.records
        .map(r => r.id)
        .map(id => {
          const match = id.match(/#(\d+)$/);
          return match ? parseInt(match[1]) : 0;
        })
    );
    
    const newReferral: ReferralData = {
      ...referralData,
      id: `Referral #${maxId + 1}`
    };

    referralsStore.records.push(newReferral);
    return clone(newReferral);
  },

  async updateReferral(referralId: string, referralData: Partial<ReferralData>) {
    await delay();
    const recordIndex = referralsStore.records.findIndex((referral) => referral.id === referralId);

    if (recordIndex < 0) {
      throw new Error('Referral record not found');
    }

    const updatedReferral: ReferralData = {
      ...referralsStore.records[recordIndex],
      ...referralData,
      id: referralId // Ensure ID cannot be changed
    };

    referralsStore.records[recordIndex] = updatedReferral;
    return clone(updatedReferral);
  },

  async deleteReferral(referralId: string) {
    await delay();
    const recordIndex = referralsStore.records.findIndex((referral) => referral.id === referralId);

    if (recordIndex < 0) {
      throw new Error('Referral record not found');
    }

    referralsStore.records.splice(recordIndex, 1);
    return { success: true };
  },

  async getReferralsByStatus(status: ReferralData['status']) {
    await delay();
    return clone(referralsStore.records.filter(r => r.status === status));
  },

  async getReferralMetrics() {
    await delay();
    const referrals = referralsStore.records;
    const statusCounts = referrals.reduce((acc, ref) => {
      acc[ref.status] = (acc[ref.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: referrals.length,
      ...statusCounts
    };
  }
};

export type MockReferralsClient = typeof mockReferralsClient;