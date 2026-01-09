import { PersonRecord } from '../features/people/types';

const today = new Date();

const isoDaysAgo = (days: number) => {
  const date = new Date(today);
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

export const initialPeopleRecords: PersonRecord[] = [
  {
    id: 'person-1',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Taylor',
      middleName: 'Jamie',
      lastName: 'Mitchell',
      dateOfBirth: '1992-04-16',
      gender: 'Female',
      motherName: 'Kim Mitchell',
      fatherName: 'Alex Mitchell',
      community: 'Kimberley Region',
      familyGroup: 'Group B',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-921734',
      driversLicenceExpiry: '2026-11-08',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'Yes',
      familyDependants: 'Yes',
      culturalRequirements: 'Requires cultural leave for significant community events.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Mentoring for supervisory pathways.',
      generalInformation: 'Actively engaged in community youth programs with strong leadership prospects.',
      streetAddress1: '24 Riverbend Road',
      streetAddress2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725',
      trainingTypeInterest: 'Leadership and mine site compliance training',
      personalContext: 'Primary carer for two children, available for flexible roster arrangements.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-1',
        jobTitle: 'Equipment Operator',
        employer: 'Pilbara Mining Services',
        startYear: '2018',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '4',
        summary: 'Operates heavy haul trucks and trains new starters on safety procedures.',
        jobCategory: 'Mining',
        experiences: [
          { id: 'exp-1', description: 'Completed Rio Tinto safety leadership program', rating: '5' },
          { id: 'exp-2', description: 'Acted as relief leading hand for 6 months', rating: '4' }
        ],
        tasks: [
          { id: 'task-1', task: 'Daily prestart inspections', rating: '5' },
          { id: 'task-2', task: 'Onboarding and training new operators', rating: '4' }
        ]
      },
      {
        id: 'wh-2',
        jobTitle: 'Warehouse Supervisor',
        employer: 'Northwest Logistics',
        startYear: '2014',
        endYear: '2018',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Led a team of 12 in inventory management and dispatch operations.',
        jobCategory: 'Logistics',
        experiences: [
          { id: 'exp-3', description: 'Implemented barcode inventory tracking', rating: '4' }
        ],
        tasks: [
          { id: 'task-3', task: 'Roster and leave management', rating: '4' },
          { id: 'task-4', task: 'Forklift operations', rating: '5' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate IV',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-1',
          level: 'Certificate IV',
          institution: 'TAFE WA',
          name: 'Leadership and Management',
          areaOfStudy: 'Business',
          completionDate: '2022-09-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-1', courseName: 'White Card - Construction Induction', certificateAvailable: 'Yes' },
        { id: 'train-2', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-1', skill: 'Leadership', rating: '4' },
        { id: 'skill-2', skill: 'Equipment Operation', rating: '5' },
        { id: 'skill-3', skill: 'Mentoring', rating: '4' }
      ],
      competencies: [
        { id: 'comp-1', competency: 'Safety Management', rating: '5' },
        { id: 'comp-2', competency: 'Risk Assessment', rating: '4' }
      ]
    },
    recommendations: [
      {
        id: 'rec-1',
        recommendation: 'Explore Certificate III in Surface Extraction to broaden operational capabilities.',
        createdAt: isoDaysAgo(14)
      }
    ],
    notes: [
      {
        id: 'note-1',
        content: 'Attended leadership workshop and requested mentorship pairing.',
        timestamp: isoDaysAgo(7),
        author: 'Alex Smith',
        status: 'Active'
      },
      {
        id: 'note-2',
        content: 'Updated medical clearance paperwork. Available for FIFO roster discussions.',
        timestamp: isoDaysAgo(2),
        author: 'Casey Johnson',
        status: 'Resolved'
      }
    ],
    profile: {
      summary: 'Experienced equipment operator with strong safety leadership and mentoring skills.',
      aspirations: 'Progress into a supervisory role within mining operations.',
      preferredIndustries: ['Mining', 'Logistics']
    },
    surveys: [
      {
        id: 'survey-1',
        title: 'Emergency Relief Referral',
        date: '2024-12-12 at 10:30 AM',
        referralData: {
          referralPathway: 'Walk In',
          clientFirstName: 'Taylor',
          clientLastName: 'Mitchell',
          clientPhoneNumber: '08 9123 4567',
          clientEmail: 'taylor.mitchell@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Female'
        }
      }
    ],
    referrals: [
      {
        id: '#24851',
        title: 'Referral #24851',
        organization: 'Wunan SP',
        referredDate: '2024-07-28 at 2:13 AM',
        lastUpdated: '2024-07-28 at 2:13 AM'
      }
    ],
    history: [
      {
        id: 'hist-1',
        date: '2024-07-27',
        time: '2:30 PM',
        action: 'Profile Created',
        details: 'Initial profile created with basic information and contact details.',
        performedBy: 'System Admin',
        type: 'status_change'
      }
    ]
  },
  {
    id: 'person-2',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Jordan',
      middleName: 'Lee',
      lastName: 'Chen',
      dateOfBirth: '1996-08-02',
      gender: 'Male',
      motherName: 'Sarah Chen',
      fatherName: 'David Chen',
      community: 'Derby',
      familyGroup: 'Group A',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-550231',
      driversLicenceExpiry: '2027-01-19',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'No',
      culturalRequirements: 'Requires time off for annual fishing period with family.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Interested in interview coaching for graduate programs.',
      generalInformation: 'Recently relocated back to WA after completing engineering studies interstate.',
      streetAddress1: '8 Mangrove Court',
      streetAddress2: '',
      suburb: 'Derby',
      state: 'WA',
      postcode: '6728',
      trainingTypeInterest: 'Graduate development placements and safety training refreshers',
      personalContext: 'Available immediately and willing to relocate for work.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-3',
        jobTitle: 'Graduate Mining Engineer',
        employer: 'WestRidge Resources',
        startYear: '2021',
        endYear: '2023',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Completed graduate rotations across drill and blast, geotech, and closure planning teams.',
        jobCategory: 'Mining',
        experiences: [
          { id: 'exp-4', description: 'Delivered pit wall stability analysis for quarterly review', rating: '4' }
        ],
        tasks: [
          { id: 'task-5', task: 'Drafted weekly production forecasts', rating: '3' },
          { id: 'task-6', task: 'Supported closure planning modelling', rating: '4' }
        ]
      },
      {
        id: 'wh-4',
        jobTitle: 'Environmental Field Assistant',
        employer: 'Kimberley Landcare',
        startYear: '2017',
        endYear: '2019',
        currentJob: false,
        workType: 'Part-time',
        rating: '3',
        summary: 'Supported cultural burn activities and biodiversity assessments on country.',
        jobCategory: 'Environmental',
        experiences: [
          { id: 'exp-5', description: 'Completed cultural fire management training', rating: '5' }
        ],
        tasks: [
          { id: 'task-7', task: 'Soil sampling and vegetation surveys', rating: '3' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Bachelor Degree',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-2',
          level: 'Bachelor',
          institution: 'Curtin University',
          name: 'Mining Engineering',
          areaOfStudy: 'Engineering',
          completionDate: '2020-12-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-3', courseName: 'First Aid and CPR', certificateAvailable: 'Yes' },
        { id: 'train-4', courseName: 'Cultural Fire Management', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-4', skill: 'Mine Planning Software (Vulcan)', rating: '3' },
        { id: 'skill-5', skill: 'Environmental Monitoring', rating: '4' }
      ],
      competencies: [
        { id: 'comp-3', competency: 'Geotechnical Analysis', rating: '3' },
        { id: 'comp-4', competency: 'Stakeholder Engagement', rating: '4' }
      ]
    },
    recommendations: [
      {
        id: 'rec-2',
        recommendation: 'Arrange interview with closure planning team to explore ongoing project roles.',
        createdAt: isoDaysAgo(10)
      }
    ],
    notes: [
      {
        id: 'note-3',
        content: 'Introduced at careers expo. Keen on roles that blend engineering and traditional land care.',
        timestamp: isoDaysAgo(21),
        author: 'Taylor Brown',
        status: 'Active'
      },
      {
        id: 'note-4',
        content: 'Sent through updated resume and references after site visit.',
        timestamp: isoDaysAgo(5),
        author: 'Taylor Brown',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Emerging mining engineer passionate about integrating cultural knowledge into closure planning.',
      aspirations: 'Secure a rotational role that supports regenerative mine closure.',
      preferredIndustries: ['Mining', 'Environmental Services']
    },
    surveys: [
      {
        id: 'survey-2',
        title: 'Employment Support Survey',
        date: '2024-11-15 at 2:15 PM',
        referralData: {
          referralPathway: 'Phone In',
          clientFirstName: 'Jordan',
          clientLastName: 'Chen',
          clientPhoneNumber: '08 9234 5678',
          clientEmail: 'jordan.chen@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Male'
        }
      },
      {
        id: 'survey-3',
        title: 'Training Needs Assessment',
        date: '2024-10-08 at 9:45 AM',
        referralData: {
          referralPathway: 'Agency Referred',
          clientFirstName: 'Jordan',
          clientLastName: 'Chen',
          clientPhoneNumber: '08 9234 5678',
          clientEmail: 'jordan.chen@example.com',
          clientAPP: 'Survey not completed',
          clientGender: 'Male'
        }
      }
    ],
    referrals: [],
    history: []
  },
  {
    id: 'person-3',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Casey',
      middleName: 'Morgan',
      lastName: 'Williams',
      dateOfBirth: '1988-11-30',
      gender: 'Female',
      motherName: 'Lisa Williams',
      fatherName: 'Mark Williams',
      community: 'Kununurra',
      familyGroup: 'Group D',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-774512',
      driversLicenceExpiry: '2025-06-12',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'No',
      familyDependants: 'Yes',
      culturalRequirements: 'Needs flexibility around school terms for kinship care responsibilities.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Looking for mentoring into small business management.',
      generalInformation: 'Operates a catering micro-business and mentors youth on cultural cooking practices.',
      streetAddress1: '59 Sandalwood Way',
      streetAddress2: '',
      suburb: 'Kununurra',
      state: 'WA',
      postcode: '6743',
      trainingTypeInterest: 'Hospitality management and digital marketing',
      personalContext: 'Supports two nieces through schooling commitments.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-5',
        jobTitle: 'Business Owner - Bush Catering',
        employer: 'Ngarrang Catering Collective',
        startYear: '2019',
        endYear: '',
        currentJob: true,
        workType: 'Part-time',
        rating: '5',
        summary: 'Runs culturally informed catering services for local events and tourism groups.',
        jobCategory: 'Hospitality',
        experiences: [
          { id: 'exp-6', description: 'Delivered catering for region-wide tourism conference', rating: '5' }
        ],
        tasks: [
          { id: 'task-8', task: 'Menu design and procurement', rating: '5' },
          { id: 'task-9', task: 'Financial management and invoicing', rating: '4' }
        ]
      },
      {
        id: 'wh-6',
        jobTitle: 'Community Cultural Facilitator',
        employer: 'Kimberley Youth Hub',
        startYear: '2013',
        endYear: '2019',
        currentJob: false,
        workType: 'Full-time',
        rating: '5',
        summary: 'Designed and delivered cultural workshops for youth employment programs.',
        jobCategory: 'Community Services',
        experiences: [
          { id: 'exp-7', description: 'Established cultural cooking workshops adopted across three communities', rating: '5' }
        ],
        tasks: [
          { id: 'task-10', task: 'Program development and facilitation', rating: '5' },
          { id: 'task-11', task: 'Volunteer coordination', rating: '4' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Diploma',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-3',
          level: 'Diploma',
          institution: 'TAFE WA',
          name: 'Hospitality Management',
          areaOfStudy: 'Hospitality',
          completionDate: '2010-11-10',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-5', courseName: 'Food Safety Supervisor', certificateAvailable: 'Yes' },
        { id: 'train-6', courseName: 'Small Business Compliance', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-6', skill: 'Business Planning', rating: '4' },
        { id: 'skill-7', skill: 'Cultural Facilitation', rating: '5' }
      ],
      competencies: [
        { id: 'comp-5', competency: 'Event Logistics', rating: '4' },
        { id: 'comp-6', competency: 'Mentoring', rating: '5' }
      ]
    },
    recommendations: [
      {
        id: 'rec-3',
        recommendation: 'Connect with regional tourism accelerator to scale catering offering.',
        createdAt: isoDaysAgo(30)
      }
    ],
    notes: [
      {
        id: 'note-5',
        content: 'Preparing capability statement for local government procurement team.',
        timestamp: isoDaysAgo(9),
        author: 'Jordan Davis',
        status: 'Active'
      },
      {
        id: 'note-6',
        content: 'Needs guidance on bookkeeping software migration.',
        timestamp: isoDaysAgo(4),
        author: 'Jordan Davis',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Entrepreneurial community leader supporting cultural catering ventures and youth training.',
      aspirations: 'Expand catering business and mentor youth in enterprise pathways.',
      preferredIndustries: ['Hospitality', 'Community Services']
    },
    surveys: [
      {
        id: 'survey-4',
        title: 'Community Services Referral',
        date: '2024-09-22 at 11:20 AM',
        referralData: {
          referralPathway: 'Walk In',
          clientFirstName: 'Casey',
          clientLastName: 'Williams',
          clientPhoneNumber: '08 9345 6789',
          clientEmail: 'casey.williams@example.com',
          clientAPP: 'Name Shared',
          clientGender: 'Gender Diverse'
        }
      }
    ],
    referrals: [],
    history: []
  },
  {
    id: 'person-4',
    engagementStatus: 'Re-engaging',
    personalDetails: {
      firstName: 'Riley',
      middleName: 'Cameron',
      lastName: 'Anderson',
      dateOfBirth: '1984-03-22',
      gender: 'Male',
      motherName: 'Emma Anderson',
      fatherName: 'Chris Anderson',
      community: 'Fitzroy Crossing',
      familyGroup: 'Group C',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-332198',
      driversLicenceExpiry: '2025-09-30',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'Yes',
      culturalRequirements: 'Requires advance notice for law business commitments.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Pending',
      additionalSupportNeeded: 'Interested in updating heavy rigid licence and drug & alcohol testing.',
      generalInformation: 'Returned to the region after interstate civil construction work.',
      streetAddress1: '12 Station Track',
      streetAddress2: 'Lot 4',
      suburb: 'Fitzroy Crossing',
      state: 'WA',
      postcode: '6765',
      trainingTypeInterest: 'Plant operator upskilling and site leadership',
      personalContext: 'Caring for elderly parent, needs predictable roster.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-7',
        jobTitle: 'Civil Plant Operator',
        employer: 'RedEarth Civil',
        startYear: '2015',
        endYear: '2022',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Operated graders and excavators across multiple road upgrade projects.',
        jobCategory: 'Civil Construction',
        experiences: [
          { id: 'exp-8', description: 'Delivered multi-sitelane upgrade ahead of schedule', rating: '4' }
        ],
        tasks: [
          { id: 'task-12', task: 'Machine maintenance checks', rating: '4' },
          { id: 'task-13', task: 'Mentored new operators on safety', rating: '5' }
        ]
      },
      {
        id: 'wh-8',
        jobTitle: 'Project Support Officer',
        employer: 'Fitzroy Community Corporation',
        startYear: '2023',
        endYear: '',
        currentJob: true,
        workType: 'Part-time',
        rating: '3',
        summary: 'Coordinates local works crews and manages equipment rostering.',
        jobCategory: 'Community Services',
        experiences: [
          { id: 'exp-9', description: 'Established equipment booking process for community projects', rating: '4' }
        ],
        tasks: [
          { id: 'task-14', task: 'Crew scheduling and logistics', rating: '3' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate III',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-4',
          level: 'Certificate III',
          institution: 'TAFE Queensland',
          name: 'Civil Construction Plant Operations',
          areaOfStudy: 'Civil Construction',
          completionDate: '2014-05-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-7', courseName: 'Working at Heights', certificateAvailable: 'Yes' },
        { id: 'train-8', courseName: 'Confined Spaces Entry', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-8', skill: 'Excavator Operation', rating: '5' },
        { id: 'skill-9', skill: 'Team Leadership', rating: '3' }
      ],
      competencies: [
        { id: 'comp-7', competency: 'Road Construction', rating: '4' },
        { id: 'comp-8', competency: 'Equipment Maintenance', rating: '4' }
      ]
    },
    recommendations: [
      {
        id: 'rec-4',
        recommendation: 'Book into medical assessments and heavy rigid refresher before onboarding.',
        createdAt: isoDaysAgo(18)
      }
    ],
    notes: [
      {
        id: 'note-7',
        content: 'Re-engaged after time interstate. Keen on supervisory pathways if support available.',
        timestamp: isoDaysAgo(16),
        author: 'Riley Martinez',
        status: 'Active'
      },
      {
        id: 'note-8',
        content: 'Awaiting confirmation of medical clearance appointment.',
        timestamp: isoDaysAgo(3),
        author: 'Riley Martinez',
        status: 'Pending'
      }
    ],
    profile: {
      summary: 'Seasoned civil plant operator seeking pathways into site supervision back on country.',
      aspirations: 'Secure full-time civil works role with mentoring into leadership.',
      preferredIndustries: ['Civil Construction', 'Community Services']
    },
    surveys: [
      {
        id: 'survey-5',
        title: 'Emergency Relief Referral',
        date: '2024-12-01 at 3:30 PM',
        referralData: {
          referralPathway: 'Agency Referred',
          clientFirstName: 'Riley',
          clientLastName: 'Anderson',
          clientPhoneNumber: '08 9456 7890',
          clientEmail: 'riley.anderson@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Not Stated'
        }
      },
      {
        id: 'survey-6',
        title: 'Employment Pathways Survey',
        date: '2024-10-18 at 10:15 AM',
        referralData: {
          referralPathway: 'Phone In',
          clientFirstName: 'Riley',
          clientLastName: 'Anderson',
          clientPhoneNumber: '08 9456 7890',
          clientEmail: 'riley.anderson@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Not Stated'
        }
      },
      {
        id: 'survey-7',
        title: 'Skills Development Assessment',
        date: '2024-08-25 at 1:45 PM',
        referralData: {
          referralPathway: 'Walk In',
          clientFirstName: 'Riley',
          clientLastName: 'Anderson',
          clientPhoneNumber: '08 9456 7890',
          clientEmail: 'riley.anderson@example.com',
          clientAPP: 'Survey not completed',
          clientGender: 'Not Stated'
        }
      }
    ],
    referrals: [],
    history: []
  },
  {
    id: 'person-5',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Marley',
      middleName: 'Rose',
      lastName: 'Thompson',
      dateOfBirth: '1990-06-15',
      gender: 'Female',
      motherName: 'Grace Thompson',
      fatherName: 'Wayne Thompson',
      community: 'Broome',
      familyGroup: 'Group A',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-889234',
      driversLicenceExpiry: '2027-03-20',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'No',
      familyDependants: 'Yes',
      culturalRequirements: 'Requires time for NAIDOC week activities.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Interested in management training.',
      generalInformation: 'Experienced healthcare worker with community leadership background.',
      streetAddress1: '15 Cable Beach Road',
      streetAddress2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725',
      trainingTypeInterest: 'Healthcare management and leadership',
      personalContext: 'Single parent with school-age children.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-9',
        jobTitle: 'Aboriginal Health Worker',
        employer: 'Kimberley Aboriginal Medical Services',
        startYear: '2016',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Provides primary health care and chronic disease management in remote communities.',
        jobCategory: 'Healthcare',
        experiences: [
          { id: 'exp-10', description: 'Led diabetes education program across 5 communities', rating: '5' },
          { id: 'exp-11', description: 'Trained 12 new health workers in cultural protocols', rating: '5' }
        ],
        tasks: [
          { id: 'task-15', task: 'Patient assessments and care planning', rating: '5' },
          { id: 'task-16', task: 'Community health education sessions', rating: '5' }
        ]
      },
      {
        id: 'wh-10',
        jobTitle: 'Aged Care Assistant',
        employer: 'Broome Community Care',
        startYear: '2012',
        endYear: '2016',
        currentJob: false,
        workType: 'Part-time',
        rating: '4',
        summary: 'Supported elderly residents with daily living activities.',
        jobCategory: 'Healthcare',
        experiences: [
          { id: 'exp-12', description: 'Completed dementia care certification', rating: '4' }
        ],
        tasks: [
          { id: 'task-17', task: 'Personal care assistance', rating: '4' },
          { id: 'task-18', task: 'Medication reminders', rating: '4' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate IV',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-5',
          level: 'Certificate IV',
          institution: 'Batchelor Institute',
          name: 'Aboriginal Primary Health Care',
          areaOfStudy: 'Healthcare',
          completionDate: '2015-11-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        },
        {
          id: 'qual-6',
          level: 'Certificate III',
          institution: 'TAFE WA',
          name: 'Individual Support',
          areaOfStudy: 'Community Services',
          completionDate: '2012-06-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-9', courseName: 'Mental Health First Aid', certificateAvailable: 'Yes' },
        { id: 'train-10', courseName: 'Chronic Disease Self-Management', certificateAvailable: 'Yes' },
        { id: 'train-11', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-10', skill: 'Patient Assessment', rating: '5' },
        { id: 'skill-11', skill: 'Health Education', rating: '5' },
        { id: 'skill-12', skill: 'Cultural Liaison', rating: '5' },
        { id: 'skill-13', skill: 'Case Management', rating: '4' }
      ],
      competencies: [
        { id: 'comp-9', competency: 'Chronic Disease Management', rating: '5' },
        { id: 'comp-10', competency: 'Community Engagement', rating: '5' },
        { id: 'comp-11', competency: 'Clinical Documentation', rating: '4' }
      ]
    },
    recommendations: [
      {
        id: 'rec-5',
        recommendation: 'Consider Diploma of Practice Management to progress into clinic leadership.',
        createdAt: isoDaysAgo(12)
      }
    ],
    notes: [
      {
        id: 'note-9',
        content: 'Expressed interest in clinic management pathway.',
        timestamp: isoDaysAgo(8),
        author: 'Sarah Peters',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Dedicated Aboriginal health worker with extensive community health experience.',
      aspirations: 'Progress into health service management role.',
      preferredIndustries: ['Healthcare', 'Community Services']
    },
    surveys: [
      {
        id: 'survey-8',
        title: 'Career Development Survey',
        date: '2024-11-20 at 2:00 PM',
        referralData: {
          referralPathway: 'Walk In',
          clientFirstName: 'Marley',
          clientLastName: 'Thompson',
          clientPhoneNumber: '08 9567 8901',
          clientEmail: 'marley.thompson@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Female'
        }
      }
    ],
    referrals: [],
    history: []
  },
  {
    id: 'person-6',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Kai',
      middleName: 'James',
      lastName: 'Roberts',
      dateOfBirth: '1999-02-28',
      gender: 'Male',
      motherName: 'Michelle Roberts',
      fatherName: 'Steven Roberts',
      community: 'Halls Creek',
      familyGroup: 'Group E',
      driversLicence: 'No',
      driversLicenceNumber: '',
      driversLicenceExpiry: '',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'No',
      culturalRequirements: 'Available for cultural ceremonies with advance notice.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Needs support obtaining drivers licence.',
      generalInformation: 'Recent school leaver keen to enter mining industry.',
      streetAddress1: '7 Duncan Highway',
      streetAddress2: '',
      suburb: 'Halls Creek',
      state: 'WA',
      postcode: '6770',
      trainingTypeInterest: 'Mining entry-level and heavy vehicle licence',
      personalContext: 'Living with family, flexible availability.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-11',
        jobTitle: 'Retail Assistant',
        employer: 'Halls Creek IGA',
        startYear: '2022',
        endYear: '2024',
        currentJob: false,
        workType: 'Part-time',
        rating: '3',
        summary: 'Customer service and stock management in busy retail environment.',
        jobCategory: 'Retail',
        experiences: [
          { id: 'exp-13', description: 'Trained in cash handling and POS systems', rating: '3' }
        ],
        tasks: [
          { id: 'task-19', task: 'Customer service', rating: '4' },
          { id: 'task-20', task: 'Stock replenishment', rating: '3' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Year 12',
      interestedInTraining: 'Yes',
      qualifications: [],
      trainings: [
        { id: 'train-12', courseName: 'Responsible Service of Alcohol', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-14', skill: 'Customer Service', rating: '4' },
        { id: 'skill-15', skill: 'Cash Handling', rating: '3' }
      ],
      competencies: [
        { id: 'comp-12', competency: 'Time Management', rating: '3' },
        { id: 'comp-13', competency: 'Teamwork', rating: '4' }
      ]
    },
    recommendations: [
      {
        id: 'rec-6',
        recommendation: 'Enrol in Certificate II Resources and Infrastructure Work Preparation.',
        createdAt: isoDaysAgo(5)
      }
    ],
    notes: [
      {
        id: 'note-10',
        content: 'Met at school careers day. Very motivated to enter mining sector.',
        timestamp: isoDaysAgo(20),
        author: 'Mark Wilson',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Enthusiastic young person seeking mining industry entry pathway.',
      aspirations: 'Obtain heavy vehicle licence and enter mining operations.',
      preferredIndustries: ['Mining', 'Construction']
    },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-7',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Destiny',
      middleName: 'Anne',
      lastName: 'Walker',
      dateOfBirth: '1985-09-08',
      gender: 'Female',
      motherName: 'Ruth Walker',
      fatherName: 'Colin Walker',
      community: 'Wyndham',
      familyGroup: 'Group B',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-445632',
      driversLicenceExpiry: '2026-08-15',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'Yes',
      familyDependants: 'Yes',
      culturalRequirements: 'Needs flexibility for sorry business.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Looking for project management certification.',
      generalInformation: 'Experienced teacher transitioning to education administration.',
      streetAddress1: '33 Great Northern Highway',
      streetAddress2: '',
      suburb: 'Wyndham',
      state: 'WA',
      postcode: '6740',
      trainingTypeInterest: 'Project management and education leadership',
      personalContext: 'Caring for elderly mother, prefers local work.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-12',
        jobTitle: 'Primary School Teacher',
        employer: 'Wyndham District High School',
        startYear: '2010',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Teaches Years 3-6 with focus on culturally responsive pedagogy.',
        jobCategory: 'Education',
        experiences: [
          { id: 'exp-14', description: 'Developed Indigenous language preservation program', rating: '5' },
          { id: 'exp-15', description: 'Mentored 8 graduate teachers over 5 years', rating: '5' }
        ],
        tasks: [
          { id: 'task-21', task: 'Curriculum development', rating: '5' },
          { id: 'task-22', task: 'Student assessment and reporting', rating: '4' },
          { id: 'task-23', task: 'Parent engagement', rating: '5' }
        ]
      },
      {
        id: 'wh-13',
        jobTitle: 'Education Assistant',
        employer: 'Kununurra Primary School',
        startYear: '2006',
        endYear: '2010',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Supported classroom teachers and provided one-on-one student assistance.',
        jobCategory: 'Education',
        experiences: [
          { id: 'exp-16', description: 'Completed teaching degree while working', rating: '5' }
        ],
        tasks: [
          { id: 'task-24', task: 'Student support', rating: '4' },
          { id: 'task-25', task: 'Classroom preparation', rating: '4' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Bachelor Degree',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-7',
          level: 'Bachelor',
          institution: 'University of Notre Dame',
          name: 'Primary Education',
          areaOfStudy: 'Education',
          completionDate: '2010-12-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        },
        {
          id: 'qual-8',
          level: 'Certificate IV',
          institution: 'TAFE WA',
          name: 'Education Support',
          areaOfStudy: 'Education',
          completionDate: '2006-06-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-13', courseName: 'Trauma-Informed Practice', certificateAvailable: 'Yes' },
        { id: 'train-14', courseName: 'Working with Children Check', certificateAvailable: 'Yes' },
        { id: 'train-15', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-16', skill: 'Curriculum Development', rating: '5' },
        { id: 'skill-17', skill: 'Student Assessment', rating: '5' },
        { id: 'skill-18', skill: 'Cultural Education', rating: '5' },
        { id: 'skill-19', skill: 'Mentoring', rating: '5' }
      ],
      competencies: [
        { id: 'comp-14', competency: 'Classroom Management', rating: '5' },
        { id: 'comp-15', competency: 'Community Engagement', rating: '5' },
        { id: 'comp-16', competency: 'Program Evaluation', rating: '4' }
      ]
    },
    recommendations: [
      {
        id: 'rec-7',
        recommendation: 'Apply for Deputy Principal positions as they arise.',
        createdAt: isoDaysAgo(25)
      }
    ],
    notes: [
      {
        id: 'note-11',
        content: 'Interested in education leadership pathway.',
        timestamp: isoDaysAgo(15),
        author: 'Amanda Lee',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Experienced educator passionate about culturally responsive teaching.',
      aspirations: 'Move into school administration or education policy.',
      preferredIndustries: ['Education', 'Government']
    },
    surveys: [
      {
        id: 'survey-9',
        title: 'Professional Development Survey',
        date: '2024-10-05 at 11:30 AM',
        referralData: {
          referralPathway: 'Agency Referred',
          clientFirstName: 'Destiny',
          clientLastName: 'Walker',
          clientPhoneNumber: '08 9678 9012',
          clientEmail: 'destiny.walker@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Female'
        }
      }
    ],
    referrals: [],
    history: []
  },
  {
    id: 'person-8',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Jarrah',
      middleName: 'Paul',
      lastName: 'Nguyen',
      dateOfBirth: '1991-12-03',
      gender: 'Male',
      motherName: 'Linda Nguyen',
      fatherName: 'Tran Nguyen',
      community: 'Kununurra',
      familyGroup: 'Group C',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-667891',
      driversLicenceExpiry: '2028-01-10',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'No',
      culturalRequirements: 'Flexible with cultural commitments.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'None currently.',
      generalInformation: 'Skilled electrician with mining and construction experience.',
      streetAddress1: '45 Konkerberry Drive',
      streetAddress2: '',
      suburb: 'Kununurra',
      state: 'WA',
      postcode: '6743',
      trainingTypeInterest: 'Electrical instrumentation and supervisory skills',
      personalContext: 'Available for any roster arrangement.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-14',
        jobTitle: 'Electrical Technician',
        employer: 'Argyle Diamond Mine',
        startYear: '2017',
        endYear: '2023',
        currentJob: false,
        workType: 'Full-time',
        rating: '5',
        summary: 'Maintained electrical systems across processing plant and underground operations.',
        jobCategory: 'Mining',
        experiences: [
          { id: 'exp-17', description: 'Led shutdown maintenance team of 6 electricians', rating: '5' },
          { id: 'exp-18', description: 'Zero safety incidents over 6-year tenure', rating: '5' }
        ],
        tasks: [
          { id: 'task-26', task: 'Preventive maintenance scheduling', rating: '5' },
          { id: 'task-27', task: 'Fault diagnosis and repair', rating: '5' },
          { id: 'task-28', task: 'Apprentice supervision', rating: '4' }
        ]
      },
      {
        id: 'wh-15',
        jobTitle: 'Apprentice Electrician',
        employer: 'Kimberley Electrical Services',
        startYear: '2013',
        endYear: '2017',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Completed electrical apprenticeship across residential and commercial projects.',
        jobCategory: 'Construction',
        experiences: [
          { id: 'exp-19', description: 'Graduated top of apprentice cohort', rating: '5' }
        ],
        tasks: [
          { id: 'task-29', task: 'Electrical installations', rating: '4' },
          { id: 'task-30', task: 'Safety compliance', rating: '4' }
        ]
      },
      {
        id: 'wh-16',
        jobTitle: 'Maintenance Electrician',
        employer: 'Ord River Sugar',
        startYear: '2023',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '4',
        summary: 'Maintains electrical infrastructure for agricultural processing facility.',
        jobCategory: 'Agriculture',
        experiences: [
          { id: 'exp-20', description: 'Implementing new PLC control systems', rating: '4' }
        ],
        tasks: [
          { id: 'task-31', task: 'Equipment maintenance', rating: '4' },
          { id: 'task-32', task: 'System upgrades', rating: '4' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate III',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-9',
          level: 'Certificate III',
          institution: 'TAFE WA',
          name: 'Electrotechnology Electrician',
          areaOfStudy: 'Electrical',
          completionDate: '2017-03-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-16', courseName: 'High Voltage Switching', certificateAvailable: 'Yes' },
        { id: 'train-17', courseName: 'Working at Heights', certificateAvailable: 'Yes' },
        { id: 'train-18', courseName: 'Confined Spaces', certificateAvailable: 'Yes' },
        { id: 'train-19', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-20', skill: 'Electrical Maintenance', rating: '5' },
        { id: 'skill-21', skill: 'PLC Programming', rating: '4' },
        { id: 'skill-22', skill: 'Fault Diagnosis', rating: '5' },
        { id: 'skill-23', skill: 'Team Leadership', rating: '4' }
      ],
      competencies: [
        { id: 'comp-17', competency: 'Safety Compliance', rating: '5' },
        { id: 'comp-18', competency: 'Technical Documentation', rating: '4' },
        { id: 'comp-19', competency: 'Equipment Maintenance', rating: '5' }
      ]
    },
    recommendations: [
      {
        id: 'rec-8',
        recommendation: 'Consider Certificate IV in Electrical Instrumentation for career progression.',
        createdAt: isoDaysAgo(8)
      }
    ],
    notes: [
      {
        id: 'note-12',
        content: 'Highly skilled tradesperson, excellent safety record.',
        timestamp: isoDaysAgo(10),
        author: 'Peter Collins',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Qualified electrician with extensive mining and industrial experience.',
      aspirations: 'Progress into electrical supervisor or instrumentation specialist role.',
      preferredIndustries: ['Mining', 'Agriculture', 'Construction']
    },
    surveys: [
      {
        id: 'survey-10',
        title: 'Employment Pathways Survey',
        date: '2024-09-15 at 9:00 AM',
        referralData: {
          referralPathway: 'Phone In',
          clientFirstName: 'Jarrah',
          clientLastName: 'Nguyen',
          clientPhoneNumber: '08 9789 0123',
          clientEmail: 'jarrah.nguyen@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Male'
        }
      }
    ],
    referrals: [],
    history: []
  },
  {
    id: 'person-9',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Aaliyah',
      middleName: 'Grace',
      lastName: 'Brown',
      dateOfBirth: '1997-07-22',
      gender: 'Female',
      motherName: 'Jenny Brown',
      fatherName: 'Michael Brown',
      community: 'Derby',
      familyGroup: 'Group D',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-112345',
      driversLicenceExpiry: '2026-05-30',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'No',
      familyDependants: 'No',
      culturalRequirements: 'Participates in annual cultural festivals.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Seeking mentorship in tourism business.',
      generalInformation: 'Passionate about cultural tourism and storytelling.',
      streetAddress1: '22 Loch Street',
      streetAddress2: '',
      suburb: 'Derby',
      state: 'WA',
      postcode: '6728',
      trainingTypeInterest: 'Tourism management and small business',
      personalContext: 'Flexible availability, keen to grow tourism venture.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-17',
        jobTitle: 'Cultural Tour Guide',
        employer: 'Kimberley Cultural Tours',
        startYear: '2020',
        endYear: '',
        currentJob: true,
        workType: 'Part-time',
        rating: '5',
        summary: 'Leads cultural tours sharing Indigenous history and bush tucker knowledge.',
        jobCategory: 'Tourism',
        experiences: [
          { id: 'exp-21', description: 'Developed new sunset tour experience', rating: '5' },
          { id: 'exp-22', description: 'Featured in Tourism WA promotional campaign', rating: '5' }
        ],
        tasks: [
          { id: 'task-33', task: 'Tour delivery and storytelling', rating: '5' },
          { id: 'task-34', task: 'Customer engagement', rating: '5' }
        ]
      },
      {
        id: 'wh-18',
        jobTitle: 'Hospitality Attendant',
        employer: 'Derby Lodge',
        startYear: '2018',
        endYear: '2020',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Front desk and guest services in regional accommodation.',
        jobCategory: 'Hospitality',
        experiences: [
          { id: 'exp-23', description: 'Achieved 95% guest satisfaction rating', rating: '4' }
        ],
        tasks: [
          { id: 'task-35', task: 'Guest check-in and reservations', rating: '4' },
          { id: 'task-36', task: 'Concierge services', rating: '4' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate III',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-10',
          level: 'Certificate III',
          institution: 'TAFE WA',
          name: 'Tourism',
          areaOfStudy: 'Tourism',
          completionDate: '2019-11-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-20', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' },
        { id: 'train-21', courseName: 'Food Safety Handler', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-24', skill: 'Cultural Storytelling', rating: '5' },
        { id: 'skill-25', skill: 'Customer Service', rating: '5' },
        { id: 'skill-26', skill: 'Tour Operations', rating: '4' }
      ],
      competencies: [
        { id: 'comp-20', competency: 'Public Speaking', rating: '5' },
        { id: 'comp-21', competency: 'Cultural Knowledge', rating: '5' }
      ]
    },
    recommendations: [
      {
        id: 'rec-9',
        recommendation: 'Explore Diploma of Tourism and Travel Management for business growth.',
        createdAt: isoDaysAgo(15)
      }
    ],
    notes: [
      {
        id: 'note-13',
        content: 'Interested in starting own cultural tourism business.',
        timestamp: isoDaysAgo(12),
        author: 'Lisa Chen',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Talented cultural tour guide with strong customer engagement skills.',
      aspirations: 'Launch independent cultural tourism business.',
      preferredIndustries: ['Tourism', 'Hospitality']
    },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-10',
    engagementStatus: 'Re-engaging',
    personalDetails: {
      firstName: 'Blake',
      middleName: 'Thomas',
      lastName: 'McCarthy',
      dateOfBirth: '1982-01-14',
      gender: 'Male',
      motherName: 'Susan McCarthy',
      fatherName: 'Robert McCarthy',
      community: 'Fitzroy Crossing',
      familyGroup: 'Group A',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-223456',
      driversLicenceExpiry: '2025-11-20',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'Yes',
      familyDependants: 'Yes',
      culturalRequirements: 'Senior law man, requires flexibility for ceremonies.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Pending',
      additionalSupportNeeded: 'Medical clearance follow-up needed.',
      generalInformation: 'Experienced drill and blast operator returning to workforce.',
      streetAddress1: '8 Forrest Road',
      streetAddress2: '',
      suburb: 'Fitzroy Crossing',
      state: 'WA',
      postcode: '6765',
      trainingTypeInterest: 'Shotfirer certification renewal',
      personalContext: 'Supporting extended family, needs stable income.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-19',
        jobTitle: 'Drill and Blast Operator',
        employer: 'Fortescue Metals Group',
        startYear: '2008',
        endYear: '2019',
        currentJob: false,
        workType: 'Full-time',
        rating: '5',
        summary: 'Senior drill and blast operator with shotfirer certification.',
        jobCategory: 'Mining',
        experiences: [
          { id: 'exp-24', description: 'Achieved 500+ incident-free blast events', rating: '5' },
          { id: 'exp-25', description: 'Trained 20+ new drill operators', rating: '5' }
        ],
        tasks: [
          { id: 'task-37', task: 'Blast pattern design', rating: '5' },
          { id: 'task-38', task: 'Explosive handling and storage', rating: '5' },
          { id: 'task-39', task: 'Team coordination', rating: '4' }
        ]
      },
      {
        id: 'wh-20',
        jobTitle: 'Underground Miner',
        employer: 'Telfer Gold Mine',
        startYear: '2003',
        endYear: '2008',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Underground mining operations including bogger and jumbo operation.',
        jobCategory: 'Mining',
        experiences: [
          { id: 'exp-26', description: 'Completed underground supervisor training', rating: '4' }
        ],
        tasks: [
          { id: 'task-40', task: 'Bogger operation', rating: '4' },
          { id: 'task-41', task: 'Ground support installation', rating: '4' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate IV',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-11',
          level: 'Certificate IV',
          institution: 'WA School of Mines',
          name: 'Surface Extraction Operations',
          areaOfStudy: 'Mining',
          completionDate: '2012-06-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        },
        {
          id: 'qual-12',
          level: 'Certificate III',
          institution: 'TAFE WA',
          name: 'Underground Metalliferous Mining',
          areaOfStudy: 'Mining',
          completionDate: '2006-03-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-22', courseName: 'Shotfirer Certification', certificateAvailable: 'Yes' },
        { id: 'train-23', courseName: 'Working at Heights', certificateAvailable: 'Yes' },
        { id: 'train-24', courseName: 'Confined Spaces', certificateAvailable: 'Yes' },
        { id: 'train-25', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-27', skill: 'Drill Operations', rating: '5' },
        { id: 'skill-28', skill: 'Blast Design', rating: '5' },
        { id: 'skill-29', skill: 'Team Leadership', rating: '4' },
        { id: 'skill-30', skill: 'Safety Management', rating: '5' }
      ],
      competencies: [
        { id: 'comp-22', competency: 'Explosive Handling', rating: '5' },
        { id: 'comp-23', competency: 'Risk Assessment', rating: '5' },
        { id: 'comp-24', competency: 'Training Delivery', rating: '4' }
      ]
    },
    recommendations: [
      {
        id: 'rec-10',
        recommendation: 'Complete medical clearance and renew shotfirer certification.',
        createdAt: isoDaysAgo(6)
      }
    ],
    notes: [
      {
        id: 'note-14',
        content: 'Highly experienced operator. Medical clearance pending.',
        timestamp: isoDaysAgo(4),
        author: 'Tom Richards',
        status: 'Pending'
      }
    ],
    profile: {
      summary: 'Senior mining professional with extensive drill and blast experience.',
      aspirations: 'Return to mining in supervisory capacity.',
      preferredIndustries: ['Mining']
    },
    surveys: [
      {
        id: 'survey-11',
        title: 'Re-engagement Assessment',
        date: '2024-12-05 at 10:00 AM',
        referralData: {
          referralPathway: 'Walk In',
          clientFirstName: 'Blake',
          clientLastName: 'McCarthy',
          clientPhoneNumber: '08 9890 1234',
          clientEmail: 'blake.mccarthy@example.com',
          clientAPP: 'Survey completed',
          clientGender: 'Male'
        }
      }
    ],
    referrals: [],
    history: []
  },
  {
    id: 'person-11',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Tiana',
      middleName: 'Joy',
      lastName: 'Peters',
      dateOfBirth: '1994-05-18',
      gender: 'Female',
      motherName: 'Angela Peters',
      fatherName: 'Kevin Peters',
      community: 'Broome',
      familyGroup: 'Group E',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-334567',
      driversLicenceExpiry: '2027-08-25',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'No',
      familyDependants: 'No',
      culturalRequirements: 'Available for cultural events with notice.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'None.',
      generalInformation: 'Digital marketing specialist supporting Indigenous businesses.',
      streetAddress1: '88 Dampier Terrace',
      streetAddress2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725',
      trainingTypeInterest: 'Advanced digital marketing and analytics',
      personalContext: 'Flexible availability.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-21',
        jobTitle: 'Digital Marketing Coordinator',
        employer: 'Kimberley Development Commission',
        startYear: '2020',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Manages digital presence and marketing campaigns for regional development initiatives.',
        jobCategory: 'Government',
        experiences: [
          { id: 'exp-27', description: 'Increased social media engagement by 200%', rating: '5' }
        ],
        tasks: [
          { id: 'task-42', task: 'Social media management', rating: '5' },
          { id: 'task-43', task: 'Content creation', rating: '5' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Bachelor Degree',
      interestedInTraining: 'Yes',
      qualifications: [
        {
          id: 'qual-13',
          level: 'Bachelor',
          institution: 'Edith Cowan University',
          name: 'Marketing and Communications',
          areaOfStudy: 'Business',
          completionDate: '2019-12-01',
          status: 'Completed',
          certificateAvailable: 'Yes'
        }
      ],
      trainings: [
        { id: 'train-26', courseName: 'Google Analytics Certification', certificateAvailable: 'Yes' },
        { id: 'train-27', courseName: 'Facebook Blueprint', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-31', skill: 'Social Media Marketing', rating: '5' },
        { id: 'skill-32', skill: 'Content Creation', rating: '5' },
        { id: 'skill-33', skill: 'Data Analytics', rating: '4' }
      ],
      competencies: [
        { id: 'comp-25', competency: 'Campaign Management', rating: '5' },
        { id: 'comp-26', competency: 'Brand Development', rating: '4' }
      ]
    },
    recommendations: [{ id: 'rec-11', recommendation: 'Explore Google Ads certification.', createdAt: isoDaysAgo(10) }],
    notes: [{ id: 'note-15', content: 'Strong digital skills, supports local businesses.', timestamp: isoDaysAgo(5), author: 'Sarah Lee', status: 'Active' }],
    profile: { summary: 'Digital marketing professional supporting regional development.', aspirations: 'Lead regional marketing strategy.', preferredIndustries: ['Government', 'Tourism'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-12',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Ethan',
      middleName: 'David',
      lastName: 'Murray',
      dateOfBirth: '2001-09-05',
      gender: 'Male',
      motherName: 'Karen Murray',
      fatherName: 'James Murray',
      community: 'Kununurra',
      familyGroup: 'Group B',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-445678',
      driversLicenceExpiry: '2028-02-14',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'No',
      culturalRequirements: 'Flexible.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Seeking apprenticeship opportunities.',
      generalInformation: 'Young school leaver interested in mechanical trade.',
      streetAddress1: '12 Coolibah Drive',
      streetAddress2: '',
      suburb: 'Kununurra',
      state: 'WA',
      postcode: '6743',
      trainingTypeInterest: 'Mechanical apprenticeship',
      personalContext: 'Living with family, available immediately.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-22',
        jobTitle: 'Workshop Hand',
        employer: 'East Kimberley Mechanical',
        startYear: '2023',
        endYear: '',
        currentJob: true,
        workType: 'Part-time',
        rating: '4',
        summary: 'Assists mechanics with workshop duties and basic repairs.',
        jobCategory: 'Automotive',
        experiences: [{ id: 'exp-28', description: 'Learning basic mechanical skills', rating: '3' }],
        tasks: [{ id: 'task-44', task: 'Workshop cleanup and tool maintenance', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Year 12',
      interestedInTraining: 'Yes',
      qualifications: [],
      trainings: [{ id: 'train-28', courseName: 'White Card', certificateAvailable: 'Yes' }],
      skills: [{ id: 'skill-34', skill: 'Basic Mechanical', rating: '3' }, { id: 'skill-35', skill: 'Hand Tools', rating: '3' }],
      competencies: [{ id: 'comp-27', competency: 'Work Ethic', rating: '4' }]
    },
    recommendations: [{ id: 'rec-12', recommendation: 'Apply for mechanical apprenticeship program.', createdAt: isoDaysAgo(7) }],
    notes: [{ id: 'note-16', content: 'Keen and motivated young person.', timestamp: isoDaysAgo(14), author: 'Mike Brown', status: 'Active' }],
    profile: { summary: 'Motivated young person seeking mechanical trade pathway.', aspirations: 'Become qualified diesel mechanic.', preferredIndustries: ['Mining', 'Automotive'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-13',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Shania',
      middleName: 'Marie',
      lastName: 'Foster',
      dateOfBirth: '1987-03-12',
      gender: 'Female',
      motherName: 'Dorothy Foster',
      fatherName: 'Gary Foster',
      community: 'Derby',
      familyGroup: 'Group C',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-556789',
      driversLicenceExpiry: '2026-04-18',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'No',
      familyDependants: 'Yes',
      culturalRequirements: 'Strong cultural commitments, needs flexibility.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Childcare support appreciated.',
      generalInformation: 'Community development officer with strong advocacy background.',
      streetAddress1: '34 Clarendon Street',
      streetAddress2: '',
      suburb: 'Derby',
      state: 'WA',
      postcode: '6728',
      trainingTypeInterest: 'Policy development and governance',
      personalContext: 'Mother of three, works around school hours.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-23',
        jobTitle: 'Community Development Officer',
        employer: 'Shire of Derby-West Kimberley',
        startYear: '2015',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Coordinates community programs and liaises with Indigenous organisations.',
        jobCategory: 'Government',
        experiences: [
          { id: 'exp-29', description: 'Secured $2M funding for community projects', rating: '5' },
          { id: 'exp-30', description: 'Established youth leadership program', rating: '5' }
        ],
        tasks: [
          { id: 'task-45', task: 'Grant writing and acquittals', rating: '5' },
          { id: 'task-46', task: 'Stakeholder engagement', rating: '5' },
          { id: 'task-47', task: 'Program evaluation', rating: '4' }
        ]
      },
      {
        id: 'wh-24',
        jobTitle: 'Administration Officer',
        employer: 'Derby Aboriginal Health Service',
        startYear: '2010',
        endYear: '2015',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Managed administrative functions and client services.',
        jobCategory: 'Healthcare',
        experiences: [{ id: 'exp-31', description: 'Improved client intake processes', rating: '4' }],
        tasks: [{ id: 'task-48', task: 'Reception and client services', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Diploma',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-14', level: 'Diploma', institution: 'TAFE WA', name: 'Community Development', areaOfStudy: 'Community Services', completionDate: '2014-11-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-29', courseName: 'Grant Writing Masterclass', certificateAvailable: 'Yes' },
        { id: 'train-30', courseName: 'Project Management Fundamentals', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-36', skill: 'Grant Writing', rating: '5' },
        { id: 'skill-37', skill: 'Stakeholder Engagement', rating: '5' },
        { id: 'skill-38', skill: 'Program Design', rating: '5' },
        { id: 'skill-39', skill: 'Advocacy', rating: '5' }
      ],
      competencies: [
        { id: 'comp-28', competency: 'Community Consultation', rating: '5' },
        { id: 'comp-29', competency: 'Policy Analysis', rating: '4' },
        { id: 'comp-30', competency: 'Budget Management', rating: '4' }
      ]
    },
    recommendations: [{ id: 'rec-13', recommendation: 'Consider Bachelor of Public Policy for career advancement.', createdAt: isoDaysAgo(20) }],
    notes: [{ id: 'note-17', content: 'Exceptional community advocate.', timestamp: isoDaysAgo(3), author: 'Jane Cooper', status: 'Active' }],
    profile: { summary: 'Experienced community development professional with strong advocacy skills.', aspirations: 'Move into senior policy or management role.', preferredIndustries: ['Government', 'Community Services'] },
    surveys: [{ id: 'survey-12', title: 'Professional Development Survey', date: '2024-11-01 at 3:00 PM', referralData: { referralPathway: 'Walk In', clientFirstName: 'Shania', clientLastName: 'Foster', clientPhoneNumber: '08 9901 2345', clientEmail: 'shania.foster@example.com', clientAPP: 'Survey completed', clientGender: 'Female' } }],
    referrals: [],
    history: []
  },
  {
    id: 'person-14',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Nathan',
      middleName: 'William',
      lastName: 'Hughes',
      dateOfBirth: '1989-11-27',
      gender: 'Male',
      motherName: 'Patricia Hughes',
      fatherName: 'Richard Hughes',
      community: 'Kununurra',
      familyGroup: 'Group D',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-667890',
      driversLicenceExpiry: '2027-06-30',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'Yes',
      culturalRequirements: 'Requires time for cultural activities.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'None.',
      generalInformation: 'Experienced heavy diesel mechanic with mining background.',
      streetAddress1: '56 Weaber Plain Road',
      streetAddress2: '',
      suburb: 'Kununurra',
      state: 'WA',
      postcode: '6743',
      trainingTypeInterest: 'Advanced diagnostics and supervisory skills',
      personalContext: 'Married with two children.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-25',
        jobTitle: 'Heavy Diesel Mechanic',
        employer: 'Newcrest Mining',
        startYear: '2014',
        endYear: '2022',
        currentJob: false,
        workType: 'Full-time',
        rating: '5',
        summary: 'Maintained CAT haul trucks and excavators on mine site.',
        jobCategory: 'Mining',
        experiences: [
          { id: 'exp-32', description: 'Achieved zero equipment downtime for 3 consecutive months', rating: '5' },
          { id: 'exp-33', description: 'Trained 8 apprentices', rating: '5' }
        ],
        tasks: [
          { id: 'task-49', task: 'Preventive maintenance', rating: '5' },
          { id: 'task-50', task: 'Breakdown repairs', rating: '5' },
          { id: 'task-51', task: 'Apprentice mentoring', rating: '4' }
        ]
      },
      {
        id: 'wh-26',
        jobTitle: 'Workshop Foreman',
        employer: 'Kimberley Heavy Equipment',
        startYear: '2022',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '4',
        summary: 'Manages workshop operations and team of 5 mechanics.',
        jobCategory: 'Automotive',
        experiences: [{ id: 'exp-34', description: 'Streamlined workshop scheduling system', rating: '4' }],
        tasks: [{ id: 'task-52', task: 'Team supervision', rating: '4' }, { id: 'task-53', task: 'Quality control', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate III',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-15', level: 'Certificate III', institution: 'TAFE WA', name: 'Heavy Commercial Vehicle Mechanical Technology', areaOfStudy: 'Automotive', completionDate: '2013-06-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-31', courseName: 'CAT Equipment Specialist', certificateAvailable: 'Yes' },
        { id: 'train-32', courseName: 'Komatsu Diagnostics', certificateAvailable: 'Yes' },
        { id: 'train-33', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-40', skill: 'Heavy Equipment Repair', rating: '5' },
        { id: 'skill-41', skill: 'Diagnostic Systems', rating: '5' },
        { id: 'skill-42', skill: 'Team Leadership', rating: '4' },
        { id: 'skill-43', skill: 'Workshop Management', rating: '4' }
      ],
      competencies: [
        { id: 'comp-31', competency: 'Equipment Maintenance', rating: '5' },
        { id: 'comp-32', competency: 'Safety Management', rating: '5' },
        { id: 'comp-33', competency: 'Quality Assurance', rating: '4' }
      ]
    },
    recommendations: [{ id: 'rec-14', recommendation: 'Consider Certificate IV in Leadership for supervisory pathway.', createdAt: isoDaysAgo(15) }],
    notes: [{ id: 'note-18', content: 'Excellent technical skills and leadership potential.', timestamp: isoDaysAgo(8), author: 'Greg Thompson', status: 'Active' }],
    profile: { summary: 'Skilled heavy diesel mechanic with workshop management experience.', aspirations: 'Progress into maintenance superintendent role.', preferredIndustries: ['Mining', 'Construction'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-15',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Imogen',
      middleName: 'Kate',
      lastName: 'Daniels',
      dateOfBirth: '1996-08-14',
      gender: 'Female',
      motherName: 'Helen Daniels',
      fatherName: 'Bruce Daniels',
      community: 'Broome',
      familyGroup: 'Group A',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-778901',
      driversLicenceExpiry: '2026-12-05',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'No',
      familyDependants: 'No',
      culturalRequirements: 'Flexible.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Mentorship in accounting.',
      generalInformation: 'Recent accounting graduate seeking experience.',
      streetAddress1: '19 Robinson Street',
      streetAddress2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725',
      trainingTypeInterest: 'CPA program and financial software',
      personalContext: 'Available immediately.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-27',
        jobTitle: 'Accounts Clerk',
        employer: 'Broome Accounting Services',
        startYear: '2022',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '4',
        summary: 'Processes accounts payable/receivable and assists with BAS preparation.',
        jobCategory: 'Finance',
        experiences: [{ id: 'exp-35', description: 'Streamlined invoice processing workflow', rating: '4' }],
        tasks: [{ id: 'task-54', task: 'Data entry and reconciliation', rating: '4' }, { id: 'task-55', task: 'Client liaison', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Bachelor Degree',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-16', level: 'Bachelor', institution: 'Curtin University', name: 'Accounting', areaOfStudy: 'Business', completionDate: '2021-12-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-34', courseName: 'MYOB Certification', certificateAvailable: 'Yes' },
        { id: 'train-35', courseName: 'Xero Advisor', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-44', skill: 'Financial Reporting', rating: '4' },
        { id: 'skill-45', skill: 'Tax Compliance', rating: '3' },
        { id: 'skill-46', skill: 'Accounting Software', rating: '4' }
      ],
      competencies: [
        { id: 'comp-34', competency: 'Attention to Detail', rating: '5' },
        { id: 'comp-35', competency: 'Problem Solving', rating: '4' }
      ]
    },
    recommendations: [{ id: 'rec-15', recommendation: 'Enrol in CPA program to advance career.', createdAt: isoDaysAgo(12) }],
    notes: [{ id: 'note-19', content: 'Promising young accountant, diligent worker.', timestamp: isoDaysAgo(6), author: 'Carol White', status: 'Active' }],
    profile: { summary: 'Graduate accountant building professional experience.', aspirations: 'Become CPA qualified accountant.', preferredIndustries: ['Finance', 'Government'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-16',
    engagementStatus: 'Re-engaging',
    personalDetails: {
      firstName: 'Tyson',
      middleName: 'Ray',
      lastName: 'Edwards',
      dateOfBirth: '1980-04-25',
      gender: 'Male',
      motherName: 'Maggie Edwards',
      fatherName: 'Trevor Edwards',
      community: 'Wyndham',
      familyGroup: 'Group E',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-889012',
      driversLicenceExpiry: '2025-07-18',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'Yes',
      familyDependants: 'Yes',
      culturalRequirements: 'Elder responsibilities, needs flexibility.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Seeking local employment.',
      generalInformation: 'Experienced ranger returning to workforce after family responsibilities.',
      streetAddress1: '28 O Donnell Street',
      streetAddress2: '',
      suburb: 'Wyndham',
      state: 'WA',
      postcode: '6740',
      trainingTypeInterest: 'Ranger qualifications update',
      personalContext: 'Elder with cultural responsibilities.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-28',
        jobTitle: 'Senior Ranger',
        employer: 'Wunambal Gaambera Aboriginal Corporation',
        startYear: '2005',
        endYear: '2020',
        currentJob: false,
        workType: 'Full-time',
        rating: '5',
        summary: 'Led ranger team in land and sea management programs.',
        jobCategory: 'Environmental',
        experiences: [
          { id: 'exp-36', description: 'Managed fire management program across 2.5M hectares', rating: '5' },
          { id: 'exp-37', description: 'Trained 30+ junior rangers', rating: '5' }
        ],
        tasks: [
          { id: 'task-56', task: 'Cultural fire management', rating: '5' },
          { id: 'task-57', task: 'Team leadership', rating: '5' },
          { id: 'task-58', task: 'Traditional knowledge documentation', rating: '5' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate IV',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-17', level: 'Certificate IV', institution: 'Kimberley Training Institute', name: 'Conservation and Land Management', areaOfStudy: 'Environmental', completionDate: '2008-06-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-36', courseName: 'Coxswain Certificate', certificateAvailable: 'Yes' },
        { id: 'train-37', courseName: 'Remote Area First Aid', certificateAvailable: 'Yes' },
        { id: 'train-38', courseName: 'Chainsaw Operations', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-47', skill: 'Land Management', rating: '5' },
        { id: 'skill-48', skill: 'Fire Management', rating: '5' },
        { id: 'skill-49', skill: 'Traditional Knowledge', rating: '5' },
        { id: 'skill-50', skill: 'Team Leadership', rating: '5' }
      ],
      competencies: [
        { id: 'comp-36', competency: 'Environmental Monitoring', rating: '5' },
        { id: 'comp-37', competency: 'Cultural Education', rating: '5' },
        { id: 'comp-38', competency: 'Program Management', rating: '4' }
      ]
    },
    recommendations: [{ id: 'rec-16', recommendation: 'Reconnect with ranger programs in region.', createdAt: isoDaysAgo(10) }],
    notes: [{ id: 'note-20', content: 'Highly respected elder with exceptional land management experience.', timestamp: isoDaysAgo(7), author: 'David Martin', status: 'Active' }],
    profile: { summary: 'Experienced senior ranger with deep traditional knowledge.', aspirations: 'Continue contributing to land management and cultural education.', preferredIndustries: ['Environmental', 'Education'] },
    surveys: [{ id: 'survey-13', title: 'Re-engagement Survey', date: '2024-11-28 at 10:30 AM', referralData: { referralPathway: 'Agency Referred', clientFirstName: 'Tyson', clientLastName: 'Edwards', clientPhoneNumber: '08 9012 3456', clientEmail: 'tyson.edwards@example.com', clientAPP: 'Survey completed', clientGender: 'Male' } }],
    referrals: [],
    history: []
  },
  {
    id: 'person-17',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Chelsea',
      middleName: 'Ann',
      lastName: 'Green',
      dateOfBirth: '1993-01-30',
      gender: 'Female',
      motherName: 'Barbara Green',
      fatherName: 'Scott Green',
      community: 'Halls Creek',
      familyGroup: 'Group B',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-990123',
      driversLicenceExpiry: '2027-09-12',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'No',
      familyDependants: 'Yes',
      culturalRequirements: 'Participates in annual cultural activities.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Childcare during training.',
      generalInformation: 'Childcare educator passionate about early childhood development.',
      streetAddress1: '15 Thomas Street',
      streetAddress2: '',
      suburb: 'Halls Creek',
      state: 'WA',
      postcode: '6770',
      trainingTypeInterest: 'Early childhood education diploma',
      personalContext: 'Single mother, works school hours.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-29',
        jobTitle: 'Childcare Educator',
        employer: 'Halls Creek Early Learning Centre',
        startYear: '2018',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Provides early childhood education with cultural focus.',
        jobCategory: 'Education',
        experiences: [
          { id: 'exp-38', description: 'Developed cultural learning curriculum', rating: '5' },
          { id: 'exp-39', description: 'Achieved exceeding rating in quality assessment', rating: '5' }
        ],
        tasks: [
          { id: 'task-59', task: 'Program planning', rating: '5' },
          { id: 'task-60', task: 'Child development observations', rating: '5' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate III',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-18', level: 'Certificate III', institution: 'TAFE WA', name: 'Early Childhood Education and Care', areaOfStudy: 'Education', completionDate: '2017-12-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-39', courseName: 'First Aid - Child Care', certificateAvailable: 'Yes' },
        { id: 'train-40', courseName: 'Child Protection', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-51', skill: 'Early Childhood Education', rating: '5' },
        { id: 'skill-52', skill: 'Cultural Programming', rating: '5' },
        { id: 'skill-53', skill: 'Parent Communication', rating: '4' }
      ],
      competencies: [
        { id: 'comp-39', competency: 'Child Development', rating: '5' },
        { id: 'comp-40', competency: 'Curriculum Planning', rating: '4' }
      ]
    },
    recommendations: [{ id: 'rec-17', recommendation: 'Pursue Diploma of Early Childhood Education.', createdAt: isoDaysAgo(18) }],
    notes: [{ id: 'note-21', content: 'Exceptional educator with strong cultural focus.', timestamp: isoDaysAgo(9), author: 'Rachel Adams', status: 'Active' }],
    profile: { summary: 'Dedicated childcare educator focused on cultural early learning.', aspirations: 'Become centre director.', preferredIndustries: ['Education', 'Community Services'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-18',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Marcus',
      middleName: 'John',
      lastName: 'Phillips',
      dateOfBirth: '1998-06-08',
      gender: 'Male',
      motherName: 'Sandra Phillips',
      fatherName: 'Andrew Phillips',
      community: 'Fitzroy Crossing',
      familyGroup: 'Group C',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-101234',
      driversLicenceExpiry: '2028-03-22',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'No',
      culturalRequirements: 'Available for ceremonies with notice.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Interview coaching.',
      generalInformation: 'Fit young person interested in emergency services.',
      streetAddress1: '42 Geikie Gorge Road',
      streetAddress2: '',
      suburb: 'Fitzroy Crossing',
      state: 'WA',
      postcode: '6765',
      trainingTypeInterest: 'Emergency services and rescue',
      personalContext: 'Highly active, involved in community sports.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-30',
        jobTitle: 'Volunteer Firefighter',
        employer: 'Fitzroy Crossing Volunteer Fire Brigade',
        startYear: '2020',
        endYear: '',
        currentJob: true,
        workType: 'Part-time',
        rating: '5',
        summary: 'Responds to bushfires and emergency incidents in region.',
        jobCategory: 'Emergency Services',
        experiences: [{ id: 'exp-40', description: 'Responded to 50+ emergency callouts', rating: '5' }],
        tasks: [{ id: 'task-61', task: 'Fire suppression', rating: '5' }, { id: 'task-62', task: 'Community education', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate II',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-19', level: 'Certificate II', institution: 'DFES Training Academy', name: 'Firefighting Operations', areaOfStudy: 'Emergency Services', completionDate: '2020-06-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-41', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' },
        { id: 'train-42', courseName: 'Chainsaw Operations', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-54', skill: 'Firefighting', rating: '4' },
        { id: 'skill-55', skill: 'Emergency Response', rating: '4' },
        { id: 'skill-56', skill: 'Physical Fitness', rating: '5' }
      ],
      competencies: [
        { id: 'comp-41', competency: 'Team Coordination', rating: '4' },
        { id: 'comp-42', competency: 'Risk Assessment', rating: '3' }
      ]
    },
    recommendations: [{ id: 'rec-18', recommendation: 'Apply for career firefighter or SES positions.', createdAt: isoDaysAgo(5) }],
    notes: [{ id: 'note-22', content: 'Dedicated volunteer, strong community spirit.', timestamp: isoDaysAgo(11), author: 'Steve Jackson', status: 'Active' }],
    profile: { summary: 'Fit and dedicated volunteer firefighter seeking career in emergency services.', aspirations: 'Become career firefighter or emergency services officer.', preferredIndustries: ['Emergency Services', 'Government'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-19',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Jasmine',
      middleName: 'Lee',
      lastName: 'Cooper',
      dateOfBirth: '1986-10-22',
      gender: 'Female',
      motherName: 'Mary Cooper',
      fatherName: 'Brian Cooper',
      community: 'Broome',
      familyGroup: 'Group D',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-212345',
      driversLicenceExpiry: '2026-11-15',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'No',
      familyDependants: 'Yes',
      culturalRequirements: 'Strong cultural ties, needs flexibility.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'None.',
      generalInformation: 'Senior nurse with management experience.',
      streetAddress1: '67 Port Drive',
      streetAddress2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725',
      trainingTypeInterest: 'Nursing management and clinical leadership',
      personalContext: 'Married with children.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-31',
        jobTitle: 'Clinical Nurse Manager',
        employer: 'Broome Regional Hospital',
        startYear: '2018',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Manages nursing staff and clinical operations in emergency department.',
        jobCategory: 'Healthcare',
        experiences: [
          { id: 'exp-41', description: 'Led COVID-19 response team', rating: '5' },
          { id: 'exp-42', description: 'Implemented culturally safe care protocols', rating: '5' }
        ],
        tasks: [
          { id: 'task-63', task: 'Staff rostering and management', rating: '5' },
          { id: 'task-64', task: 'Clinical governance', rating: '5' }
        ]
      },
      {
        id: 'wh-32',
        jobTitle: 'Registered Nurse',
        employer: 'Broome Regional Hospital',
        startYear: '2010',
        endYear: '2018',
        currentJob: false,
        workType: 'Full-time',
        rating: '5',
        summary: 'Emergency department nursing care.',
        jobCategory: 'Healthcare',
        experiences: [{ id: 'exp-43', description: 'Completed emergency nursing specialty', rating: '5' }],
        tasks: [{ id: 'task-65', task: 'Patient care', rating: '5' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Bachelor Degree',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-20', level: 'Bachelor', institution: 'University of Notre Dame', name: 'Nursing', areaOfStudy: 'Healthcare', completionDate: '2009-12-01', status: 'Completed', certificateAvailable: 'Yes' },
        { id: 'qual-21', level: 'Certificate IV', institution: 'TAFE WA', name: 'Training and Assessment', areaOfStudy: 'Education', completionDate: '2016-06-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-43', courseName: 'Advanced Life Support', certificateAvailable: 'Yes' },
        { id: 'train-44', courseName: 'Emergency Nursing Specialty', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-57', skill: 'Clinical Leadership', rating: '5' },
        { id: 'skill-58', skill: 'Emergency Care', rating: '5' },
        { id: 'skill-59', skill: 'Staff Management', rating: '5' }
      ],
      competencies: [
        { id: 'comp-43', competency: 'Clinical Governance', rating: '5' },
        { id: 'comp-44', competency: 'Quality Improvement', rating: '5' }
      ]
    },
    recommendations: [{ id: 'rec-19', recommendation: 'Consider Masters of Nursing for career progression.', createdAt: isoDaysAgo(22) }],
    notes: [{ id: 'note-23', content: 'Outstanding clinical leader.', timestamp: isoDaysAgo(4), author: 'Dr. Smith', status: 'Active' }],
    profile: { summary: 'Experienced nurse manager with strong clinical and leadership skills.', aspirations: 'Progress to Director of Nursing.', preferredIndustries: ['Healthcare'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-20',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Lachlan',
      middleName: 'Peter',
      lastName: 'Stewart',
      dateOfBirth: '2000-03-15',
      gender: 'Male',
      motherName: 'Wendy Stewart',
      fatherName: 'Craig Stewart',
      community: 'Derby',
      familyGroup: 'Group E',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-323456',
      driversLicenceExpiry: '2027-05-20',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'No',
      culturalRequirements: 'Flexible.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Apprenticeship placement.',
      generalInformation: 'Recent school leaver interested in plumbing trade.',
      streetAddress1: '29 Villiers Street',
      streetAddress2: '',
      suburb: 'Derby',
      state: 'WA',
      postcode: '6728',
      trainingTypeInterest: 'Plumbing apprenticeship',
      personalContext: 'Available for any work arrangement.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-33',
        jobTitle: 'Labourer',
        employer: 'Derby Building Supplies',
        startYear: '2022',
        endYear: '',
        currentJob: true,
        workType: 'Part-time',
        rating: '4',
        summary: 'General labouring and customer service.',
        jobCategory: 'Construction',
        experiences: [{ id: 'exp-44', description: 'Completed forklift licence', rating: '4' }],
        tasks: [{ id: 'task-66', task: 'Loading and unloading materials', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Year 12',
      interestedInTraining: 'Yes',
      qualifications: [],
      trainings: [
        { id: 'train-45', courseName: 'White Card', certificateAvailable: 'Yes' },
        { id: 'train-46', courseName: 'Forklift Licence', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-60', skill: 'Manual Handling', rating: '4' },
        { id: 'skill-61', skill: 'Customer Service', rating: '3' }
      ],
      competencies: [{ id: 'comp-45', competency: 'Work Ethic', rating: '4' }]
    },
    recommendations: [{ id: 'rec-20', recommendation: 'Apply for plumbing pre-apprenticeship program.', createdAt: isoDaysAgo(8) }],
    notes: [{ id: 'note-24', content: 'Reliable worker, keen to start trade.', timestamp: isoDaysAgo(6), author: 'Tony Williams', status: 'Active' }],
    profile: { summary: 'Motivated young person seeking plumbing apprenticeship.', aspirations: 'Become licensed plumber.', preferredIndustries: ['Construction'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-21',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Bianca',
      middleName: 'Rose',
      lastName: 'Turner',
      dateOfBirth: '1992-07-08',
      gender: 'Female',
      motherName: 'Julie Turner',
      fatherName: 'Paul Turner',
      community: 'Kununurra',
      familyGroup: 'Group A',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-434567',
      driversLicenceExpiry: '2028-04-10',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'No',
      familyDependants: 'No',
      culturalRequirements: 'Participates in cultural events.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'None.',
      generalInformation: 'Experienced chef running kitchen at local restaurant.',
      streetAddress1: '78 Banksia Street',
      streetAddress2: '',
      suburb: 'Kununurra',
      state: 'WA',
      postcode: '6743',
      trainingTypeInterest: 'Business management for hospitality',
      personalContext: 'Flexible availability.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-34',
        jobTitle: 'Head Chef',
        employer: 'Kimberley Ranges Restaurant',
        startYear: '2019',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Manages kitchen operations and menu development.',
        jobCategory: 'Hospitality',
        experiences: [
          { id: 'exp-45', description: 'Developed native ingredient menu', rating: '5' },
          { id: 'exp-46', description: 'Won regional tourism award', rating: '5' }
        ],
        tasks: [
          { id: 'task-67', task: 'Menu development', rating: '5' },
          { id: 'task-68', task: 'Staff training', rating: '5' }
        ]
      },
      {
        id: 'wh-35',
        jobTitle: 'Sous Chef',
        employer: 'Cable Beach Club',
        startYear: '2015',
        endYear: '2019',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Supported head chef in high-volume resort kitchen.',
        jobCategory: 'Hospitality',
        experiences: [{ id: 'exp-47', description: 'Managed kitchen during peak season', rating: '4' }],
        tasks: [{ id: 'task-69', task: 'Food preparation and quality control', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate IV',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-22', level: 'Certificate IV', institution: 'TAFE WA', name: 'Commercial Cookery', areaOfStudy: 'Hospitality', completionDate: '2014-12-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-47', courseName: 'Food Safety Supervisor', certificateAvailable: 'Yes' },
        { id: 'train-48', courseName: 'RSA Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-62', skill: 'Menu Development', rating: '5' },
        { id: 'skill-63', skill: 'Kitchen Management', rating: '5' },
        { id: 'skill-64', skill: 'Native Ingredients', rating: '5' }
      ],
      competencies: [
        { id: 'comp-46', competency: 'Food Safety', rating: '5' },
        { id: 'comp-47', competency: 'Team Leadership', rating: '5' }
      ]
    },
    recommendations: [{ id: 'rec-21', recommendation: 'Consider opening own restaurant.', createdAt: isoDaysAgo(30) }],
    notes: [{ id: 'note-25', content: 'Talented chef with unique native ingredient focus.', timestamp: isoDaysAgo(10), author: 'Mark Roberts', status: 'Active' }],
    profile: { summary: 'Award-winning chef specializing in native Australian cuisine.', aspirations: 'Open own Indigenous-themed restaurant.', preferredIndustries: ['Hospitality', 'Tourism'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-22',
    engagementStatus: 'Re-engaging',
    personalDetails: {
      firstName: 'Darren',
      middleName: 'Michael',
      lastName: 'Kelly',
      dateOfBirth: '1978-12-05',
      gender: 'Male',
      motherName: 'Betty Kelly',
      fatherName: 'Frank Kelly',
      community: 'Wyndham',
      familyGroup: 'Group C',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-545678',
      driversLicenceExpiry: '2025-08-28',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'Yes',
      familyDependants: 'Yes',
      culturalRequirements: 'Senior cultural responsibilities.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Pending',
      additionalSupportNeeded: 'Medical clearance assistance.',
      generalInformation: 'Experienced truck driver returning after health issues.',
      streetAddress1: '14 Anthon Street',
      streetAddress2: '',
      suburb: 'Wyndham',
      state: 'WA',
      postcode: '6740',
      trainingTypeInterest: 'Licence renewal and safety refreshers',
      personalContext: 'Recovered from injury, ready to work.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-36',
        jobTitle: 'Road Train Driver',
        employer: 'Kimberley Freight Services',
        startYear: '2005',
        endYear: '2022',
        currentJob: false,
        workType: 'Full-time',
        rating: '5',
        summary: 'Operated triple road trains across remote Kimberley routes.',
        jobCategory: 'Logistics',
        experiences: [
          { id: 'exp-48', description: 'Million km safe driving milestone', rating: '5' },
          { id: 'exp-49', description: 'Trained 15+ new drivers', rating: '5' }
        ],
        tasks: [
          { id: 'task-70', task: 'Long-haul freight transport', rating: '5' },
          { id: 'task-71', task: 'Vehicle inspections', rating: '5' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Certificate III',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-23', level: 'Certificate III', institution: 'TAFE WA', name: 'Driving Operations', areaOfStudy: 'Logistics', completionDate: '2006-03-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-49', courseName: 'MC Licence', certificateAvailable: 'Yes' },
        { id: 'train-50', courseName: 'Dangerous Goods', certificateAvailable: 'Yes' },
        { id: 'train-51', courseName: 'First Aid Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-65', skill: 'Road Train Operation', rating: '5' },
        { id: 'skill-66', skill: 'Remote Driving', rating: '5' },
        { id: 'skill-67', skill: 'Driver Training', rating: '5' }
      ],
      competencies: [
        { id: 'comp-48', competency: 'Safety Compliance', rating: '5' },
        { id: 'comp-49', competency: 'Fatigue Management', rating: '5' }
      ]
    },
    recommendations: [{ id: 'rec-22', recommendation: 'Complete medical clearance to return to driving.', createdAt: isoDaysAgo(14) }],
    notes: [{ id: 'note-26', content: 'Excellent safety record, awaiting medical clearance.', timestamp: isoDaysAgo(5), author: 'Alan Jones', status: 'Pending' }],
    profile: { summary: 'Experienced road train driver with exceptional safety record.', aspirations: 'Return to driving or transition to driver training role.', preferredIndustries: ['Logistics', 'Mining'] },
    surveys: [{ id: 'survey-14', title: 'Return to Work Assessment', date: '2024-12-01 at 9:00 AM', referralData: { referralPathway: 'Phone In', clientFirstName: 'Darren', clientLastName: 'Kelly', clientPhoneNumber: '08 9123 4567', clientEmail: 'darren.kelly@example.com', clientAPP: 'Survey completed', clientGender: 'Male' } }],
    referrals: [],
    history: []
  },
  {
    id: 'person-23',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Skye',
      middleName: 'Elizabeth',
      lastName: 'Watson',
      dateOfBirth: '1995-04-12',
      gender: 'Female',
      motherName: 'Christine Watson',
      fatherName: 'Dennis Watson',
      community: 'Fitzroy Crossing',
      familyGroup: 'Group B',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-656789',
      driversLicenceExpiry: '2027-10-05',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'No',
      familyDependants: 'No',
      culturalRequirements: 'Active in cultural activities.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'None.',
      generalInformation: 'Social worker supporting families in remote communities.',
      streetAddress1: '5 Flynn Drive',
      streetAddress2: '',
      suburb: 'Fitzroy Crossing',
      state: 'WA',
      postcode: '6765',
      trainingTypeInterest: 'Trauma-informed practice and family therapy',
      personalContext: 'Committed to community work.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-37',
        jobTitle: 'Family Support Worker',
        employer: 'Marninwarntikura Women\'s Resource Centre',
        startYear: '2019',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Provides family support services and case management.',
        jobCategory: 'Community Services',
        experiences: [
          { id: 'exp-50', description: 'Developed family violence prevention program', rating: '5' },
          { id: 'exp-51', description: 'Established remote community outreach', rating: '5' }
        ],
        tasks: [
          { id: 'task-72', task: 'Case management', rating: '5' },
          { id: 'task-73', task: 'Crisis intervention', rating: '5' }
        ]
      }
    ],
    skillsComp: {
      highestQualification: 'Bachelor Degree',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-24', level: 'Bachelor', institution: 'University of Western Australia', name: 'Social Work', areaOfStudy: 'Community Services', completionDate: '2018-12-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-52', courseName: 'Trauma-Informed Practice', certificateAvailable: 'Yes' },
        { id: 'train-53', courseName: 'Suicide Prevention', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-68', skill: 'Case Management', rating: '5' },
        { id: 'skill-69', skill: 'Crisis Intervention', rating: '5' },
        { id: 'skill-70', skill: 'Cultural Safety', rating: '5' }
      ],
      competencies: [
        { id: 'comp-50', competency: 'Family Support', rating: '5' },
        { id: 'comp-51', competency: 'Community Engagement', rating: '5' }
      ]
    },
    recommendations: [{ id: 'rec-23', recommendation: 'Consider Masters in Social Work for specialization.', createdAt: isoDaysAgo(20) }],
    notes: [{ id: 'note-27', content: 'Exceptional community worker with strong cultural connections.', timestamp: isoDaysAgo(7), author: 'Mary Johnson', status: 'Active' }],
    profile: { summary: 'Dedicated social worker supporting remote families.', aspirations: 'Lead community support programs.', preferredIndustries: ['Community Services', 'Healthcare'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-24',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Coby',
      middleName: 'Ryan',
      lastName: 'Morgan',
      dateOfBirth: '2002-11-18',
      gender: 'Male',
      motherName: 'Tracey Morgan',
      fatherName: 'Shane Morgan',
      community: 'Halls Creek',
      familyGroup: 'Group D',
      driversLicence: 'No',
      driversLicenceNumber: '',
      driversLicenceExpiry: '',
      committeeRepresentative: 'No',
      interestedInClosureWork: 'Yes',
      familyDependants: 'No',
      culturalRequirements: 'Available with notice.',
      openToFIFO: 'Yes',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'Driver licence support.',
      generalInformation: 'Young person interested in construction.',
      streetAddress1: '61 Hall Street',
      streetAddress2: '',
      suburb: 'Halls Creek',
      state: 'WA',
      postcode: '6770',
      trainingTypeInterest: 'Construction and carpentry',
      personalContext: 'Living with family.',
      anyDifficulties: 'No'
    },
    workHistory: [],
    skillsComp: {
      highestQualification: 'Year 10',
      interestedInTraining: 'Yes',
      qualifications: [],
      trainings: [],
      skills: [
        { id: 'skill-71', skill: 'Physical Fitness', rating: '4' },
        { id: 'skill-72', skill: 'Basic Hand Tools', rating: '3' }
      ],
      competencies: [{ id: 'comp-52', competency: 'Willingness to Learn', rating: '5' }]
    },
    recommendations: [{ id: 'rec-24', recommendation: 'Enrol in Certificate II in Building and Construction.', createdAt: isoDaysAgo(3) }],
    notes: [{ id: 'note-28', content: 'Keen young person, needs pathway support.', timestamp: isoDaysAgo(2), author: 'Ben Taylor', status: 'Active' }],
    profile: { summary: 'Young person seeking entry into construction industry.', aspirations: 'Become qualified carpenter.', preferredIndustries: ['Construction'] },
    surveys: [],
    referrals: [],
    history: []
  },
  {
    id: 'person-25',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Alana',
      middleName: 'Nicole',
      lastName: 'Simpson',
      dateOfBirth: '1988-08-30',
      gender: 'Female',
      motherName: 'Deborah Simpson',
      fatherName: 'Peter Simpson',
      community: 'Broome',
      familyGroup: 'Group E',
      driversLicence: 'Yes',
      driversLicenceNumber: 'WA-767890',
      driversLicenceExpiry: '2026-06-22',
      committeeRepresentative: 'Yes',
      interestedInClosureWork: 'No',
      familyDependants: 'Yes',
      culturalRequirements: 'Strong cultural leader.',
      openToFIFO: 'No',
      policeClearanceEligible: 'Yes',
      medicalClearanceEligible: 'Yes',
      additionalSupportNeeded: 'None.',
      generalInformation: 'Experienced Aboriginal liaison officer.',
      streetAddress1: '92 Frederick Street',
      streetAddress2: '',
      suburb: 'Broome',
      state: 'WA',
      postcode: '6725',
      trainingTypeInterest: 'Cultural competency training delivery',
      personalContext: 'Cultural leader in community.',
      anyDifficulties: 'No'
    },
    workHistory: [
      {
        id: 'wh-38',
        jobTitle: 'Aboriginal Liaison Officer',
        employer: 'WA Police Force',
        startYear: '2014',
        endYear: '',
        currentJob: true,
        workType: 'Full-time',
        rating: '5',
        summary: 'Builds relationships between police and Aboriginal communities.',
        jobCategory: 'Government',
        experiences: [
          { id: 'exp-52', description: 'Developed cultural awareness training program', rating: '5' },
          { id: 'exp-53', description: 'Reduced youth offending through diversion programs', rating: '5' }
        ],
        tasks: [
          { id: 'task-74', task: 'Community liaison', rating: '5' },
          { id: 'task-75', task: 'Cultural training delivery', rating: '5' }
        ]
      },
      {
        id: 'wh-39',
        jobTitle: 'Youth Worker',
        employer: 'Broome Youth Support Services',
        startYear: '2010',
        endYear: '2014',
        currentJob: false,
        workType: 'Full-time',
        rating: '4',
        summary: 'Supported at-risk youth in community.',
        jobCategory: 'Community Services',
        experiences: [{ id: 'exp-54', description: 'Established youth mentoring program', rating: '4' }],
        tasks: [{ id: 'task-76', task: 'Youth mentoring', rating: '4' }]
      }
    ],
    skillsComp: {
      highestQualification: 'Diploma',
      interestedInTraining: 'Yes',
      qualifications: [
        { id: 'qual-25', level: 'Diploma', institution: 'TAFE WA', name: 'Youth Work', areaOfStudy: 'Community Services', completionDate: '2012-11-01', status: 'Completed', certificateAvailable: 'Yes' }
      ],
      trainings: [
        { id: 'train-54', courseName: 'Cultural Competency Trainer', certificateAvailable: 'Yes' },
        { id: 'train-55', courseName: 'Mediation Certificate', certificateAvailable: 'Yes' }
      ],
      skills: [
        { id: 'skill-73', skill: 'Community Liaison', rating: '5' },
        { id: 'skill-74', skill: 'Cultural Training', rating: '5' },
        { id: 'skill-75', skill: 'Mediation', rating: '5' }
      ],
      competencies: [
        { id: 'comp-53', competency: 'Stakeholder Engagement', rating: '5' },
        { id: 'comp-54', competency: 'Program Development', rating: '5' }
      ]
    },
    recommendations: [{ id: 'rec-25', recommendation: 'Consider Bachelor of Criminology for career advancement.', createdAt: isoDaysAgo(25) }],
    notes: [{ id: 'note-29', content: 'Highly respected community leader.', timestamp: isoDaysAgo(8), author: 'Sgt. Williams', status: 'Active' }],
    profile: { summary: 'Experienced liaison officer bridging communities and services.', aspirations: 'Lead cultural training initiatives statewide.', preferredIndustries: ['Government', 'Community Services'] },
    surveys: [],
    referrals: [],
    history: []
  }
];

export const initialPersonRecord = initialPeopleRecords[0];
