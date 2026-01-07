import { TrainingData } from '../features/training/types';

export const initialTrainingRecords: TrainingData[] = [
  {
    id: '1',
    title: 'Certificate IV in Community Services Work',
    code: 'CHC42015',
    provider: {
      id: '1',
      name: 'Kimberley Training Institute',
      businessId: '1',
      type: 'RTO',
      accreditations: ['ASQA Registered', 'ISO 9001'],
      deliveryMethods: ['Face-to-face', 'Hybrid', 'Workplace']
    },
    category: 'Community Services',
    level: 'Intermediate',
    description: 'This qualification reflects the role of community service workers involved in the direct delivery of services to individuals and groups in the community.',
    objectives: [
      'Develop skills in case management and support planning',
      'Build cultural competence for working with diverse communities',
      'Learn effective communication and advocacy techniques',
      'Understand legal and ethical frameworks in community work'
    ],
    duration: {
      totalHours: 720,
      weeks: 52,
      sessionsPerWeek: 2
    },
    prerequisites: [
      {
        id: '1',
        type: 'Qualification',
        level: 'Essential',
        description: 'Year 12 or equivalent'
      },
      {
        id: '2',
        type: 'Experience',
        level: 'Desirable',
        description: 'Some experience in community or social services'
      }
    ],
    outcomes: [
      {
        id: '1',
        type: 'Qualification',
        title: 'Certificate IV in Community Services Work',
        code: 'CHC42015',
        description: 'Nationally recognised qualification',
        industryRecognition: ['Community Services', 'Healthcare', 'Government']
      }
    ],
    deliveryMethods: ['Face-to-face', 'Workplace'],
    location: {
      primary: 'Kununurra, WA',
      additionalLocations: ['Broome', 'Derby'],
      accessibility: 'Wheelchair accessible, public transport links'
    },
    schedules: [
      {
        id: '1',
        startDate: '2025-09-01',
        endDate: '2026-08-30',
        deliveryMethod: 'Face-to-face',
        location: 'Kununurra Campus',
        timeCommitment: '2 days per week',
        maxParticipants: 20,
        currentEnrollments: 15,
        status: 'Open'
      },
      {
        id: '2',
        startDate: '2026-02-01',
        endDate: '2027-01-30',
        deliveryMethod: 'Hybrid',
        location: 'Broome Campus',
        timeCommitment: '1 day face-to-face, online study',
        maxParticipants: 15,
        currentEnrollments: 8,
        status: 'Open'
      }
    ],
    modules: [
      {
        id: '1',
        title: 'Work within a legal and ethical framework',
        description: 'Understand legal requirements and ethical principles',
        duration: 60,
        assessments: [
          {
            id: '1',
            type: 'Written',
            description: 'Legal and ethical scenarios assessment',
            weightPercentage: 100
          }
        ]
      },
      {
        id: '2',
        title: 'Communicate and work in health or community services',
        description: 'Develop effective communication skills',
        duration: 80,
        assessments: [
          {
            id: '1',
            type: 'Practical',
            description: 'Role-play communication scenarios',
            weightPercentage: 70
          },
          {
            id: '2',
            type: 'Written',
            description: 'Communication portfolio',
            weightPercentage: 30
          }
        ]
      },
      {
        id: '3',
        title: 'Work with diverse people',
        description: 'Cultural competency and diversity awareness',
        duration: 70,
        assessments: [
          {
            id: '1',
            type: 'Project',
            description: 'Cultural competency project',
            weightPercentage: 100
          }
        ]
      }
    ],
    targetAudience: 'People seeking to work in community services, social work, or related fields',
    maxParticipants: 20,
    minParticipants: 8,
    cost: {
      standard: 4500,
      concession: 2250,
      funding: ['VET Student Loans', 'JobActive funding', 'Skills for Education and Employment']
    },
    skillsTargeted: [
      {
        skillId: 'communication',
        skillName: 'Communication',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Intermediate'
      },
      {
        skillId: 'case-management',
        skillName: 'Case Management',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Intermediate'
      },
      {
        skillId: 'cultural-competency',
        skillName: 'Cultural Competency',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Advanced'
      },
      {
        skillId: 'advocacy',
        skillName: 'Advocacy',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Intermediate'
      }
    ],
    industryAlignment: ['Community Services', 'Healthcare', 'Social Work'],
    careerPathways: [
      'Community Support Worker',
      'Family Support Worker', 
      'Youth Worker',
      'Case Manager',
      'Community Development Worker'
    ],
    status: 'Published',
    postedDate: '2025-06-01',
    enrollmentDeadline: '2025-08-15',
    contactPerson: {
      name: 'Jennifer Smith',
      position: 'Student Services Coordinator',
      email: 'j.smith@kti.edu.au',
      phone: '08 9168 7890'
    },
    supportServices: [
      {
        type: 'Childcare',
        description: 'On-site childcare available during class times',
        available: true
      },
      {
        type: 'Transport',
        description: 'Bus service from remote communities',
        available: true
      },
      {
        type: 'Mentoring',
        description: 'One-on-one academic and career mentoring',
        available: true
      },
      {
        type: 'Literacy Support',
        description: 'Additional literacy and numeracy support',
        available: true
      }
    ],
    enrollments: 15
  },
  {
    id: '2',
    title: 'Heavy Equipment Operation Training',
    code: 'RII30920',
    provider: {
      id: '2',
      name: 'Pilbara Mining Training Centre',
      businessId: '2',
      type: 'Private',
      accreditations: ['ASQA Registered', 'Mining Industry Safety'],
      deliveryMethods: ['Face-to-face', 'Workplace']
    },
    category: 'Mining & Resources',
    level: 'Intermediate',
    description: 'Comprehensive training program for operating heavy equipment in mining environments with a focus on safety and efficiency.',
    objectives: [
      'Master safe operation of excavators, dozers, and loaders',
      'Understand maintenance and inspection procedures',
      'Develop skills in reading mine plans and GPS systems',
      'Learn emergency response procedures'
    ],
    duration: {
      totalHours: 240,
      weeks: 6,
      sessionsPerWeek: 5
    },
    prerequisites: [
      {
        id: '1',
        type: 'Certification',
        level: 'Essential',
        description: 'Construction Induction (White Card)'
      },
      {
        id: '2',
        type: 'Qualification',
        level: 'Essential',
        description: 'HR License'
      },
      {
        id: '3',
        type: 'Experience',
        level: 'Desirable',
        description: 'Basic mechanical knowledge'
      }
    ],
    outcomes: [
      {
        id: '1',
        type: 'Certificate',
        title: 'Certificate III in Surface Extraction Operations',
        code: 'RII30920',
        description: 'Industry recognised mining qualification',
        industryRecognition: ['Mining', 'Resources', 'Construction']
      },
      {
        id: '2',
        type: 'Competency',
        title: 'High Risk Work License - Dozer',
        description: 'WorkSafe WA High Risk Work License',
        industryRecognition: ['Mining', 'Construction']
      }
    ],
    deliveryMethods: ['Face-to-face', 'Workplace'],
    location: {
      primary: 'Karratha, WA',
      additionalLocations: ['Port Hedland', 'Newman'],
      accessibility: 'Mining site training facility with accommodation'
    },
    schedules: [
      {
        id: '1',
        startDate: '2025-08-15',
        endDate: '2025-09-26',
        deliveryMethod: 'Face-to-face',
        location: 'Karratha Training Centre',
        timeCommitment: 'Full-time, 40 hours per week',
        maxParticipants: 12,
        currentEnrollments: 10,
        status: 'Open'
      },
      {
        id: '2',
        startDate: '2025-10-20',
        endDate: '2025-12-01',
        deliveryMethod: 'Workplace',
        location: 'Various mine sites',
        timeCommitment: 'Full-time with FIFO arrangement',
        maxParticipants: 8,
        currentEnrollments: 5,
        status: 'Open'
      }
    ],
    modules: [
      {
        id: '1',
        title: 'Safety and Risk Management',
        description: 'Mining safety protocols and risk assessment',
        duration: 40,
        assessments: [
          {
            id: '1',
            type: 'Written',
            description: 'Safety procedures examination',
            weightPercentage: 60
          },
          {
            id: '2',
            type: 'Practical',
            description: 'Emergency response simulation',
            weightPercentage: 40
          }
        ]
      },
      {
        id: '2',
        title: 'Equipment Operation',
        description: 'Hands-on operation of mining equipment',
        duration: 120,
        assessments: [
          {
            id: '1',
            type: 'Practical',
            description: 'Equipment operation assessment',
            weightPercentage: 80
          },
          {
            id: '2',
            type: 'Observation',
            description: 'Workplace competency assessment',
            weightPercentage: 20
          }
        ]
      }
    ],
    targetAudience: 'Job seekers looking to enter mining industry, existing workers seeking advancement',
    maxParticipants: 12,
    minParticipants: 6,
    cost: {
      standard: 8500,
      concession: 6500,
      funding: ['Mining Skills Organisation funding', 'JobActive', 'Employer sponsorship']
    },
    skillsTargeted: [
      {
        skillId: 'equipment-operation',
        skillName: 'Heavy Equipment Operation',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Advanced'
      },
      {
        skillId: 'safety-compliance',
        skillName: 'Safety Compliance',
        currentLevelRequired: 'Intermediate',
        outcomeLevel: 'Advanced'
      },
      {
        skillId: 'mechanical-maintenance',
        skillName: 'Mechanical Maintenance',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Intermediate'
      }
    ],
    industryAlignment: ['Mining', 'Construction', 'Civil Engineering'],
    careerPathways: [
      'Mining Equipment Operator',
      'Site Supervisor',
      'Equipment Maintenance Technician',
      'Training Instructor',
      'Site Manager'
    ],
    status: 'Published',
    postedDate: '2025-06-15',
    enrollmentDeadline: '2025-08-01',
    contactPerson: {
      name: 'Mark Johnson',
      position: 'Training Manager',
      email: 'm.johnson@pmtc.com.au',
      phone: '08 9144 9999'
    },
    supportServices: [
      {
        type: 'Transport',
        description: 'FIFO flights and ground transport included',
        available: true
      },
      {
        type: 'Equipment',
        description: 'All safety equipment and gear provided',
        available: true
      },
      {
        type: 'Mentoring',
        description: 'Experienced operator mentorship program',
        available: true
      }
    ],
    enrollments: 10
  },
  {
    id: '3',
    title: 'Digital Literacy Fundamentals',
    provider: {
      id: '3',
      name: 'Kimberley Digital Hub',
      businessId: '1',
      type: 'Government',
      accreditations: ['ASQA Registered'],
      deliveryMethods: ['Online', 'Face-to-face', 'Hybrid']
    },
    category: 'Digital Skills',
    level: 'Foundation',
    description: 'Essential digital skills for modern workplaces including computer basics, internet navigation, and digital communication.',
    objectives: [
      'Learn basic computer operation and file management',
      'Develop email and online communication skills',
      'Understand internet safety and digital citizenship',
      'Create basic documents and presentations'
    ],
    duration: {
      totalHours: 60,
      weeks: 8,
      sessionsPerWeek: 2
    },
    prerequisites: [
      {
        id: '1',
        type: 'Experience',
        level: 'Essential',
        description: 'Basic reading and writing skills'
      }
    ],
    outcomes: [
      {
        id: '1',
        type: 'Certificate',
        title: 'Digital Literacy Certificate',
        description: 'Recognition of digital skills competency',
        industryRecognition: ['All industries']
      }
    ],
    deliveryMethods: ['Online', 'Face-to-face', 'Hybrid'],
    location: {
      primary: 'Kununurra, WA',
      additionalLocations: ['Wyndham', 'Halls Creek'],
      accessibility: 'Community centres with computer access'
    },
    schedules: [
      {
        id: '1',
        startDate: '2025-08-01',
        endDate: '2025-09-26',
        deliveryMethod: 'Hybrid',
        location: 'Multiple community centres',
        timeCommitment: '4 hours per week',
        maxParticipants: 25,
        currentEnrollments: 18,
        status: 'Open'
      }
    ],
    modules: [
      {
        id: '1',
        title: 'Computer Basics',
        description: 'Introduction to computers and basic operations',
        duration: 20,
        assessments: [
          {
            id: '1',
            type: 'Practical',
            description: 'Computer operation tasks',
            weightPercentage: 100
          }
        ]
      },
      {
        id: '2',
        title: 'Internet and Communication',
        description: 'Email, web browsing, and online safety',
        duration: 25,
        assessments: [
          {
            id: '1',
            type: 'Practical',
            description: 'Email and internet tasks',
            weightPercentage: 100
          }
        ]
      }
    ],
    targetAudience: 'Community members with limited digital experience',
    maxParticipants: 25,
    minParticipants: 10,
    cost: {
      standard: 0,
      funding: ['Government funded', 'Community development grants']
    },
    skillsTargeted: [
      {
        skillId: 'computer-literacy',
        skillName: 'Computer Literacy',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Intermediate'
      },
      {
        skillId: 'digital-communication',
        skillName: 'Digital Communication',
        currentLevelRequired: 'Novice',
        outcomeLevel: 'Intermediate'
      }
    ],
    industryAlignment: ['All industries requiring basic digital skills'],
    careerPathways: [
      'Office Administration',
      'Customer Service',
      'Data Entry',
      'Reception',
      'Further digital skills training'
    ],
    status: 'Published',
    postedDate: '2025-06-20',
    enrollmentDeadline: '2025-07-25',
    contactPerson: {
      name: 'Lisa Wang',
      position: 'Community Education Coordinator',
      email: 'l.wang@kdh.org.au',
      phone: '08 9168 4567'
    },
    supportServices: [
      {
        type: 'Childcare',
        description: 'Childcare available during sessions',
        available: true
      },
      {
        type: 'Transport',
        description: 'Transport assistance for rural participants',
        available: true
      },
      {
        type: 'Equipment',
        description: 'Computers and tablets provided for home use',
        available: true
      },
      {
        type: 'Literacy Support',
        description: 'Additional literacy support if needed',
        available: true
      }
    ],
    enrollments: 18
  }
];