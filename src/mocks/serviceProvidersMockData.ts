export interface ServiceProviderAddress {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
}

export interface ContactPerson {
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  phone: string;
  mobile?: string;
}

export interface OpeningHours {
  monday: { open: string; close: string; closed: boolean };
  tuesday: { open: string; close: string; closed: boolean };
  wednesday: { open: string; close: string; closed: boolean };
  thursday: { open: string; close: string; closed: boolean };
  friday: { open: string; close: string; closed: boolean };
  saturday: { open: string; close: string; closed: boolean };
  sunday: { open: string; close: string; closed: boolean };
}

export interface OperationalDetails {
  businessHours: string;
  capacity: string;
  serviceAreas: string[];
  languages: string[];
  accreditations: string[];
  openHours: OpeningHours;
}

export interface FinancialDetails {
  feeStructure: string;
  paymentTerms: string;
  gstRegistered: boolean;
  insuranceDetails: string;
}

export interface ServiceProviderDetails {
  organizationType: string;
  abn: string;
  acn: string;
  registrationNumber: string;
  website: string;
  description: string;
  servicesOffered: string[];
  specializations: string[];
  address: ServiceProviderAddress;
  contactPerson: ContactPerson;
  operationalDetails: OperationalDetails;
  financialDetails: FinancialDetails;
  notes: string;
}

export interface ServiceProviderData {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive' | 'Pending';
  createdDate: string;
  daysAgo: string;
  avatar: string;
  details?: ServiceProviderDetails;
}

