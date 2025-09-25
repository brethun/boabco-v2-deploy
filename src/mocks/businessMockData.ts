export interface Director {
  id: string;
  title: string;
  name: string;
}

export interface Project {
  id: string;
  clientName: string;
  description: string;
  startDate: string;
  endDate: string;
  workforce: number;
  spend: number;
}

export interface BusinessData {
  id: string;
  businessName: string;
  abn: string;
  acn: string;
  community: string;
  website: string;
  generalInformation: string;
  businessHistory: string;
  missionStatement: string;
  familyGroup: string;
  operationLength: number;
  interestedInClosureWork: boolean;
  additionalSupportRequired: boolean;
  address: {
    street: string;
    street2: string;
    suburb: string;
    state: string;
    postcode: string;
  };
  contact: {
    primaryContactName: string;
    title: string;
    contactNumber: string;
    email: string;
    contactType: string;
  };
  directors: Director[];
  workforce: {
    employeeNumber: string;
    largestPeakWorkforce: number;
    mainCompetencies: string[];
    largestProjectManaged: string;
  };
  industry: {
    primary: string;
    secondary: string;
  };
  projects: Project[];
  previousClients: Array<{
    id: string;
    clientName: string;
    projectDescription: string;
  }>;
  equipment: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  socialMedia: Array<{
    id: string;
    type: string;
    url: string;
  }>;
}

