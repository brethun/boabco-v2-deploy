export interface LinkedReferral {
  id: string;
  title: string;
  status: string;
  date: string;
  outcome: string;
}

export interface HistoryEntry {
  id: string;
  date: string;
  time: string;
  action: string;
  details: string;
  performedBy: string;
  type: 'status_change' | 'document' | 'communication' | 'note' | 'meeting';
}

export interface ContactDetails {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  linkedIn: string;
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
  };
  notes: string;
}

export interface ReferralData {
  id: string;
  title: string;
  assignee: string;
  status: 'Pending Approval' | 'In Progress' | 'Complete' | 'Rejected';
  response?: string;
  referred: string;
  lastUpdated: string;
  contactDetails?: ContactDetails;
  linkedReferrals?: LinkedReferral[];
  history?: HistoryEntry[];
}

export const initialReferralRecords: ReferralData[] = [
  {
    id: 'Referral #24784',
    title: 'Referral #24784',
    assignee: 'Wunan SP',
    status: 'Pending Approval',
    referred: 'Jul 24, 21:46',
    lastUpdated: 'Jul 24, 21:46',
    contactDetails: {
      name: 'Sarah Thompson',
      email: 'sarah.thompson@wunan.org.au',
      phone: '+61 8 9168 3881',
      company: 'Wunan Foundation',
      position: 'Senior Program Manager',
      linkedIn: 'https://linkedin.com/in/sarahthompson-wunan',
      address: {
        street: '123 Hannan Street',
        suburb: 'Kununurra',
        state: 'WA',
        postcode: '6743'
      },
      notes: 'Highly experienced in indigenous program management. Strong connections in the Kimberley region.'
    },
    linkedReferrals: [
      {
        id: 'REF-2024-001',
        title: 'Previous Healthcare Referral',
        status: 'Complete',
        date: '2024-06-15',
        outcome: 'Successfully placed'
      },
      {
        id: 'REF-2024-002',
        title: 'Mining Consultant Referral',
        status: 'Rejected',
        date: '2024-05-20',
        outcome: 'Skills mismatch'
      }
    ],
    history: [
      {
        id: '12',
        date: '2024-07-24',
        time: '9:46 PM',
        action: 'Referral Submitted',
        details: 'Initial referral submitted for review by Sarah Thompson from Wunan Foundation for Construction Project Manager position.',
        performedBy: 'Sarah Thompson',
        type: 'status_change'
      },
      {
        id: '11',
        date: '2024-07-24',
        time: '8:30 PM',
        action: 'Document Uploaded',
        details: 'Resume and certification documents uploaded to referral package.',
        performedBy: 'Sarah Thompson',
        type: 'document'
      },
      {
        id: '10',
        date: '2024-07-24',
        time: '7:15 PM',
        action: 'Referral to Service Provider',
        details: 'Referral forwarded to Elite Recruitment Solutions for Construction Project Manager role. Service provider notified via email.',
        performedBy: 'System Admin',
        type: 'status_change'
      }
    ]
  },
  {
    id: 'New Demo 6',
    title: 'New Demo 6',
    assignee: 'Kit Lim',
    status: 'In Progress',
    response: 'Jun 23, 2025',
    referred: 'Jun 24, 19:46',
    lastUpdated: 'Jun 30, 12:57',
    contactDetails: {
      name: 'Michael Chen',
      email: 'michael.chen@techcorp.com.au',
      phone: '+61 2 9876 5432',
      company: 'TechCorp Australia',
      position: 'Software Developer',
      linkedIn: 'https://linkedin.com/in/michaelchen-dev',
      address: {
        street: '456 Collins Street',
        suburb: 'Melbourne',
        state: 'VIC',
        postcode: '3000'
      },
      notes: 'Senior full-stack developer with expertise in React and Node.js. Looking for remote opportunities.'
    },
    linkedReferrals: [
      {
        id: 'REF-2024-003',
        title: 'Previous Frontend Role',
        status: 'Complete',
        date: '2024-04-10',
        outcome: 'Successfully placed'
      }
    ],
    history: [
      {
        id: '8',
        date: '2024-06-30',
        time: '12:57 PM',
        action: 'Service Provider Update',
        details: 'TechTalent Specialists provided progress update: Currently in technical assessment phase. Client feedback expected by July 5th.',
        performedBy: 'Mike Johnson (TechTalent)',
        type: 'note'
      },
      {
        id: '7',
        date: '2024-06-28',
        time: '3:30 PM',
        action: 'Technical Assessment',
        details: 'Completed coding challenge and system design interview. Performance rated as "Excellent" - 9/10 score.',
        performedBy: 'TechCorp Review Panel',
        type: 'meeting'
      }
    ]
  },
  {
    id: 'Demo Zero',
    title: 'Demo Zero',
    assignee: 'Services Australia',
    status: 'Complete',
    response: 'Jun 13, 2025',
    referred: 'Jun 13, 08:52',
    lastUpdated: 'Jun 13, 09:17',
    contactDetails: {
      name: 'Emma Wilson',
      email: 'emma.wilson@financecorp.com.au',
      phone: '+61 8 9234 5678',
      company: 'Finance Corp Perth',
      position: 'Senior Accountant',
      linkedIn: 'https://linkedin.com/in/emmawilson-cpa',
      address: {
        street: '321 Murray Street',
        suburb: 'Perth',
        state: 'WA',
        postcode: '6000'
      },
      notes: 'CPA qualified with 10+ years experience in government and private sector accounting.'
    },
    linkedReferrals: [
      {
        id: 'REF-2024-004',
        title: 'Government Finance Role',
        status: 'Complete',
        date: '2024-03-15',
        outcome: 'Successfully placed'
      },
      {
        id: 'REF-2024-005',
        title: 'Private Sector Opportunity',
        status: 'Complete',
        date: '2024-01-20',
        outcome: 'Successfully placed'
      }
    ],
    history: [
      {
        id: '10',
        date: '2024-06-13',
        time: '9:17 AM',
        action: 'Placement Completed',
        details: 'Candidate successfully commenced Senior Financial Analyst role with Services Australia. 6-month probation period commenced. Referral closed as successful placement.',
        performedBy: 'David Brown (Finance First)',
        type: 'status_change'
      }
    ]
  },
  {
    id: 'New Test5',
    title: 'New Test5',
    assignee: 'Wunan (BH)',
    status: 'Rejected',
    response: 'Jun 19, 2025',
    referred: 'Jun 19, 23:23',
    lastUpdated: 'Jun 20, 08:45',
    contactDetails: {
      name: 'David Martinez',
      email: 'david.martinez@healthcorp.com.au',
      phone: '+61 7 3456 7890',
      company: 'HealthCorp Queensland',
      position: 'Registered Nurse',
      linkedIn: 'https://linkedin.com/in/davidmartinez-rn',
      address: {
        street: '789 Queen Street',
        suburb: 'Brisbane',
        state: 'QLD',
        postcode: '4000'
      },
      notes: 'Experienced RN seeking opportunities in rural/remote healthcare settings.'
    },
    linkedReferrals: [],
    history: [
      {
        id: '6',
        date: '2024-06-20',
        time: '8:45 AM',
        action: 'Referral Closed - Rejected',
        details: 'Referral marked as rejected due to candidate location preferences not matching available positions. Alternative opportunities to be explored.',
        performedBy: 'Sarah Wilson (Healthcare Heroes)',
        type: 'status_change'
      }
    ]
  },
  {
    id: 'Referral #24850',
    title: 'Referral #24850',
    assignee: '54 Reasons',
    status: 'In Progress',
    referred: 'Aug 15, 10:30',
    lastUpdated: 'Aug 20, 14:22',
    contactDetails: {
      name: 'James Cooper',
      email: 'james.cooper@54reasons.org.au',
      phone: '+61 8 9192 4567',
      company: '54 Reasons',
      position: 'Employment Consultant',
      linkedIn: '',
      address: { street: '45 Short Street', suburb: 'Broome', state: 'WA', postcode: '6725' },
      notes: 'Specializes in youth employment pathways.'
    },
    linkedReferrals: [],
    history: [
      { id: '20', date: '2024-08-20', time: '2:22 PM', action: 'Initial Assessment Complete', details: 'Skills assessment and career planning session completed.', performedBy: 'James Cooper', type: 'meeting' }
    ]
  },
  {
    id: 'Referral #24867',
    title: 'Referral #24867',
    assignee: 'Wunan SP',
    status: 'Pending Approval',
    referred: 'Sep 02, 09:15',
    lastUpdated: 'Sep 02, 09:15',
    contactDetails: {
      name: 'Lisa Brown',
      email: 'lisa.brown@wunan.org.au',
      phone: '+61 8 9168 5500',
      company: 'Wunan Foundation',
      position: 'Case Manager',
      linkedIn: '',
      address: { street: '88 Coolibah Drive', suburb: 'Kununurra', state: 'WA', postcode: '6743' },
      notes: 'New referral for housing support.'
    },
    linkedReferrals: [],
    history: [
      { id: '21', date: '2024-09-02', time: '9:15 AM', action: 'Referral Submitted', details: 'New referral for emergency housing assistance.', performedBy: 'Lisa Brown', type: 'status_change' }
    ]
  },
  {
    id: 'Referral #24890',
    title: 'Referral #24890',
    assignee: 'Services Australia',
    status: 'Complete',
    response: 'Oct 10, 2024',
    referred: 'Sep 15, 11:00',
    lastUpdated: 'Oct 10, 16:30',
    contactDetails: {
      name: 'Michelle Taylor',
      email: 'michelle.taylor@servicesaustralia.gov.au',
      phone: '+61 2 6213 5000',
      company: 'Services Australia',
      position: 'Senior Case Officer',
      linkedIn: '',
      address: { street: '70 Northbourne Avenue', suburb: 'Canberra', state: 'ACT', postcode: '2601' },
      notes: 'Successfully placed into Centrelink support program.'
    },
    linkedReferrals: [
      { id: 'REF-2024-010', title: 'Income Support Application', status: 'Complete', date: '2024-10-10', outcome: 'Approved' }
    ],
    history: [
      { id: '22', date: '2024-10-10', time: '4:30 PM', action: 'Referral Completed', details: 'Income support approved and client enrolled in employment program.', performedBy: 'Michelle Taylor', type: 'status_change' }
    ]
  },
  {
    id: 'Referral #24912',
    title: 'Referral #24912',
    assignee: 'Kit Lim',
    status: 'In Progress',
    referred: 'Oct 22, 14:45',
    lastUpdated: 'Nov 05, 10:00',
    contactDetails: {
      name: 'Andrew Kim',
      email: 'andrew.kim@example.com',
      phone: '+61 8 9321 4567',
      company: 'Self-employed',
      position: 'Diesel Mechanic',
      linkedIn: '',
      address: { street: '15 Industrial Road', suburb: 'Kununurra', state: 'WA', postcode: '6743' },
      notes: 'Seeking employment in mining sector. Has MC licence.'
    },
    linkedReferrals: [],
    history: [
      { id: '23', date: '2024-11-05', time: '10:00 AM', action: 'Interview Scheduled', details: 'Mining company interview arranged for Nov 12.', performedBy: 'Kit Lim', type: 'communication' }
    ]
  },
  {
    id: 'Referral #24935',
    title: 'Referral #24935',
    assignee: 'Wunan (BH)',
    status: 'Pending Approval',
    referred: 'Nov 10, 08:30',
    lastUpdated: 'Nov 10, 08:30',
    contactDetails: {
      name: 'Rachel Green',
      email: 'rachel.green@wunan.org.au',
      phone: '+61 8 9168 3881',
      company: 'Wunan Foundation',
      position: 'Youth Worker',
      linkedIn: '',
      address: { street: '45 Bandicoot Drive', suburb: 'Halls Creek', state: 'WA', postcode: '6770' },
      notes: 'Youth mentoring program referral.'
    },
    linkedReferrals: [],
    history: [
      { id: '24', date: '2024-11-10', time: '8:30 AM', action: 'Referral Submitted', details: 'New youth referred for mentoring and employment support.', performedBy: 'Rachel Green', type: 'status_change' }
    ]
  },
  {
    id: 'Referral #24960',
    title: 'Referral #24960',
    assignee: '54 Reasons',
    status: 'Complete',
    response: 'Nov 28, 2024',
    referred: 'Nov 15, 13:20',
    lastUpdated: 'Nov 28, 15:45',
    contactDetails: {
      name: 'Tom Walker',
      email: 'tom.walker@54reasons.org.au',
      phone: '+61 8 9192 8800',
      company: '54 Reasons',
      position: 'Program Coordinator',
      linkedIn: '',
      address: { street: '20 Dampier Terrace', suburb: 'Broome', state: 'WA', postcode: '6725' },
      notes: 'Training program successfully completed.'
    },
    linkedReferrals: [
      { id: 'REF-2024-015', title: 'Cert II Construction', status: 'Complete', date: '2024-11-28', outcome: 'Qualification obtained' }
    ],
    history: [
      { id: '25', date: '2024-11-28', time: '3:45 PM', action: 'Training Completed', details: 'Client successfully completed Certificate II in Building and Construction.', performedBy: 'Tom Walker', type: 'status_change' }
    ]
  },
  {
    id: 'Referral #24985',
    title: 'Referral #24985',
    assignee: 'Services Australia',
    status: 'In Progress',
    referred: 'Dec 01, 09:00',
    lastUpdated: 'Dec 10, 11:30',
    contactDetails: {
      name: 'Karen Mitchell',
      email: 'karen.mitchell@servicesaustralia.gov.au',
      phone: '+61 2 6213 6000',
      company: 'Services Australia',
      position: 'Employment Services Officer',
      linkedIn: '',
      address: { street: '50 Marcus Clarke St', suburb: 'Canberra', state: 'ACT', postcode: '2601' },
      notes: 'Job seeker registration and support services.'
    },
    linkedReferrals: [],
    history: [
      { id: '26', date: '2024-12-10', time: '11:30 AM', action: 'Job Plan Created', details: 'Employment pathway plan developed with client.', performedBy: 'Karen Mitchell', type: 'meeting' }
    ]
  }
];

export const referralStatuses = ['Pending Approval', 'In Progress', 'Complete', 'Rejected'] as const;
export const assignees = ['Wunan SP', 'Kit Lim', 'Wunan (BH)', '54 Reasons', 'Services Australia'];
export const actionTypes = ['status_change', 'document', 'communication', 'note', 'meeting'] as const;

export const getColumnColor = (status: ReferralData['status']) => {
  switch (status) {
    case 'Pending Approval':
      return '#4A90E2';
    case 'In Progress':
      return '#7ED321';
    case 'Complete':
      return '#50E3C2';
    case 'Rejected':
      return '#D0021B';
    default:
      return '#9B9B9B';
  }
};