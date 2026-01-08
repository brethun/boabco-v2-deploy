export interface TrainingProvider {
  id: string;
  name: string;
  businessId: string;
  type: 'RTO' | 'University' | 'Private' | 'Government' | 'Industry';
  accreditations: string[];
  deliveryMethods: ('Online' | 'Face-to-face' | 'Hybrid' | 'Workplace')[];
}

export interface TrainingPrerequisite {
  id: string;
  type: 'Qualification' | 'Skill' | 'Experience' | 'Certification';
  level: 'Essential' | 'Desirable';
  description: string;
  competencyCode?: string;
}

export interface TrainingOutcome {
  id: string;
  type: 'Qualification' | 'Certificate' | 'Competency' | 'Skill';
  title: string;
  code?: string;
  description: string;
  industryRecognition: string[];
}

export interface TrainingSchedule {
  id: string;
  startDate: string;
  endDate: string;
  deliveryMethod: 'Online' | 'Face-to-face' | 'Hybrid' | 'Workplace';
  location?: string;
  timeCommitment: string;
  maxParticipants: number;
  currentEnrollments: number;
  status: 'Planned' | 'Open' | 'In Progress' | 'Completed' | 'Cancelled';
}

export interface TrainingAssessment {
  id: string;
  type: 'Written' | 'Practical' | 'Portfolio' | 'Observation' | 'Project';
  description: string;
  weightPercentage: number;
}

export interface ParticipantMatch {
  personId: string;
  participant: {
    fullName: string;
    community: string;
    currentRole?: string;
    employer?: string;
    skillsGaps: string[];
  };
  matchScore: number;
  matchReasons: {
    skillsGapFill: Array<{
      skill: string;
      currentLevel: string;
      trainingOutcome: string;
      relevance: 'high' | 'medium' | 'low';
    }>;
    careerAlignment: Array<{
      careerGoal: string;
      trainingSupport: string;
      relevance: 'high' | 'medium' | 'low';
    }>;
    geographicMatch: boolean;
    scheduleMatch: boolean;
  };
  availability: {
    openToTraining: boolean;
    availableFrom?: string;
    preferredDelivery: ('Online' | 'Face-to-face' | 'Hybrid' | 'Workplace')[];
  };
  barriers: Array<{
    type: 'Geographic' | 'Schedule' | 'Prerequisites' | 'Cost' | 'Support';
    description: string;
    severity: 'Low' | 'Medium' | 'High';
  }>;
  lastInteraction?: string;
}

export interface TrainingData {
  id: string;
  title: string;
  code?: string;
  provider: TrainingProvider;
  category: string;
  level: 'Foundation' | 'Intermediate' | 'Advanced' | 'Specialist';
  description: string;
  objectives: string[];
  
  duration: {
    totalHours: number;
    weeks?: number;
    sessionsPerWeek?: number;
  };
  
  prerequisites: TrainingPrerequisite[];
  outcomes: TrainingOutcome[];
  
  deliveryMethods: ('Online' | 'Face-to-face' | 'Hybrid' | 'Workplace')[];
  location: {
    primary: string;
    additionalLocations?: string[];
    accessibility: string;
  };
  
  schedules: TrainingSchedule[];
  
  modules: Array<{
    id: string;
    title: string;
    description: string;
    duration: number;
    assessments: TrainingAssessment[];
  }>;
  
  targetAudience: string;
  maxParticipants: number;
  minParticipants: number;
  
  cost: {
    standard: number;
    concession?: number;
    funding: string[];
  };
  
  skillsTargeted: Array<{
    skillId: string;
    skillName: string;
    currentLevelRequired: 'Novice' | 'Intermediate' | 'Advanced';
    outcomeLevel: 'Novice' | 'Intermediate' | 'Advanced';
  }>;
  
  industryAlignment: string[];
  careerPathways: string[];
  
  status: 'Draft' | 'Published' | 'Full' | 'Cancelled' | 'Archived';
  postedDate: string;
  enrollmentDeadline: string;
  
  contactPerson: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
  
  supportServices: Array<{
    type: 'Childcare' | 'Transport' | 'Equipment' | 'Mentoring' | 'Literacy Support';
    description: string;
    available: boolean;
  }>;

  enrollments: number;
  participantMatches?: ParticipantMatch[];
}

export type TrainingTabSection = 'overview' | 'content' | 'schedule' | 'participants' | 'match-participants' | 'outcomes';

export interface TrainingSummary {
  id: string;
  title: string;
  providerName: string;
  providerId: string;
  category: string;
  level: string;
  status: string;
  duration: number;
  enrollments: number;
  maxParticipants: number;
  matchedParticipantsCount?: number;
}