export const initialBusinessRecords: BusinessData[] = [
  {
    id: '1',
    businessName: 'Aboriginal Construction Services',
    abn: '12 345 678 901',
    acn: 'ACN 123 456 789',
    community: 'Kimberley Region',
    website: 'https://acs-construction.com.au',
    generalInformation: 'Leading indigenous construction company specializing in remote area projects.',
    businessHistory: 'Established in 2010, we have grown from a small family business to a regional leader.',
    missionStatement: 'To provide quality construction services while employing and training local Aboriginal people.',
    familyGroup: 'Group A',
    operationLength: 13,
    interestedInClosureWork: true,
    additionalSupportRequired: false,
    address: {
      street: '123 Main Street',
      street2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725'
    },
    contact: {
      primaryContactName: 'John Lawson',
      title: 'Mr',
      contactNumber: '08 9192 1234',
      email: 'john.lawson@acs-construction.com.au',
      contactType: 'General Manager'
    },
    directors: [
      { id: '1', title: 'Managing Director', name: 'Sarah Wilson' },
      { id: '2', title: 'Operations Director', name: 'Michael Brown' }
    ],
    workforce: {
      employeeNumber: '25-50',
      largestPeakWorkforce: 75,
      mainCompetencies: ['Construction', 'Project Management', 'Safety Management'],
      largestProjectManaged: 'Major Infrastructure'
    },
    industry: {
      primary: 'Construction',
      secondary: 'Infrastructure'
    },
    projects: [
      {
        id: '1',
        clientName: 'Department of Infrastructure',
        description: 'Remote community housing project',
        startDate: '2023-01-15',
        endDate: '2023-12-20',
        workforce: 35,
        spend: 2500000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'Main Roads WA', projectDescription: 'Highway maintenance contract for Great Northern Highway section' },
      { id: '2', clientName: 'Shire of Broome', projectDescription: 'Community center construction and landscaping project' },
      { id: '3', clientName: 'Department of Infrastructure', projectDescription: 'Remote housing infrastructure development' },
      { id: '4', clientName: 'Rio Tinto', projectDescription: 'Site preparation and civil works for mining operations' }
    ],
    equipment: [
      { id: '1', name: 'Excavator', description: 'CAT 320D Excavator - 20 tonne capacity' },
      { id: '2', name: 'Dump Truck', description: 'Volvo A25G Articulated Dump Truck - 25 tonne payload' },
      { id: '3', name: 'Bulldozer', description: 'CAT D6T Bulldozer - Track-type tractor' },
      { id: '4', name: 'Grader', description: 'CAT 140M3 Motor Grader - Road maintenance' }
    ],
    socialMedia: [
      { id: '1', type: 'LinkedIn', url: 'https://linkedin.com/company/acs-construction' },
      { id: '2', type: 'Facebook', url: 'https://facebook.com/acsconstruction' },
      { id: '3', type: 'Instagram', url: 'https://instagram.com/acs_construction_wa' },
      { id: '4', type: 'YouTube', url: 'https://youtube.com/@ACSConstructionWA' }
    ]
  },
  {
    id: '2',
    businessName: 'Pilbara Mining Services',
    abn: '98 765 432 109',
    acn: 'ACN 987 654 321',
    community: 'Pilbara Region',
    website: 'https://pilbaramining.com.au',
    generalInformation: 'Specialized mining support services for the Pilbara region.',
    businessHistory: 'Family-owned business operating since 2005.',
    missionStatement: 'Delivering safe, reliable mining support services to the Pilbara.',
    familyGroup: 'Group B',
    operationLength: 18,
    interestedInClosureWork: true,
    additionalSupportRequired: true,
    address: {
      street: '456 Industrial Drive',
      street2: 'Unit 12',
      suburb: 'Karratha',
      state: 'WA',
      postcode: '6714'
    },
    contact: {
      primaryContactName: 'David Thompson',
      title: 'Mr',
      contactNumber: '08 9144 5678',
      email: 'david.thompson@pilbaramining.com.au',
      contactType: 'Operations Manager'
    },
    directors: [
      { id: '1', title: 'Chief Executive Officer', name: 'Linda Thompson' }
    ],
    workforce: {
      employeeNumber: '50-100',
      largestPeakWorkforce: 120,
      mainCompetencies: ['Mining Operations', 'Equipment Maintenance', 'Logistics'],
      largestProjectManaged: 'Mine Site Support'
    },
    industry: {
      primary: 'Mining',
      secondary: 'Logistics'
    },
    projects: [
      {
        id: '1',
        clientName: 'Rio Tinto',
        description: 'Mine site maintenance contract',
        startDate: '2023-03-01',
        endDate: '2024-02-29',
        workforce: 45,
        spend: 5200000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'BHP', projectDescription: 'Equipment maintenance services and 24/7 on-site support' },
      { id: '2', clientName: 'Fortescue Metals', projectDescription: 'Site logistics support and material handling operations' },
      { id: '3', clientName: 'Woodside Energy', projectDescription: 'Industrial maintenance for LNG processing facilities' },
      { id: '4', clientName: 'Chevron Australia', projectDescription: 'Heavy equipment rental and maintenance services' },
      { id: '5', clientName: 'Iron Bridge Magnetite', projectDescription: 'Mining infrastructure development and support' }
    ],
    equipment: [
      { id: '1', name: 'Mobile Crane', description: 'Liebherr LTM 1090-4.2 - 90 tonne capacity' },
      { id: '2', name: 'Service Truck', description: 'Kenworth T909 Service Vehicle - Heavy duty maintenance' },
      { id: '3', name: 'Water Cart', description: 'Volvo FM12 Water Cart - 20,000L capacity' },
      { id: '4', name: 'Low Loader', description: 'Kenworth T909 Low Loader - Equipment transport' },
      { id: '5', name: 'Compressor', description: 'Atlas Copco XRVS 1000 - Portable air compressor' }
    ],
    socialMedia: [
      { id: '1', type: 'LinkedIn', url: 'https://linkedin.com/company/pilbara-mining' },
      { id: '2', type: 'Facebook', url: 'https://facebook.com/pilbaraminingservices' },
      { id: '3', type: 'Twitter', url: 'https://twitter.com/PilbaraMining' }
    ]
  }
];

export const industries = ['Construction', 'Mining', 'Agriculture', 'Tourism', 'Retail', 'Healthcare', 'Education'];
export const communities = ['Kimberley Region', 'Pilbara Region', 'Goldfields', 'Great Southern', 'Wheatbelt'];
export const familyGroups = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];