export const initialServiceProviderRecords: ServiceProviderData[] = [
  {
    id: 1,
    name: 'Kununurra Community Garden Kitchen',
    email: 'info@kcgk.org.au',
    phone: '+61 8 9168 1234',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'K',
    details: {
      organizationType: 'Community Group',
      abn: '12 345 678 901',
      acn: '',
      registrationNumber: 'CG-2020-001',
      website: 'https://www.kcgk.org.au',
      description: 'A community-driven initiative providing fresh, healthy food options and cooking education to the Kununurra community through sustainable gardening practices.',
      servicesOffered: [
        'Community garden management',
        'Cooking classes and workshops',
        'Nutrition education programs',
        'Fresh produce distribution',
        'School garden programs'
      ],
      specializations: [
        'Indigenous food education',
        'Sustainable agriculture',
        'Community engagement',
        'Youth development'
      ],
      address: {
        street: '25 Messmate Way',
        suburb: 'Kununurra',
        state: 'WA',
        postcode: '6743',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Sarah',
        lastName: 'Mitchell',
        position: 'Community Coordinator',
        email: 'sarah.mitchell@kcgk.org.au',
        phone: '+61 8 9168 1234',
        mobile: '+61 456 789 123'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:00 AM - 4:00 PM, Sat 9:00 AM - 1:00 PM',
        capacity: '150 community members per month',
        serviceAreas: [
          'Kununurra Township',
          'East Kimberley Region',
          'Remote Communities'
        ],
        languages: [
          'English',
          'Kriol',
          'Traditional Languages'
        ],
        accreditations: [
          'Food Safety Certification',
          'Community Services Registration'
        ],
        openHours: {
          monday: { open: '08:00', close: '16:00', closed: false },
          tuesday: { open: '08:00', close: '16:00', closed: false },
          wednesday: { open: '08:00', close: '16:00', closed: false },
          thursday: { open: '08:00', close: '16:00', closed: false },
          friday: { open: '08:00', close: '16:00', closed: false },
          saturday: { open: '09:00', close: '13:00', closed: false },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'No Fee/Volunteer',
        paymentTerms: 'N/A - Community Service',
        gstRegistered: false,
        insuranceDetails: 'Public liability insurance through Community Sector Banking'
      },
      notes: 'Established in 2020 with support from local traditional owners. Strong focus on cultural preservation and food sovereignty.'
    }
  },
  {
    id: 2,
    name: 'Wunan Foundation',
    email: 'info@wunan.org.au',
    phone: '+61 8 9168 3881',
    status: 'Active',
    createdDate: 'Mar 15, 2024',
    daysAgo: '(300 days ago)',
    avatar: 'W',
    details: {
      organizationType: 'NGO',
      abn: '65 112 756 244',
      acn: '',
      registrationNumber: 'NGO-2012-045',
      website: 'https://www.wunan.org.au',
      description: 'Wunan Foundation is an Indigenous-led organization dedicated to improving outcomes for Aboriginal people in the East Kimberley through sustainable employment, education, and community development programs.',
      servicesOffered: [
        'Employment services and job placement',
        'Training and skills development',
        'Housing support services',
        'Financial literacy programs',
        'Youth mentoring and support'
      ],
      specializations: [
        'Indigenous employment pathways',
        'Economic development',
        'Community capacity building',
        'Cultural support services'
      ],
      address: {
        street: '54 Coolibah Drive',
        suburb: 'Kununurra',
        state: 'WA',
        postcode: '6743',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Daniel',
        lastName: 'Tucker',
        position: 'CEO',
        email: 'daniel.tucker@wunan.org.au',
        phone: '+61 8 9168 3881',
        mobile: '+61 412 345 678'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:30 AM - 5:00 PM',
        capacity: '500+ clients per year',
        serviceAreas: ['East Kimberley Region', 'Kununurra Township', 'Remote Communities', 'Halls Creek'],
        languages: ['English', 'Kriol', 'Traditional Languages'],
        accreditations: ['ISO 9001:2015', 'National Standards for Disability Services', 'ACNC Registered Charity'],
        openHours: {
          monday: { open: '08:30', close: '17:00', closed: false },
          tuesday: { open: '08:30', close: '17:00', closed: false },
          wednesday: { open: '08:30', close: '17:00', closed: false },
          thursday: { open: '08:30', close: '17:00', closed: false },
          friday: { open: '08:30', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Government funded - No cost to clients',
        paymentTerms: 'N/A',
        gstRegistered: true,
        insuranceDetails: 'Comprehensive public liability and professional indemnity insurance'
      },
      notes: 'One of the leading Indigenous organizations in the Kimberley. Strong partnerships with local businesses and government agencies.'
    }
  },
  {
    id: 3,
    name: 'Kununurra Neighbourhood House',
    email: 'admin@knh.org.au',
    phone: '+61 8 9169 1234',
    status: 'Active',
    createdDate: 'Jun 20, 2024',
    daysAgo: '(203 days ago)',
    avatar: 'K',
    details: {
      organizationType: 'Community Group',
      abn: '45 678 901 234',
      acn: '',
      registrationNumber: 'CG-2015-023',
      website: 'https://www.knh.org.au',
      description: 'Kununurra Neighbourhood House provides a welcoming space for community connection, offering support services, educational programs, and social activities for residents of all ages.',
      servicesOffered: [
        'Emergency relief and food assistance',
        'Computer and internet access',
        'Community events and activities',
        'Parenting support programs',
        'Seniors social groups'
      ],
      specializations: [
        'Community development',
        'Social inclusion programs',
        'Family support',
        'Emergency assistance'
      ],
      address: {
        street: '12 Konkerberry Drive',
        suburb: 'Kununurra',
        state: 'WA',
        postcode: '6743',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Jenny',
        lastName: 'Williams',
        position: 'Manager',
        email: 'jenny.williams@knh.org.au',
        phone: '+61 8 9169 1234',
        mobile: '+61 423 456 789'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 9:00 AM - 3:00 PM',
        capacity: '100 visitors per week',
        serviceAreas: ['Kununurra Township', 'Surrounding areas'],
        languages: ['English', 'Kriol'],
        accreditations: ['Neighbourhood Houses Victoria Member', 'ACNC Registered'],
        openHours: {
          monday: { open: '09:00', close: '15:00', closed: false },
          tuesday: { open: '09:00', close: '15:00', closed: false },
          wednesday: { open: '09:00', close: '15:00', closed: false },
          thursday: { open: '09:00', close: '15:00', closed: false },
          friday: { open: '09:00', close: '15:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Free services / Gold coin donation for some activities',
        paymentTerms: 'N/A',
        gstRegistered: false,
        insuranceDetails: 'Public liability through WA Neighbourhood Houses Association'
      },
      notes: 'Strong volunteer base. Hub for community information and referrals.'
    }
  },
  {
    id: 4,
    name: 'Services Australia',
    email: 'kununurra@servicesaustralia.gov.au',
    phone: '132 850',
    status: 'Active',
    createdDate: 'Jan 01, 2020',
    daysAgo: '(1833 days ago)',
    avatar: 'S',
    details: {
      organizationType: 'Government Agency',
      abn: '90 794 605 008',
      acn: '',
      registrationNumber: 'GOV-FED-001',
      website: 'https://www.servicesaustralia.gov.au',
      description: 'Services Australia delivers a range of government payments and services to Australians including Centrelink, Medicare, and Child Support services.',
      servicesOffered: [
        'Centrelink payments (JobSeeker, Youth Allowance, etc.)',
        'Medicare services',
        'MyGov support',
        'Employment services referrals',
        'Crisis and emergency payments'
      ],
      specializations: [
        'Social security payments',
        'Government services delivery',
        'Employment pathway support',
        'Remote area services'
      ],
      address: {
        street: '67 Coolibah Drive',
        suburb: 'Kununurra',
        state: 'WA',
        postcode: '6743',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Regional',
        lastName: 'Manager',
        position: 'Service Centre Manager',
        email: 'kununurra@servicesaustralia.gov.au',
        phone: '132 850'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:30 AM - 4:30 PM',
        capacity: 'Walk-in and appointments available',
        serviceAreas: ['East Kimberley Region', 'Remote Communities'],
        languages: ['English', 'Interpreter services available'],
        accreditations: ['Australian Government Agency'],
        openHours: {
          monday: { open: '08:30', close: '16:30', closed: false },
          tuesday: { open: '08:30', close: '16:30', closed: false },
          wednesday: { open: '08:30', close: '16:30', closed: false },
          thursday: { open: '08:30', close: '16:30', closed: false },
          friday: { open: '08:30', close: '16:30', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Free government services',
        paymentTerms: 'N/A',
        gstRegistered: true,
        insuranceDetails: 'Commonwealth Government insured'
      },
      notes: 'Primary federal government service delivery point for the East Kimberley region.'
    }
  },
  {
    id: 5,
    name: 'Kimberley Community Legal Services (KCLS)',
    email: 'kcls@kcls.org.au',
    phone: '+61 8 9194 3744',
    status: 'Active',
    createdDate: 'Feb 10, 2023',
    daysAgo: '(700 days ago)',
    avatar: 'K',
    details: {
      organizationType: 'Legal Service',
      abn: '23 456 789 012',
      acn: '',
      registrationNumber: 'LS-2005-012',
      website: 'https://www.kcls.org.au',
      description: 'Kimberley Community Legal Services provides free legal assistance to disadvantaged and vulnerable people across the Kimberley region, with a focus on Aboriginal and Torres Strait Islander communities.',
      servicesOffered: [
        'Free legal advice and information',
        'Court representation',
        'Tenancy advocacy',
        'Family law assistance',
        'Community legal education'
      ],
      specializations: [
        'Indigenous legal rights',
        'Family and domestic violence matters',
        'Tenancy and housing law',
        'Criminal law assistance'
      ],
      address: {
        street: '15 Carnarvon Street',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Amanda',
        lastName: 'Forrester',
        position: 'Principal Solicitor',
        email: 'amanda.forrester@kcls.org.au',
        phone: '+61 8 9194 3744',
        mobile: '+61 434 567 890'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 9:00 AM - 5:00 PM',
        capacity: '200+ matters per month',
        serviceAreas: ['Broome Region', 'East Kimberley Region', 'Remote Communities', 'Fitzroy Crossing'],
        languages: ['English', 'Kriol', 'Interpreter services'],
        accreditations: ['Legal Practice Board of WA', 'National Association of Community Legal Centres'],
        openHours: {
          monday: { open: '09:00', close: '17:00', closed: false },
          tuesday: { open: '09:00', close: '17:00', closed: false },
          wednesday: { open: '09:00', close: '17:00', closed: false },
          thursday: { open: '09:00', close: '17:00', closed: false },
          friday: { open: '09:00', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Free legal services (means tested)',
        paymentTerms: 'N/A',
        gstRegistered: true,
        insuranceDetails: 'Professional indemnity insurance through Law Society'
      },
      notes: 'Outreach services to Kununurra, Derby, and Fitzroy Crossing. Strong focus on family violence prevention.'
    }
  },
  {
    id: 6,
    name: '54 Reasons',
    email: 'info@54reasons.org.au',
    phone: '+61 8 9192 8800',
    status: 'Active',
    createdDate: 'Aug 05, 2023',
    daysAgo: '(523 days ago)',
    avatar: '5',
    details: {
      organizationType: 'NGO',
      abn: '34 567 890 123',
      acn: '',
      registrationNumber: 'NGO-2018-089',
      website: 'https://www.54reasons.org.au',
      description: '54 Reasons is a youth-focused organization working across the Kimberley to support young Aboriginal people through education, employment, and wellbeing programs.',
      servicesOffered: [
        'Youth mentoring programs',
        'School engagement support',
        'Employment pathways for young people',
        'Life skills training',
        'Cultural connection activities'
      ],
      specializations: [
        'Youth development',
        'School to work transitions',
        'Cultural identity programs',
        'Mental health first aid'
      ],
      address: {
        street: '28 Dampier Terrace',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Marcus',
        lastName: 'Johnson',
        position: 'Programs Director',
        email: 'marcus.johnson@54reasons.org.au',
        phone: '+61 8 9192 8800',
        mobile: '+61 445 678 901'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:00 AM - 5:00 PM',
        capacity: '300 young people per year',
        serviceAreas: ['Broome Region', 'East Kimberley Region', 'Remote Communities'],
        languages: ['English', 'Kriol', 'Traditional Languages'],
        accreditations: ['Youth Work Australia Member', 'ACNC Registered Charity'],
        openHours: {
          monday: { open: '08:00', close: '17:00', closed: false },
          tuesday: { open: '08:00', close: '17:00', closed: false },
          wednesday: { open: '08:00', close: '17:00', closed: false },
          thursday: { open: '08:00', close: '17:00', closed: false },
          friday: { open: '08:00', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'No cost - Funded programs',
        paymentTerms: 'N/A',
        gstRegistered: true,
        insuranceDetails: 'Comprehensive insurance coverage for youth activities'
      },
      notes: 'Named after the 54 remote Aboriginal communities across the Kimberley. Strong partnerships with schools and employers.'
    }
  },
  {
    id: 7,
    name: 'Key Assets',
    email: 'kimberley@keyassets.com.au',
    phone: '+61 8 9192 2000',
    status: 'Active',
    createdDate: 'Nov 20, 2023',
    daysAgo: '(416 days ago)',
    avatar: 'K',
    details: {
      organizationType: 'Private Company',
      abn: '56 789 012 345',
      acn: '123 456 789',
      registrationNumber: 'PC-2010-067',
      website: 'https://www.keyassets.com.au',
      description: 'Key Assets is a leading foster care and out-of-home care provider, supporting children and young people in the Kimberley region with safe, nurturing family-based placements.',
      servicesOffered: [
        'Foster care placements',
        'Kinship care support',
        'Carer recruitment and training',
        'Therapeutic care services',
        'Family reunification support'
      ],
      specializations: [
        'Aboriginal and Torres Strait Islander placements',
        'Trauma-informed care',
        'Therapeutic foster care',
        'Carer support services'
      ],
      address: {
        street: '45 Frederick Street',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Linda',
        lastName: 'Patterson',
        position: 'Regional Manager',
        email: 'linda.patterson@keyassets.com.au',
        phone: '+61 8 9192 2000',
        mobile: '+61 456 123 789'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:30 AM - 5:00 PM (24/7 crisis support)',
        capacity: '80 foster care placements',
        serviceAreas: ['Broome Region', 'East Kimberley Region', 'Remote Communities', 'Pilbara Region'],
        languages: ['English', 'Kriol', 'Interpreter services'],
        accreditations: ['Department of Communities Registered', 'NDIS Registered Provider'],
        openHours: {
          monday: { open: '08:30', close: '17:00', closed: false },
          tuesday: { open: '08:30', close: '17:00', closed: false },
          wednesday: { open: '08:30', close: '17:00', closed: false },
          thursday: { open: '08:30', close: '17:00', closed: false },
          friday: { open: '08:30', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Government funded placements',
        paymentTerms: 'Department of Communities contracts',
        gstRegistered: true,
        insuranceDetails: 'Comprehensive professional indemnity and public liability'
      },
      notes: 'Priority given to placing Aboriginal children with Aboriginal carers. Cultural support plans for all placements.'
    }
  },
  {
    id: 8,
    name: 'OVAHS (Ord Valley Aboriginal Health Service)',
    email: 'reception@ovahs.org.au',
    phone: '+61 8 9168 1988',
    status: 'Active',
    createdDate: 'May 10, 2022',
    daysAgo: '(975 days ago)',
    avatar: 'O',
    details: {
      organizationType: 'Health Service',
      abn: '67 890 123 456',
      acn: '',
      registrationNumber: 'HS-2008-034',
      website: 'https://www.ovahs.org.au',
      description: 'OVAHS is an Aboriginal Community Controlled Health Service providing comprehensive primary health care to Aboriginal and Torres Strait Islander people in the East Kimberley.',
      servicesOffered: [
        'GP and medical services',
        'Chronic disease management',
        'Maternal and child health',
        'Mental health and social emotional wellbeing',
        'Dental services'
      ],
      specializations: [
        'Aboriginal primary health care',
        'Chronic disease programs (diabetes, heart, kidney)',
        'Social emotional wellbeing',
        'Cultural healing'
      ],
      address: {
        street: '78 Coolibah Drive',
        suburb: 'Kununurra',
        state: 'WA',
        postcode: '6743',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Dr. James',
        lastName: 'Yunupingu',
        position: 'Clinical Director',
        email: 'james.yunupingu@ovahs.org.au',
        phone: '+61 8 9168 1988',
        mobile: '+61 467 234 567'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:00 AM - 5:00 PM',
        capacity: '150 patients per day',
        serviceAreas: ['Kununurra Township', 'East Kimberley Region', 'Remote Communities'],
        languages: ['English', 'Kriol', 'Traditional Languages', 'Interpreter services'],
        accreditations: ['RACGP Accredited', 'AGPAL Accredited', 'NACCHO Member'],
        openHours: {
          monday: { open: '08:00', close: '17:00', closed: false },
          tuesday: { open: '08:00', close: '17:00', closed: false },
          wednesday: { open: '08:00', close: '17:00', closed: false },
          thursday: { open: '08:00', close: '17:00', closed: false },
          friday: { open: '08:00', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Bulk billing for Aboriginal and Torres Strait Islander patients',
        paymentTerms: 'Medicare and government funded',
        gstRegistered: true,
        insuranceDetails: 'Medical indemnity and public liability insurance'
      },
      notes: 'Community controlled health service. Strong focus on closing the gap initiatives.'
    }
  },
  {
    id: 9,
    name: 'Anglicare WA',
    email: 'kimberley@anglicarewa.org.au',
    phone: '+61 8 9192 8555',
    status: 'Active',
    createdDate: 'Apr 15, 2024',
    daysAgo: '(269 days ago)',
    avatar: 'A',
    details: {
      organizationType: 'NGO',
      abn: '78 901 234 567',
      acn: '',
      registrationNumber: 'NGO-1998-015',
      website: 'https://www.anglicarewa.org.au',
      description: 'Anglicare WA provides a range of community services including family support, emergency relief, financial counselling, and housing assistance across the Kimberley region.',
      servicesOffered: [
        'Emergency relief and food assistance',
        'Financial counselling',
        'Housing support services',
        'Family and relationship counselling',
        'Disaster recovery support'
      ],
      specializations: [
        'Emergency assistance',
        'Financial hardship support',
        'Family services',
        'Community resilience'
      ],
      address: {
        street: '32 Short Street',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Rebecca',
        lastName: 'Thompson',
        position: 'Kimberley Services Manager',
        email: 'rebecca.thompson@anglicarewa.org.au',
        phone: '+61 8 9192 8555',
        mobile: '+61 478 345 678'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 9:00 AM - 4:30 PM',
        capacity: '500+ clients per year',
        serviceAreas: ['Broome Region', 'East Kimberley Region', 'Derby', 'Fitzroy Crossing'],
        languages: ['English', 'Kriol', 'Interpreter services'],
        accreditations: ['ACNC Registered Charity', 'QIC Accredited'],
        openHours: {
          monday: { open: '09:00', close: '16:30', closed: false },
          tuesday: { open: '09:00', close: '16:30', closed: false },
          wednesday: { open: '09:00', close: '16:30', closed: false },
          thursday: { open: '09:00', close: '16:30', closed: false },
          friday: { open: '09:00', close: '16:30', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Free services - means tested for some programs',
        paymentTerms: 'N/A',
        gstRegistered: true,
        insuranceDetails: 'Comprehensive organisational insurance'
      },
      notes: 'Part of the Anglican Diocese. Strong partnerships with other service providers in the region.'
    }
  },
  {
    id: 10,
    name: 'BOAB Health',
    email: 'info@boabhealth.org.au',
    phone: '+61 8 9191 3200',
    status: 'Active',
    createdDate: 'Sep 01, 2023',
    daysAgo: '(496 days ago)',
    avatar: 'B',
    details: {
      organizationType: 'Health Service',
      abn: '89 012 345 678',
      acn: '',
      registrationNumber: 'HS-2015-078',
      website: 'https://www.boabhealth.org.au',
      description: 'BOAB Health is a not-for-profit health service providing comprehensive primary care, mental health services, and specialist outreach to communities across the West Kimberley.',
      servicesOffered: [
        'Primary health care',
        'Mental health services',
        'Drug and alcohol counselling',
        'Visiting specialist clinics',
        'Health promotion programs'
      ],
      specializations: [
        'Mental health and wellbeing',
        'Substance use disorders',
        'Indigenous health',
        'Youth health services'
      ],
      address: {
        street: '56 Loch Street',
        suburb: 'Derby',
        state: 'WA',
        postcode: '6728',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Dr. Susan',
        lastName: 'Clarke',
        position: 'CEO',
        email: 'susan.clarke@boabhealth.org.au',
        phone: '+61 8 9191 3200',
        mobile: '+61 489 456 789'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:30 AM - 5:00 PM',
        capacity: '100 patients per day',
        serviceAreas: ['Derby', 'Fitzroy Crossing', 'Remote Communities', 'Broome Region'],
        languages: ['English', 'Kriol', 'Traditional Languages'],
        accreditations: ['AGPAL Accredited', 'Quality Improvement Council'],
        openHours: {
          monday: { open: '08:30', close: '17:00', closed: false },
          tuesday: { open: '08:30', close: '17:00', closed: false },
          wednesday: { open: '08:30', close: '17:00', closed: false },
          thursday: { open: '08:30', close: '17:00', closed: false },
          friday: { open: '08:30', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Bulk billing available',
        paymentTerms: 'Medicare and government funded',
        gstRegistered: true,
        insuranceDetails: 'Medical indemnity and public liability'
      },
      notes: 'Named after the iconic Boab tree of the Kimberley. Strong focus on mental health services.'
    }
  },
  {
    id: 11,
    name: 'Kimberley Training Institute',
    email: 'info@kti.wa.edu.au',
    phone: '+61 8 9194 6300',
    status: 'Active',
    createdDate: 'Jan 10, 2024',
    daysAgo: '(364 days ago)',
    avatar: 'K',
    details: {
      organizationType: 'Government Agency',
      abn: '90 123 456 789',
      acn: '',
      registrationNumber: 'RTO-4756',
      website: 'https://www.kti.wa.edu.au',
      description: 'Kimberley Training Institute is a registered training organization delivering vocational education and training across the Kimberley region, with a focus on industry-relevant skills.',
      servicesOffered: [
        'Certificate and diploma courses',
        'Apprenticeship programs',
        'Traineeship pathways',
        'Short courses and skill sets',
        'Industry partnerships'
      ],
      specializations: [
        'Mining and resources training',
        'Construction trades',
        'Health and community services',
        'Tourism and hospitality'
      ],
      address: {
        street: '90 Cable Beach Road',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Robert',
        lastName: 'Henderson',
        position: 'Campus Manager',
        email: 'robert.henderson@kti.wa.edu.au',
        phone: '+61 8 9194 6300',
        mobile: '+61 490 567 890'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:00 AM - 4:30 PM',
        capacity: '1500 students per year',
        serviceAreas: ['Broome Region', 'East Kimberley Region', 'Remote Communities', 'Pilbara Region'],
        languages: ['English', 'Interpreter services'],
        accreditations: ['ASQA Registered Training Organization', 'WA Department of Training'],
        openHours: {
          monday: { open: '08:00', close: '16:30', closed: false },
          tuesday: { open: '08:00', close: '16:30', closed: false },
          wednesday: { open: '08:00', close: '16:30', closed: false },
          thursday: { open: '08:00', close: '16:30', closed: false },
          friday: { open: '08:00', close: '16:30', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Government subsidized courses available',
        paymentTerms: 'Upfront or payment plans',
        gstRegistered: true,
        insuranceDetails: 'WA Government insured'
      },
      notes: 'Campuses in Broome and Kununurra. Strong industry partnerships for job placements.'
    }
  },
  {
    id: 12,
    name: 'Nirrumbuk Aboriginal Corporation',
    email: 'admin@nirrumbuk.org.au',
    phone: '+61 8 9192 1298',
    status: 'Active',
    createdDate: 'Jul 05, 2024',
    daysAgo: '(188 days ago)',
    avatar: 'N',
    details: {
      organizationType: 'Community Group',
      abn: '01 234 567 890',
      acn: '',
      registrationNumber: 'CG-2002-089',
      website: 'https://www.nirrumbuk.org.au',
      description: 'Nirrumbuk is an Aboriginal community-controlled organization providing environmental and land management services, creating employment pathways for local Indigenous people.',
      servicesOffered: [
        'Land management and conservation',
        'Environmental monitoring',
        'Ranger programs',
        'Cultural heritage protection',
        'Employment and training'
      ],
      specializations: [
        'Indigenous land management',
        'Environmental services',
        'Cultural heritage preservation',
        'Indigenous employment'
      ],
      address: {
        street: '15 Weld Street',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Wayne',
        lastName: 'Bergmann',
        position: 'Executive Director',
        email: 'wayne.bergmann@nirrumbuk.org.au',
        phone: '+61 8 9192 1298',
        mobile: '+61 401 678 901'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:00 AM - 4:00 PM',
        capacity: '50 ranger positions',
        serviceAreas: ['Broome Region', 'Remote Communities', 'Dampier Peninsula'],
        languages: ['English', 'Yawuru', 'Kriol', 'Traditional Languages'],
        accreditations: ['ORIC Registered', 'Environmental Management ISO 14001'],
        openHours: {
          monday: { open: '08:00', close: '16:00', closed: false },
          tuesday: { open: '08:00', close: '16:00', closed: false },
          wednesday: { open: '08:00', close: '16:00', closed: false },
          thursday: { open: '08:00', close: '16:00', closed: false },
          friday: { open: '08:00', close: '16:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Contract-based services',
        paymentTerms: '30 days',
        gstRegistered: true,
        insuranceDetails: 'Public liability and workers compensation'
      },
      notes: 'Leading Indigenous environmental organization. Partners with mining companies for rehabilitation work.'
    }
  },
  {
    id: 13,
    name: 'Centacare Kimberley',
    email: 'kimberley@centacare.wa.org.au',
    phone: '+61 8 9192 9400',
    status: 'Inactive',
    createdDate: 'Dec 01, 2022',
    daysAgo: '(769 days ago)',
    avatar: 'C',
    details: {
      organizationType: 'NGO',
      abn: '12 345 678 901',
      acn: '',
      registrationNumber: 'NGO-1995-008',
      website: 'https://www.centacarekimberley.org.au',
      description: 'Centacare Kimberley provides family and relationship services, disability support, and community programs to people in the Kimberley region.',
      servicesOffered: [
        'Family relationship counselling',
        'NDIS support coordination',
        'Parenting programs',
        'Mediation services',
        'Community education'
      ],
      specializations: [
        'Family and relationship support',
        'Disability services',
        'Child and family services',
        'Community programs'
      ],
      address: {
        street: '24 Robinson Street',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Patricia',
        lastName: 'Gomez',
        position: 'Regional Coordinator',
        email: 'patricia.gomez@centacare.wa.org.au',
        phone: '+61 8 9192 9400',
        mobile: '+61 412 789 012'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 9:00 AM - 5:00 PM',
        capacity: '300 clients per year',
        serviceAreas: ['Broome Region', 'East Kimberley Region'],
        languages: ['English', 'Kriol', 'Interpreter services'],
        accreditations: ['NDIS Registered Provider', 'Family Relationships Services Australia'],
        openHours: {
          monday: { open: '09:00', close: '17:00', closed: false },
          tuesday: { open: '09:00', close: '17:00', closed: false },
          wednesday: { open: '09:00', close: '17:00', closed: false },
          thursday: { open: '09:00', close: '17:00', closed: false },
          friday: { open: '09:00', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Sliding scale based on income',
        paymentTerms: 'Per session or bulk billed',
        gstRegistered: true,
        insuranceDetails: 'Professional indemnity insurance'
      },
      notes: 'Part of the Catholic Diocese. Currently undergoing service review - temporarily reduced capacity.'
    }
  },
  {
    id: 14,
    name: 'Kimberley Aboriginal Medical Services',
    email: 'admin@kams.org.au',
    phone: '+61 8 9194 3200',
    status: 'Active',
    createdDate: 'Feb 20, 2021',
    daysAgo: '(1418 days ago)',
    avatar: 'K',
    details: {
      organizationType: 'Health Service',
      abn: '23 456 789 012',
      acn: '',
      registrationNumber: 'HS-1986-001',
      website: 'https://www.kams.org.au',
      description: 'KAMS is the regional Aboriginal Community Controlled Health Organisation providing leadership, advocacy, and clinical support to member health services across the Kimberley.',
      servicesOffered: [
        'Regional health coordination',
        'Public health programs',
        'Workforce development',
        'Clinical governance support',
        'Health advocacy'
      ],
      specializations: [
        'Aboriginal health policy',
        'Regional health coordination',
        'Public health initiatives',
        'Health workforce development'
      ],
      address: {
        street: '12 Napier Terrace',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Dr. Marianne',
        lastName: 'Wood',
        position: 'CEO',
        email: 'marianne.wood@kams.org.au',
        phone: '+61 8 9194 3200',
        mobile: '+61 423 890 123'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:30 AM - 4:30 PM',
        capacity: 'Regional coordination role',
        serviceAreas: ['All Kimberley Region', 'Remote Communities'],
        languages: ['English', 'Kriol', 'Traditional Languages'],
        accreditations: ['AHMAC Member', 'NACCHO Member', 'ACHWA Member'],
        openHours: {
          monday: { open: '08:30', close: '16:30', closed: false },
          tuesday: { open: '08:30', close: '16:30', closed: false },
          wednesday: { open: '08:30', close: '16:30', closed: false },
          thursday: { open: '08:30', close: '16:30', closed: false },
          friday: { open: '08:30', close: '16:30', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Government funded - no direct client fees',
        paymentTerms: 'N/A',
        gstRegistered: true,
        insuranceDetails: 'Comprehensive organisational insurance'
      },
      notes: 'Peak body for Aboriginal health in the Kimberley. Coordinates services across 6 member health services.'
    }
  },
  {
    id: 15,
    name: 'East Kimberley Job Pathways',
    email: 'info@ekjp.org.au',
    phone: '+61 8 9168 2500',
    status: 'Pending',
    createdDate: 'Dec 15, 2024',
    daysAgo: '(24 days ago)',
    avatar: 'E',
    details: {
      organizationType: 'Private Company',
      abn: '34 567 890 123',
      acn: '234 567 890',
      registrationNumber: 'ESP-2024-045',
      website: 'https://www.ekjp.org.au',
      description: 'East Kimberley Job Pathways is a new employment services provider focused on connecting local job seekers with employment opportunities in the East Kimberley region.',
      servicesOffered: [
        'Job placement services',
        'Resume and interview preparation',
        'Skills assessment',
        'Employer liaison',
        'Post-placement support'
      ],
      specializations: [
        'Local employment matching',
        'Indigenous employment',
        'Mining and resources placements',
        'Hospitality sector'
      ],
      address: {
        street: '33 Banksia Street',
        suburb: 'Kununurra',
        state: 'WA',
        postcode: '6743',
        country: 'Australia'
      },
      contactPerson: {
        firstName: 'Michelle',
        lastName: 'Santos',
        position: 'Director',
        email: 'michelle.santos@ekjp.org.au',
        phone: '+61 8 9168 2500',
        mobile: '+61 434 901 234'
      },
      operationalDetails: {
        businessHours: 'Mon-Fri 8:30 AM - 5:00 PM',
        capacity: 'New provider - building capacity',
        serviceAreas: ['Kununurra Township', 'East Kimberley Region'],
        languages: ['English', 'Kriol'],
        accreditations: ['Pending Workforce Australia registration'],
        openHours: {
          monday: { open: '08:30', close: '17:00', closed: false },
          tuesday: { open: '08:30', close: '17:00', closed: false },
          wednesday: { open: '08:30', close: '17:00', closed: false },
          thursday: { open: '08:30', close: '17:00', closed: false },
          friday: { open: '08:30', close: '17:00', closed: false },
          saturday: { open: '09:00', close: '17:00', closed: true },
          sunday: { open: '09:00', close: '17:00', closed: true }
        }
      },
      financialDetails: {
        feeStructure: 'Fee-free services for job seekers',
        paymentTerms: 'Outcome-based payments from employers',
        gstRegistered: true,
        insuranceDetails: 'Public liability and professional indemnity'
      },
      notes: 'New provider awaiting Workforce Australia contract approval. Strong local connections.'
    }
  }
];

export const serviceProviderStatuses = ['Active', 'Inactive', 'Pending'] as const;
export const organizationTypes = ['Community Group', 'NGO', 'Government Agency', 'Private Company', 'Health Service', 'Legal Service'];
export const serviceAreas = ['Kununurra Township', 'East Kimberley Region', 'Remote Communities', 'Broome Region', 'Pilbara Region'];
export const languages = ['English', 'Kriol', 'Traditional Languages', 'Other'];

export const getAvatarColor = (name: string) => {
  const colors = [
    '#8E44AD', '#3498DB', '#E67E22', '#E74C3C', '#2ECC71',
    '#9B59B6', '#34495E', '#F39C12', '#27AE60', '#2980B9'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};