import { JobData } from '../features/jobs/types';
import { initialBusinessRecords } from './businessMockData';

export const initialJobRecords: JobData[] = [
  {
    id: '1',
    title: 'Community Support Worker',
    businessId: '1',
    business: {
      id: '1',
      name: 'Services Australia',
      industry: {
        primary: 'Community Services',
        secondary: ['Social Work', 'Community Development']
      },
      location: {
        city: 'Kununurra',
        state: 'WA'
      }
    },
    location: 'Kununurra, WA',
    jobType: 'Full-time',
    status: 'Open',
    salary: '$65,000 - $75,000',
    postedDate: 'Jul 20, 2025',
    closingDate: 'Aug 15, 2025',
    daysAgo: '(7 days ago)',
    applicationsCount: 12,
    avatar: 'C',
    priority: 'high',
    details: {
      description: 'We are seeking a passionate Community Support Worker to join our team in Kununurra. This role involves working directly with community members to provide holistic support and advocacy services.',
      requirements: [
        {
          id: '1',
          type: 'essential',
          description: 'Certificate IV in Community Services or equivalent',
          skillId: 'community-services'
        },
        {
          id: '2',
          type: 'essential',
          description: 'Current drivers license'
        },
        {
          id: '3',
          type: 'essential',
          description: 'Experience working with Aboriginal and Torres Strait Islander communities'
        },
        {
          id: '4',
          type: 'desirable',
          description: 'Strong communication and interpersonal skills'
        }
      ],
      responsibilities: [
        {
          id: '1',
          description: 'Provide direct support to community members',
          priority: 'high'
        },
        {
          id: '2',
          description: 'Develop and implement support plans',
          priority: 'high'
        },
        {
          id: '3',
          description: 'Coordinate with other service providers',
          priority: 'medium'
        },
        {
          id: '4',
          description: 'Maintain accurate case notes and documentation',
          priority: 'medium'
        }
      ],
      benefits: [
        {
          id: '1',
          description: 'Competitive salary package',
          category: 'compensation'
        },
        {
          id: '2',
          description: 'Professional development opportunities',
          category: 'professional'
        },
        {
          id: '3',
          description: 'Flexible working arrangements',
          category: 'lifestyle'
        },
        {
          id: '4',
          description: 'Cultural leave',
          category: 'lifestyle'
        }
      ],
      applicationDeadline: 'Aug 15, 2025',
      contactPerson: {
        name: 'Sarah Thompson',
        position: 'HR Manager',
        email: 'sarah.thompson@wunan.org.au',
        phone: '+61 8 9168 5555'
      },
      workingHours: 'Monday to Friday, 9:00 AM - 5:00 PM',
      startDate: 'September 2025',
      contractLength: 'Ongoing',
      selectionCriteria: 'Applicants must address the selection criteria outlined in the position description.',
      requiredSkills: [
        {
          skillId: 'communication',
          skillName: 'Communication',
          minimumRating: 'Intermediate',
          importance: 'essential'
        },
        {
          skillId: 'case-management',
          skillName: 'Case Management',
          minimumRating: 'Intermediate',
          importance: 'essential'
        },
        {
          skillId: 'cultural-competency',
          skillName: 'Cultural Competency',
          minimumRating: 'Advanced',
          importance: 'essential'
        }
      ],
      requiredCompetencies: [
        {
          competencyId: 'community-engagement',
          competencyName: 'Community Engagement',
          minimumRating: 'Advanced',
          importance: 'essential'
        },
        {
          competencyId: 'problem-solving',
          competencyName: 'Problem Solving',
          minimumRating: 'Intermediate',
          importance: 'desirable'
        }
      ],
      industryCategory: 'Community Services',
      experienceLevel: 'mid',
      remoteWork: false,
      fifoRole: false,
      culturalRequirements: 'Strong cultural awareness and sensitivity required'
    },
    applications: []
  },
  {
    id: '2',
    title: 'Mining Equipment Operator',
    businessId: '2',
    business: {
      id: '2',
      name: initialBusinessRecords[1].businessName,
      industry: {
        primary: initialBusinessRecords[1].industry.primary,
        secondary: [initialBusinessRecords[1].industry.secondary]
      },
      location: {
        city: initialBusinessRecords[1].address.suburb,
        state: initialBusinessRecords[1].address.state
      }
    },
    location: 'Karratha, WA',
    jobType: 'Full-time',
    status: 'Open',
    salary: '$95,000 - $110,000',
    postedDate: 'Jul 18, 2025',
    closingDate: 'Aug 25, 2025',
    daysAgo: '(9 days ago)',
    applicationsCount: 15,
    avatar: 'M',
    priority: 'medium',
    details: {
      description: 'Seeking experienced heavy equipment operators for mining operations in the Pilbara region. This is a FIFO position with excellent career progression opportunities.',
      requirements: [
        {
          id: '1',
          type: 'essential',
          description: 'Valid HR License',
          skillId: 'hr-license'
        },
        {
          id: '2',
          type: 'essential',
          description: '3+ years mining equipment experience'
        },
        {
          id: '3',
          type: 'essential',
          description: 'Safety certification (e.g., Construction Induction White Card)'
        },
        {
          id: '4',
          type: 'desirable',
          description: 'Experience with CAT equipment'
        }
      ],
      responsibilities: [
        {
          id: '1',
          description: 'Operate heavy mining equipment safely and efficiently',
          priority: 'high'
        },
        {
          id: '2',
          description: 'Conduct pre-start and post-operation inspections',
          priority: 'high'
        },
        {
          id: '3',
          description: 'Maintain accurate production records',
          priority: 'medium'
        },
        {
          id: '4',
          description: 'Follow all safety procedures and protocols',
          priority: 'high'
        }
      ],
      benefits: [
        {
          id: '1',
          description: 'FIFO 2/1 roster arrangement',
          category: 'lifestyle'
        },
        {
          id: '2',
          description: 'Above award wages',
          category: 'compensation'
        },
        {
          id: '3',
          description: 'Comprehensive health and safety training',
          category: 'professional'
        },
        {
          id: '4',
          description: 'Career progression opportunities',
          category: 'professional'
        }
      ],
      applicationDeadline: 'Aug 25, 2025',
      contactPerson: {
        name: 'Michael Chen',
        position: 'Operations Manager',
        email: 'michael.chen@pilbaramining.com.au',
        phone: '+61 8 9144 5678'
      },
      workingHours: 'FIFO 2/1 roster, 12-hour shifts',
      startDate: 'August 2025',
      contractLength: '24 months',
      selectionCriteria: 'Experience with CAT equipment highly regarded. Safety record will be assessed.',
      requiredSkills: [
        {
          skillId: 'equipment-operation',
          skillName: 'Heavy Equipment Operation',
          minimumRating: 'Advanced',
          importance: 'essential'
        },
        {
          skillId: 'mechanical-knowledge',
          skillName: 'Mechanical Knowledge',
          minimumRating: 'Intermediate',
          importance: 'desirable'
        }
      ],
      requiredCompetencies: [
        {
          competencyId: 'safety-compliance',
          competencyName: 'Safety Compliance',
          minimumRating: 'Advanced',
          importance: 'essential'
        },
        {
          competencyId: 'teamwork',
          competencyName: 'Teamwork',
          minimumRating: 'Intermediate',
          importance: 'essential'
        }
      ],
      industryCategory: 'Mining',
      experienceLevel: 'mid',
      remoteWork: false,
      fifoRole: true
    },
    applications: []
  },
  {
    id: '3',
    title: 'Construction Supervisor',
    businessId: '1',
    business: {
      id: '1',
      name: initialBusinessRecords[0].businessName,
      industry: {
        primary: initialBusinessRecords[0].industry.primary,
        secondary: [initialBusinessRecords[0].industry.secondary]
      },
      location: {
        city: initialBusinessRecords[0].address.suburb,
        state: initialBusinessRecords[0].address.state
      }
    },
    location: 'Broome, WA',
    jobType: 'Full-time',
    status: 'Open',
    salary: '$90,000 - $105,000',
    postedDate: 'Jul 15, 2025',
    closingDate: 'Aug 20, 2025',
    daysAgo: '(12 days ago)',
    applicationsCount: 15,
    avatar: 'C',
    priority: 'high',
    details: {
      description: 'Lead construction teams on major infrastructure projects in remote Aboriginal communities. This role requires strong leadership skills and cultural sensitivity.',
      requirements: [
        {
          id: '1',
          type: 'essential',
          description: 'Trade qualification or equivalent experience',
          skillId: 'construction-trade'
        },
        {
          id: '2',
          type: 'essential',
          description: '5+ years supervisory experience in construction'
        },
        {
          id: '3',
          type: 'essential',
          description: 'Cultural awareness training or willingness to undertake'
        }
      ],
      responsibilities: [
        {
          id: '1',
          description: 'Supervise construction teams and subcontractors',
          priority: 'high'
        },
        {
          id: '2',
          description: 'Ensure quality standards and safety compliance',
          priority: 'high'
        },
        {
          id: '3',
          description: 'Coordinate with project managers and clients',
          priority: 'medium'
        },
        {
          id: '4',
          description: 'Mentor and develop local workers',
          priority: 'medium'
        }
      ],
      benefits: [
        {
          id: '1',
          description: 'Company vehicle and equipment',
          category: 'other'
        },
        {
          id: '2',
          description: 'Professional development budget',
          category: 'professional'
        },
        {
          id: '3',
          description: 'Permanent position with job security',
          category: 'lifestyle'
        }
      ],
      applicationDeadline: 'Aug 20, 2025',
      contactPerson: {
        name: 'Test User A',
        position: 'General Manager',
        email: 'testuser.a@acs-construction.com.au',
        phone: '08 9192 1234'
      },
      workingHours: 'Monday to Friday, 7:00 AM - 4:00 PM',
      startDate: 'September 2025',
      contractLength: 'Permanent',
      selectionCriteria: 'Leadership experience and cultural sensitivity required.',
      requiredSkills: [
        {
          skillId: 'leadership',
          skillName: 'Leadership',
          minimumRating: 'Advanced',
          importance: 'essential'
        },
        {
          skillId: 'project-management',
          skillName: 'Project Management',
          minimumRating: 'Intermediate',
          importance: 'essential'
        }
      ],
      requiredCompetencies: [
        {
          competencyId: 'cultural-awareness',
          competencyName: 'Cultural Awareness',
          minimumRating: 'Intermediate',
          importance: 'essential'
        },
        {
          competencyId: 'quality-management',
          competencyName: 'Quality Management',
          minimumRating: 'Advanced',
          importance: 'essential'
        }
      ],
      industryCategory: 'Construction',
      experienceLevel: 'senior',
      remoteWork: false,
      fifoRole: false,
      culturalRequirements: 'Must be comfortable working in Aboriginal communities and demonstrate cultural sensitivity'
    },
    applications: []
  },
  {
    id: '4',
    title: 'Youth Engagement Officer',
    businessId: '1',
    business: {
      id: '1',
      name: 'Kununurra Neighbourhood House',
      industry: {
        primary: 'Community Services',
        secondary: ['Youth Work', 'Education']
      },
      location: {
        city: 'Kununurra',
        state: 'WA'
      }
    },
    location: 'Kununurra, WA',
    jobType: 'Part-time',
    status: 'Open',
    salary: '$45,000 - $50,000 (pro-rata)',
    postedDate: 'Jul 18, 2025',
    closingDate: 'Aug 10, 2025',
    daysAgo: '(9 days ago)',
    applicationsCount: 8,
    avatar: 'Y',
    priority: 'medium',
    details: {
      description: 'Join our team to deliver engaging youth programs and activities in the East Kimberley region.',
      requirements: [
        {
          id: '1',
          type: 'essential',
          description: 'Experience working with young people aged 12-25'
        },
        {
          id: '2',
          type: 'essential',
          description: 'Relevant qualification in youth work or community services'
        },
        {
          id: '3',
          type: 'essential',
          description: 'Working with Children Check'
        },
        {
          id: '4',
          type: 'desirable',
          description: 'First Aid Certificate'
        }
      ],
      responsibilities: [
        {
          id: '1',
          description: 'Plan and deliver youth programs and activities',
          priority: 'high'
        },
        {
          id: '2',
          description: 'Build positive relationships with young people',
          priority: 'high'
        },
        {
          id: '3',
          description: 'Coordinate with schools and community organizations',
          priority: 'medium'
        }
      ],
      benefits: [
        {
          id: '1',
          description: 'Flexible hours (20 hours per week)',
          category: 'lifestyle'
        },
        {
          id: '2',
          description: 'Professional development budget',
          category: 'professional'
        },
        {
          id: '3',
          description: 'Supportive team environment',
          category: 'lifestyle'
        }
      ],
      applicationDeadline: 'Aug 10, 2025',
      contactPerson: {
        name: 'Michael Chen',
        position: 'Program Coordinator',
        email: 'michael.chen@knh.org.au',
        phone: '+61 8 9168 3333'
      },
      workingHours: '20 hours per week, flexible schedule',
      startDate: 'August 2025',
      contractLength: '12 months (with possibility of extension)',
      selectionCriteria: 'Please provide a cover letter addressing your experience working with youth.',
      requiredSkills: [
        {
          skillId: 'youth-engagement',
          skillName: 'Youth Engagement',
          minimumRating: 'Intermediate',
          importance: 'essential'
        },
        {
          skillId: 'program-delivery',
          skillName: 'Program Delivery',
          minimumRating: 'Intermediate',
          importance: 'essential'
        }
      ],
      requiredCompetencies: [
        {
          competencyId: 'communication',
          competencyName: 'Communication',
          minimumRating: 'Advanced',
          importance: 'essential'
        }
      ],
      industryCategory: 'Community Services',
      experienceLevel: 'mid',
      remoteWork: false,
      fifoRole: false
    },
    applications: []
  }
];