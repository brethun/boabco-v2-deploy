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
    abn: '11 111 111 111',
    acn: 'ACN 111 111 111',
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
      primaryContactName: 'Test User A',
      title: 'Mr',
      contactNumber: '08 9192 1234',
      email: 'testuser.a@acs-construction.com.au',
      contactType: 'General Manager'
    },
    directors: [
      { id: '1', title: 'Managing Director', name: 'Test Director A' },
      { id: '2', title: 'Operations Director', name: 'Test Director B' }
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
    abn: '22 222 222 222',
    acn: 'ACN 222 222 222',
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
      primaryContactName: 'Test User B',
      title: 'Mr',
      contactNumber: '08 9144 5678',
      email: 'testuser.b@pilbaramining.com.au',
      contactType: 'Operations Manager'
    },
    directors: [
      { id: '1', title: 'Chief Executive Officer', name: 'Test Director C' }
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
  },
  {
    id: '3',
    businessName: 'Kimberley Cultural Tours',
    abn: '33 333 333 333',
    acn: 'ACN 333 333 333',
    community: 'Kimberley Region',
    website: 'https://kimberleyculturaltours.com.au',
    generalInformation: 'Award-winning Indigenous-owned tourism business offering cultural tours and experiences.',
    businessHistory: 'Started in 2015 as a family venture sharing cultural knowledge with visitors.',
    missionStatement: 'To share our culture and country while providing meaningful employment for community members.',
    familyGroup: 'Group C',
    operationLength: 8,
    interestedInClosureWork: false,
    additionalSupportRequired: false,
    address: {
      street: '15 Short Street',
      street2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725'
    },
    contact: {
      primaryContactName: 'Sarah Williams',
      title: 'Ms',
      contactNumber: '08 9192 5555',
      email: 'info@kimberleyculturaltours.com.au',
      contactType: 'General Manager'
    },
    directors: [
      { id: '1', title: 'Managing Director', name: 'Sarah Williams' },
      { id: '2', title: 'Cultural Director', name: 'Elder Tom Williams' }
    ],
    workforce: {
      employeeNumber: '10-25',
      largestPeakWorkforce: 30,
      mainCompetencies: ['Tour Guiding', 'Cultural Education', 'Hospitality'],
      largestProjectManaged: 'Multi-day Cultural Expedition'
    },
    industry: {
      primary: 'Tourism',
      secondary: 'Education'
    },
    projects: [
      {
        id: '1',
        clientName: 'Tourism WA',
        description: 'Cultural tourism experience development program',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        workforce: 15,
        spend: 350000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'Tourism WA', projectDescription: 'Signature Experience development partnership' },
      { id: '2', clientName: 'Cruise Lines Australia', projectDescription: 'Shore excursion cultural tours for cruise passengers' },
      { id: '3', clientName: 'Corporate Groups', projectDescription: 'Team building cultural immersion experiences' }
    ],
    equipment: [
      { id: '1', name: '4WD Tour Vehicle', description: 'Toyota LandCruiser 79 Series - 12 passenger capacity' },
      { id: '2', name: '4WD Tour Vehicle', description: 'Toyota LandCruiser Troop Carrier - 10 passenger capacity' },
      { id: '3', name: 'Tour Boat', description: 'Aluminium Jet Boat - River tours' }
    ],
    socialMedia: [
      { id: '1', type: 'Instagram', url: 'https://instagram.com/kimberleyculturaltours' },
      { id: '2', type: 'Facebook', url: 'https://facebook.com/kimberleyculturaltours' },
      { id: '3', type: 'TripAdvisor', url: 'https://tripadvisor.com/kimberleyculturaltours' }
    ]
  },
  {
    id: '4',
    businessName: 'Kimberley Aboriginal Medical Services',
    abn: '44 444 444 444',
    acn: 'ACN 444 444 444',
    community: 'Kimberley Region',
    website: 'https://kams.org.au',
    generalInformation: 'Community-controlled Aboriginal health service delivering primary healthcare across the Kimberley.',
    businessHistory: 'Established in 1986 to provide culturally appropriate healthcare to Aboriginal communities.',
    missionStatement: 'Improving the health and wellbeing of Aboriginal people through culturally safe healthcare.',
    familyGroup: 'Group D',
    operationLength: 37,
    interestedInClosureWork: false,
    additionalSupportRequired: false,
    address: {
      street: '12 Dora Street',
      street2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725'
    },
    contact: {
      primaryContactName: 'Dr. Maria Santos',
      title: 'Dr',
      contactNumber: '08 9194 3000',
      email: 'ceo@kams.org.au',
      contactType: 'Chief Executive Officer'
    },
    directors: [
      { id: '1', title: 'Chairperson', name: 'Elder James Cooper' },
      { id: '2', title: 'Deputy Chair', name: 'Margaret Brown' }
    ],
    workforce: {
      employeeNumber: '100-150',
      largestPeakWorkforce: 180,
      mainCompetencies: ['Primary Healthcare', 'Chronic Disease Management', 'Mental Health Services'],
      largestProjectManaged: 'Regional Health Service Delivery'
    },
    industry: {
      primary: 'Healthcare',
      secondary: 'Community Services'
    },
    projects: [
      {
        id: '1',
        clientName: 'Department of Health',
        description: 'Remote community health service delivery',
        startDate: '2024-01-01',
        endDate: '2026-12-31',
        workforce: 120,
        spend: 15000000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'WA Department of Health', projectDescription: 'Primary healthcare services contract' },
      { id: '2', clientName: 'Federal Department of Health', projectDescription: 'Indigenous health program delivery' },
      { id: '3', clientName: 'Healthway', projectDescription: 'Health promotion initiatives' }
    ],
    equipment: [
      { id: '1', name: 'Mobile Health Clinic', description: 'Custom-built mobile clinic vehicle' },
      { id: '2', name: 'Medical Transport', description: 'Patient transport vehicles (3x)' },
      { id: '3', name: 'Telehealth Suite', description: 'Remote consultation technology' }
    ],
    socialMedia: [
      { id: '1', type: 'Facebook', url: 'https://facebook.com/kamshealth' },
      { id: '2', type: 'LinkedIn', url: 'https://linkedin.com/company/kams-health' }
    ]
  },
  {
    id: '5',
    businessName: 'Ord Valley Agricultural Enterprise',
    abn: '55 555 555 555',
    acn: 'ACN 555 555 555',
    community: 'Kimberley Region',
    website: 'https://ordvalleyag.com.au',
    generalInformation: 'Indigenous-owned agricultural business specializing in tropical horticulture and sandalwood.',
    businessHistory: 'Founded in 2012 to develop Aboriginal participation in the Ord irrigation scheme.',
    missionStatement: 'Building sustainable agricultural enterprises that benefit Aboriginal communities.',
    familyGroup: 'Group E',
    operationLength: 11,
    interestedInClosureWork: false,
    additionalSupportRequired: true,
    address: {
      street: '500 Weaber Plain Road',
      street2: '',
      suburb: 'Kununurra',
      state: 'WA',
      postcode: '6743'
    },
    contact: {
      primaryContactName: 'Michael Thompson',
      title: 'Mr',
      contactNumber: '08 9168 2000',
      email: 'admin@ordvalleyag.com.au',
      contactType: 'Operations Manager'
    },
    directors: [
      { id: '1', title: 'Managing Director', name: 'Michael Thompson' },
      { id: '2', title: 'Commercial Director', name: 'Rachel Nguyen' }
    ],
    workforce: {
      employeeNumber: '25-50',
      largestPeakWorkforce: 80,
      mainCompetencies: ['Horticulture', 'Irrigation Management', 'Harvesting Operations'],
      largestProjectManaged: 'Sandalwood Plantation Development'
    },
    industry: {
      primary: 'Agriculture',
      secondary: 'Forestry'
    },
    projects: [
      {
        id: '1',
        clientName: 'Northern Australia Infrastructure Fund',
        description: 'Irrigation infrastructure expansion',
        startDate: '2023-06-01',
        endDate: '2025-05-31',
        workforce: 40,
        spend: 4500000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'Coles', projectDescription: 'Fresh produce supply agreement' },
      { id: '2', clientName: 'Woolworths', projectDescription: 'Melon and vegetable supply' },
      { id: '3', clientName: 'Quintis', projectDescription: 'Sandalwood harvesting partnership' },
      { id: '4', clientName: 'Department of Primary Industries', projectDescription: 'Agricultural innovation project' }
    ],
    equipment: [
      { id: '1', name: 'Harvester', description: 'John Deere S790 Combine Harvester' },
      { id: '2', name: 'Tractor', description: 'John Deere 8R 340 - Primary cultivation' },
      { id: '3', name: 'Irrigation System', description: 'Centre pivot irrigation infrastructure' },
      { id: '4', name: 'Cold Storage', description: 'Produce cold storage facility' }
    ],
    socialMedia: [
      { id: '1', type: 'LinkedIn', url: 'https://linkedin.com/company/ord-valley-ag' },
      { id: '2', type: 'Facebook', url: 'https://facebook.com/ordvalleyag' }
    ]
  },
  {
    id: '6',
    businessName: 'Fitzroy Valley Training Academy',
    abn: '66 666 666 666',
    acn: 'ACN 666 666 666',
    community: 'Kimberley Region',
    website: 'https://fvta.edu.au',
    generalInformation: 'Registered Training Organisation delivering vocational education to remote communities.',
    businessHistory: 'Established in 2008 to address training gaps in remote Kimberley communities.',
    missionStatement: 'Empowering Aboriginal people through culturally appropriate vocational education.',
    familyGroup: 'Group A',
    operationLength: 15,
    interestedInClosureWork: true,
    additionalSupportRequired: false,
    address: {
      street: '45 Laarri Street',
      street2: '',
      suburb: 'Fitzroy Crossing',
      state: 'WA',
      postcode: '6765'
    },
    contact: {
      primaryContactName: 'Julie Anderson',
      title: 'Ms',
      contactNumber: '08 9191 5500',
      email: 'admin@fvta.edu.au',
      contactType: 'CEO'
    },
    directors: [
      { id: '1', title: 'Chairperson', name: 'Elder Patricia Ross' },
      { id: '2', title: 'CEO', name: 'Julie Anderson' }
    ],
    workforce: {
      employeeNumber: '25-50',
      largestPeakWorkforce: 55,
      mainCompetencies: ['Vocational Training', 'Assessment', 'Community Education'],
      largestProjectManaged: 'Regional Training Delivery Program'
    },
    industry: {
      primary: 'Education',
      secondary: 'Community Services'
    },
    projects: [
      {
        id: '1',
        clientName: 'Department of Training and Workforce Development',
        description: 'Remote community training delivery contract',
        startDate: '2024-01-01',
        endDate: '2026-12-31',
        workforce: 35,
        spend: 2800000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'TAFE WA', projectDescription: 'Partnership training delivery' },
      { id: '2', clientName: 'Mining companies', projectDescription: 'Pre-employment training programs' },
      { id: '3', clientName: 'Shire of Derby-West Kimberley', projectDescription: 'Community capacity building' }
    ],
    equipment: [
      { id: '1', name: 'Training Vehicles', description: 'Heavy vehicle training fleet' },
      { id: '2', name: 'Mobile Training Unit', description: 'Containerised mobile training facility' },
      { id: '3', name: 'Simulation Equipment', description: 'Mining and construction simulators' }
    ],
    socialMedia: [
      { id: '1', type: 'Facebook', url: 'https://facebook.com/fvta' },
      { id: '2', type: 'LinkedIn', url: 'https://linkedin.com/company/fvta' }
    ]
  },
  {
    id: '7',
    businessName: 'Broome Indigenous Media',
    abn: '77 777 777 777',
    acn: 'ACN 777 777 777',
    community: 'Kimberley Region',
    website: 'https://bim.org.au',
    generalInformation: 'Indigenous media organisation producing radio, television and digital content.',
    businessHistory: 'Started as community radio in 1990, expanded to multi-platform media production.',
    missionStatement: 'Amplifying Aboriginal voices through media and storytelling.',
    familyGroup: 'Group B',
    operationLength: 33,
    interestedInClosureWork: false,
    additionalSupportRequired: false,
    address: {
      street: '8 Frederick Street',
      street2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725'
    },
    contact: {
      primaryContactName: 'Daniel Foster',
      title: 'Mr',
      contactNumber: '08 9192 8888',
      email: 'manager@bim.org.au',
      contactType: 'Station Manager'
    },
    directors: [
      { id: '1', title: 'Chairperson', name: 'Maria Edwards' },
      { id: '2', title: 'Deputy Chair', name: 'Robert Hunter' }
    ],
    workforce: {
      employeeNumber: '10-25',
      largestPeakWorkforce: 35,
      mainCompetencies: ['Media Production', 'Broadcasting', 'Digital Content'],
      largestProjectManaged: 'Documentary Series Production'
    },
    industry: {
      primary: 'Media',
      secondary: 'Education'
    },
    projects: [
      {
        id: '1',
        clientName: 'Screen Australia',
        description: 'Documentary series on Kimberley cultural heritage',
        startDate: '2024-03-01',
        endDate: '2025-02-28',
        workforce: 20,
        spend: 850000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'NITV', projectDescription: 'Programming content supply' },
      { id: '2', clientName: 'ABC', projectDescription: 'Regional news coverage partnership' },
      { id: '3', clientName: 'Tourism WA', projectDescription: 'Promotional video production' }
    ],
    equipment: [
      { id: '1', name: 'Broadcast Equipment', description: 'Radio broadcasting infrastructure' },
      { id: '2', name: 'Production Suite', description: 'Video production and editing suite' },
      { id: '3', name: 'OB Van', description: 'Outside broadcast vehicle' }
    ],
    socialMedia: [
      { id: '1', type: 'Facebook', url: 'https://facebook.com/broomeindigenousmedia' },
      { id: '2', type: 'Instagram', url: 'https://instagram.com/bim_media' },
      { id: '3', type: 'YouTube', url: 'https://youtube.com/@BIMMedia' }
    ]
  },
  {
    id: '8',
    businessName: 'Desert Rangers Land Management',
    abn: '88 888 888 888',
    acn: 'ACN 888 888 888',
    community: 'Kimberley Region',
    website: 'https://desertrangers.org.au',
    generalInformation: 'Indigenous ranger organisation delivering land and sea management programs.',
    businessHistory: 'Established in 2010 under Working on Country program to manage traditional lands.',
    missionStatement: 'Caring for country through traditional knowledge and modern science.',
    familyGroup: 'Group C',
    operationLength: 13,
    interestedInClosureWork: true,
    additionalSupportRequired: false,
    address: {
      street: '22 Anzac Drive',
      street2: '',
      suburb: 'Kununurra',
      state: 'WA',
      postcode: '6743'
    },
    contact: {
      primaryContactName: 'Thomas Walker',
      title: 'Mr',
      contactNumber: '08 9168 3500',
      email: 'coordinator@desertrangers.org.au',
      contactType: 'Program Coordinator'
    },
    directors: [
      { id: '1', title: 'Chairperson', name: 'Elder George Walker' },
      { id: '2', title: 'Deputy Chair', name: 'Sandra Mitchell' }
    ],
    workforce: {
      employeeNumber: '25-50',
      largestPeakWorkforce: 60,
      mainCompetencies: ['Land Management', 'Fire Management', 'Conservation'],
      largestProjectManaged: 'Carbon Abatement Fire Project'
    },
    industry: {
      primary: 'Environmental',
      secondary: 'Conservation'
    },
    projects: [
      {
        id: '1',
        clientName: 'Department of Biodiversity, Conservation and Attractions',
        description: 'Kimberley ranger program delivery',
        startDate: '2024-01-01',
        endDate: '2028-12-31',
        workforce: 45,
        spend: 8500000
      }
    ],
    previousClients: [
      { id: '1', clientName: 'DBCA', projectDescription: 'Joint management of conservation reserves' },
      { id: '2', clientName: 'Carbon Project Partners', projectDescription: 'Savanna burning carbon credits' },
      { id: '3', clientName: 'Mining Companies', projectDescription: 'Environmental monitoring and rehabilitation' },
      { id: '4', clientName: 'University of WA', projectDescription: 'Research partnerships' }
    ],
    equipment: [
      { id: '1', name: '4WD Vehicles', description: 'Ranger patrol vehicles (8x)' },
      { id: '2', name: 'Fire Units', description: 'Fire management slip-on units' },
      { id: '3', name: 'Boats', description: 'Sea patrol vessels (2x)' },
      { id: '4', name: 'Drones', description: 'Survey and monitoring drones' }
    ],
    socialMedia: [
      { id: '1', type: 'Facebook', url: 'https://facebook.com/desertrangers' },
      { id: '2', type: 'Instagram', url: 'https://instagram.com/desert_rangers' }
    ]
  }
];

export const industries = ['Construction', 'Mining', 'Agriculture', 'Tourism', 'Retail', 'Healthcare', 'Education', 'Media', 'Environmental'];
export const communities = ['Kimberley Region', 'Pilbara Region', 'Goldfields', 'Great Southern', 'Wheatbelt'];
export const familyGroups = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];