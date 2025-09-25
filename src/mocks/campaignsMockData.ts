export interface CampaignData {
  id: string;
  name: string;
  status: 'Active' | 'Planning' | 'Completed';
  startDate: string;
  endDate: string;
  targetAudience: string;
  budget: string;
  responses: number;
}

export const initialCampaignRecords: CampaignData[] = [
  {
    id: '1',
    name: 'Summer Recruitment Drive',
    status: 'Active',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    targetAudience: 'Recent Graduates',
    budget: '$15,000',
    responses: 234
  },
  {
    id: '2',
    name: 'Senior Manager Search',
    status: 'Planning',
    startDate: '2024-08-15',
    endDate: '2024-10-15',
    targetAudience: 'Experienced Professionals',
    budget: '$25,000',
    responses: 0
  },
  {
    id: '3',
    name: 'Tech Talent Acquisition',
    status: 'Completed',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    targetAudience: 'Software Developers',
    budget: '$20,000',
    responses: 156
  }
];

export const campaignStatuses = ['Active', 'Planning', 'Completed'] as const;
export const targetAudiences = ['Recent Graduates', 'Experienced Professionals', 'Software Developers', 'Skilled Tradespeople', 'Management', 'Technical Specialists'];

export const getStatusColor = (status: CampaignData['status']) => {
  switch (status) {
    case 'Active':
      return '#4CAF50';
    case 'Planning':
      return '#FF9800';
    case 'Completed':
      return '#2196F3';
    default:
      return '#9E9E9E';
  }
};