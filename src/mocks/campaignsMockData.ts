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
    name: 'Emergency Relief Referral 2025',
    status: 'Active',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    targetAudience: 'Kimberley Communities',
    budget: '$15,000',
    responses: 234
  },
  {
    id: '2',
    name: 'Baseline Community Survey 2025',
    status: 'Planning',
    startDate: '2025-08-15',
    endDate: '2025-10-15',
    targetAudience: 'Kimberley Communities',
    budget: '$25,000',
    responses: 0
  },
  {
    id: '3',
    name: 'Emergency Relief Referral 2024',
    status: 'Completed',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    targetAudience: 'Kimberley Communities',
    budget: '$20,000',
    responses: 156
  },
  {
    id: '4',
    name: 'Youth App',
    status: 'Active',
    startDate: '2025-01-01',
    endDate: '2025-04-30',
    targetAudience: 'Kimberley Communities',
    budget: '$18,000',
    responses: 287
  },
  {
    id: '5',
    name: 'Emergency Relief App',
    status: 'Active',
    startDate: '2025-03-01',
    endDate: '2025-07-31',
    targetAudience: 'Kimberley Communities',
    budget: '$22,000',
    responses: 342
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