export interface PersonalDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  motherName: string;
  fatherName: string;
  community: string;
  familyGroup: string;
  driversLicence: string;
  driversLicenceNumber: string;
  driversLicenceExpiry: string;
  committeeRepresentative: string;
  interestedInClosureWork: string;
  familyDependants: string;
  culturalRequirements: string;
  openToFIFO: string;
  policeClearanceEligible: string;
  medicalClearanceEligible: string;
  additionalSupportNeeded: string;
  generalInformation: string;
  streetAddress1: string;
  streetAddress2: string;
  suburb: string;
  state: string;
  postcode: string;
  trainingTypeInterest: string;
  personalContext: string;
  anyDifficulties: string;
}

export interface JobExperience {
  id: string;
  description: string;
  rating: string;
}

export interface JobTask {
  id: string;
  task: string;
  rating: string;
}

export interface WorkExperience {
  id: string;
  jobTitle: string;
  employer: string;
  startYear: string;
  endYear: string;
  currentJob: boolean;
  workType: string;
  rating: string;
  summary: string;
  jobCategory: string;
  experiences: JobExperience[];
  tasks: JobTask[];
}

export interface Qualification {
  id: string;
  level: string;
  institution: string;
  name: string;
  areaOfStudy: string;
  completionDate: string;
  status: string;
  certificateAvailable: string;
}

export interface TrainingRecord {
  id: string;
  courseName: string;
  certificateAvailable: string;
}

export interface SkillRecord {
  id: string;
  skill: string;
  rating: string;
}

export interface CompetencyRecord {
  id: string;
  competency: string;
  rating: string;
}

export interface SkillsAndCompetencies {
  highestQualification: string;
  interestedInTraining: string;
  qualifications: Qualification[];
  trainings: TrainingRecord[];
  skills: SkillRecord[];
  competencies: CompetencyRecord[];
}

export interface RecommendationRecord {
  id: string;
  recommendation: string;
  createdAt: string;
}

export interface NoteRecord {
  id: string;
  content: string;
  timestamp: string;
  author: string;
  status: string;
}

export interface ProfileSnapshot {
  summary: string;
  aspirations: string;
  preferredIndustries: string[];
}

export interface PersonSummary {
  id: string;
  fullName: string;
  community: string;
  engagementStatus: string;
  currentRole: string;
  employer: string;
  preferredIndustries: string[];
  lastInteraction: string;
}

export interface PersonRecord {
  id: string;
  engagementStatus: string;
  personalDetails: PersonalDetails;
  workHistory: WorkExperience[];
  skillsComp: SkillsAndCompetencies;
  recommendations: RecommendationRecord[];
  notes: NoteRecord[];
  profile: ProfileSnapshot;
}

export type PeopleTabSection = Exclude<keyof PersonRecord, 'id' | 'engagementStatus'>;

export const createEmptyPersonRecord = (): PersonRecord => ({
  id: '',
  engagementStatus: 'Inactive',
  personalDetails: {
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    motherName: '',
    fatherName: '',
    community: '',
    familyGroup: '',
    driversLicence: 'No',
    driversLicenceNumber: '',
    driversLicenceExpiry: '',
    committeeRepresentative: 'No',
    interestedInClosureWork: 'No',
    familyDependants: 'No',
    culturalRequirements: '',
    openToFIFO: 'No',
    policeClearanceEligible: 'No',
    medicalClearanceEligible: 'No',
    additionalSupportNeeded: '',
    generalInformation: '',
    streetAddress1: '',
    streetAddress2: '',
    suburb: '',
    state: '',
    postcode: '',
    trainingTypeInterest: '',
    personalContext: '',
    anyDifficulties: 'No'
  },
  workHistory: [],
  skillsComp: {
    highestQualification: '',
    interestedInTraining: 'No',
    qualifications: [],
    trainings: [],
    skills: [],
    competencies: []
  },
  recommendations: [],
  notes: [],
  profile: {
    summary: '',
    aspirations: '',
    preferredIndustries: []
  }
});
