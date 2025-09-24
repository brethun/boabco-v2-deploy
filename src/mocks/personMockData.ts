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
      firstName: 'Lara',
      middleName: 'Marie',
      lastName: 'Davis',
      dateOfBirth: '1992-04-16',
      gender: 'Female',
      motherName: 'Karen Davis',
      fatherName: 'Albert Davis',
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
        author: 'Samantha Lee',
        status: 'Active'
      },
      {
        id: 'note-2',
        content: 'Updated medical clearance paperwork. Available for FIFO roster discussions.',
        timestamp: isoDaysAgo(2),
        author: 'Michael Grant',
        status: 'Resolved'
      }
    ],
    profile: {
      summary: 'Experienced equipment operator with strong safety leadership and mentoring skills.',
      aspirations: 'Progress into a supervisory role within mining operations.',
      preferredIndustries: ['Mining', 'Logistics']
    }
  },
  {
    id: 'person-2',
    engagementStatus: 'Prospect',
    personalDetails: {
      firstName: 'Noah',
      middleName: 'James',
      lastName: 'Kelly',
      dateOfBirth: '1996-08-02',
      gender: 'Male',
      motherName: 'Marina Kelly',
      fatherName: 'Patrick Kelly',
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
        author: 'Jordan Miles',
        status: 'Active'
      },
      {
        id: 'note-4',
        content: 'Sent through updated resume and references after site visit.',
        timestamp: isoDaysAgo(5),
        author: 'Jordan Miles',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Emerging mining engineer passionate about integrating cultural knowledge into closure planning.',
      aspirations: 'Secure a rotational role that supports regenerative mine closure.',
      preferredIndustries: ['Mining', 'Environmental Services']
    }
  },
  {
    id: 'person-3',
    engagementStatus: 'Active',
    personalDetails: {
      firstName: 'Aaliyah',
      middleName: 'Rose',
      lastName: 'Thompson',
      dateOfBirth: '1988-11-30',
      gender: 'Female',
      motherName: 'Gloria Thompson',
      fatherName: 'Peter Thompson',
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
        author: 'Priya Nair',
        status: 'Active'
      },
      {
        id: 'note-6',
        content: 'Needs guidance on bookkeeping software migration.',
        timestamp: isoDaysAgo(4),
        author: 'Priya Nair',
        status: 'Active'
      }
    ],
    profile: {
      summary: 'Entrepreneurial community leader supporting cultural catering ventures and youth training.',
      aspirations: 'Expand catering business and mentor youth in enterprise pathways.',
      preferredIndustries: ['Hospitality', 'Community Services']
    }
  },
  {
    id: 'person-4',
    engagementStatus: 'Re-engaging',
    personalDetails: {
      firstName: 'Ethan',
      middleName: 'Mathew',
      lastName: 'Wright',
      dateOfBirth: '1984-03-22',
      gender: 'Male',
      motherName: 'Leah Wright',
      fatherName: 'Morgan Wright',
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
        author: 'Kara Wilson',
        status: 'Active'
      },
      {
        id: 'note-8',
        content: 'Awaiting confirmation of medical clearance appointment.',
        timestamp: isoDaysAgo(3),
        author: 'Kara Wilson',
        status: 'Pending'
      }
    ],
    profile: {
      summary: 'Seasoned civil plant operator seeking pathways into site supervision back on country.',
      aspirations: 'Secure full-time civil works role with mentoring into leadership.',
      preferredIndustries: ['Civil Construction', 'Community Services']
    }
  }
];

export const initialPersonRecord = initialPeopleRecords[0];
