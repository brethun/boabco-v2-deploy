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
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'W'
  },
  {
    id: 3,
    name: 'Kununurra Neighbourhood House',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'K'
  },
  {
    id: 4,
    name: 'Services Australia',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'S'
  },
  {
    id: 5,
    name: 'Kimberley Community Legal Services (KCLS)',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'K'
  },
  {
    id: 6,
    name: '54 Reasons',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: '5'
  },
  {
    id: 7,
    name: 'Key Assets',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'K'
  },
  {
    id: 8,
    name: 'OVAHS (Ord Valley Aboriginal Health Service)',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'O'
  },
  {
    id: 9,
    name: 'Anglicare WA',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'A'
  },
  {
    id: 10,
    name: 'BOAB Health',
    email: 'No email',
    phone: 'No phone',
    status: 'Active',
    createdDate: 'Jul 12, 2025',
    daysAgo: '(15 days ago)',
    avatar: 'B'
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