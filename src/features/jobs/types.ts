export interface JobRequirement {
  id: string;
  type: 'essential' | 'desirable';
  description: string;
  skillId?: string;
  competencyId?: string;
}

export interface JobResponsibility {
  id: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface JobBenefit {
  id: string;
  description: string;
  category: 'compensation' | 'health' | 'professional' | 'lifestyle' | 'other';
}

export interface JobApplication {
  id: string;
  applicantId: string;
  applicant: {
    fullName: string;
    email: string;
    phone: string;
    community: string;
  };
  appliedDate: string;
  status: 'pending' | 'reviewing' | 'shortlisted' | 'interviewed' | 'offered' | 'accepted' | 'rejected';
  matchScore?: number;
  coverLetter?: string;
  notes?: string;
  lastUpdated: string;
}

export interface CandidateMatch {
  candidateId: string;
  candidate: {
    fullName: string;
    community: string;
    currentRole?: string;
    employer?: string;
    preferredIndustries: string[];
  };
  matchScore: number;
  matchReasons: {
    skillMatches: Array<{
      skill: string;
      candidateRating: string;
      relevance: 'high' | 'medium' | 'low';
    }>;
    competencyMatches: Array<{
      competency: string;
      candidateRating: string;
      relevance: 'high' | 'medium' | 'low';
    }>;
    experienceMatches: Array<{
      jobTitle: string;
      employer: string;
      relevance: 'high' | 'medium' | 'low';
    }>;
    locationMatch: boolean;
    industryMatch: boolean;
  };
  availability: {
    openToRole: boolean;
    availableFrom?: string;
    fifoWilling?: boolean;
  };
  lastInteraction?: string;
}

export interface JobData {
  id: string;
  title: string;
  businessId: string;
  business?: {
    id: string;
    name: string;
    industry: {
      primary: string;
      secondary: string[];
    };
    location: {
      city: string;
      state: string;
    };
  };
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Casual' | 'Contract' | 'Volunteer';
  status: 'Draft' | 'Open' | 'In Progress' | 'Filled' | 'Closed' | 'Cancelled';
  salary: string;
  postedDate: string;
  closingDate?: string;
  daysAgo: string;
  applicationsCount: number;
  avatar: string;
  priority: 'high' | 'medium' | 'low';
  
  details: {
    description: string;
    requirements: JobRequirement[];
    responsibilities: JobResponsibility[];
    benefits: JobBenefit[];
    applicationDeadline: string;
    contactPerson: {
      name: string;
      position: string;
      email: string;
      phone: string;
    };
    workingHours: string;
    startDate: string;
    contractLength: string;
    selectionCriteria: string;
    
    requiredSkills: Array<{
      skillId: string;
      skillName: string;
      minimumRating: string;
      importance: 'essential' | 'desirable';
    }>;
    requiredCompetencies: Array<{
      competencyId: string;
      competencyName: string;
      minimumRating: string;
      importance: 'essential' | 'desirable';
    }>;
    industryCategory: string;
    experienceLevel: 'entry' | 'junior' | 'mid' | 'senior' | 'executive';
    remoteWork: boolean;
    fifoRole: boolean;
    culturalRequirements?: string;
  };
  
  applications: JobApplication[];
  candidateMatches?: CandidateMatch[];
}

export type JobTabSection = 'overview' | 'requirements' | 'applications' | 'candidates' | 'details';

export interface JobSummary {
  id: string;
  title: string;
  businessName: string;
  businessId: string;
  location: string;
  jobType: string;
  status: string;
  salary: string;
  postedDate: string;
  daysAgo: string;
  applicationsCount: number;
  matchedCandidatesCount?: number;
}