export interface AnalyticsFilters {
	community?: string;
	gender?: string;
	engagementStatus?: string;
	qualificationLevel?: string;
	skillCategory?: string;
	employmentStatus?: string;
	referralStatus?: string;
	campaignStatus?: string;
	serviceProviderStatus?: string;
}

export interface AggregatedMetric {
	label: string;
	value: number;
	percentage?: number;
	color?: string;
	[key: string]: string | number | undefined;
}

export interface AnalyticsSummary {
	totalPeople: number;
	totalReferrals: number;
	totalCampaigns: number;
	totalServiceProviders: number;
	activePeople: number;
	activeReferrals: number;
}

export interface AnalyticsData {
	skillsDistribution: AggregatedMetric[];
	employmentStatus: AggregatedMetric[];
	qualificationLevels: AggregatedMetric[];
	communityBreakdown: AggregatedMetric[];
	genderDistribution: AggregatedMetric[];
	engagementStatus: AggregatedMetric[];
	referralPipeline: AggregatedMetric[];
	campaignPerformance: AggregatedMetric[];
	serviceProviderStats: AggregatedMetric[];
	summary: AnalyticsSummary;
}

export interface FilterOptions {
	communities: string[];
	genders: string[];
	engagementStatuses: string[];
	qualificationLevels: string[];
	skills: string[];
}

export interface ActiveSelection {
	chartId: string;
	value: string;
}

export type ChartClickHandler = (chartId: string, value: string) => void;

// Report Types
export type ReportVariable =
	| 'gender'
	| 'community'
	| 'engagementStatus'
	| 'employmentStatus'
	| 'qualificationLevel'
	| 'skillCategory';

export interface ReportChartData {
	type: 'pie' | 'bar' | 'horizontal-bar';
	title: string;
	data: AggregatedMetric[];
}

export interface ReportStatistic {
	label: string;
	value: number | string;
	context?: string;
}

export interface ReportSection {
	id: string;
	title: string;
	content: string;
	statistics: ReportStatistic[];
	charts: ReportChartData[];
	highlights: string[];
}

export interface AIGeneratedInsights {
	summary: string;
	keyFindings: string[];
	recommendations: string[];
	dataQuality: string;
	segmentInsights?: SegmentInsight[];
}

// Segment Analysis Types for deeper cross-tabulated analysis
export interface SegmentBreakdowns {
	skills: AggregatedMetric[];
	engagementStatus: AggregatedMetric[];
	employmentStatus: AggregatedMetric[];
	qualificationLevels: AggregatedMetric[];
	communityBreakdown: AggregatedMetric[];
	genderDistribution: AggregatedMetric[];
}

export interface SegmentAnalysis {
	segmentLabel: string;
	segmentValue: number;
	segmentPercentage: number;
	breakdowns: SegmentBreakdowns;
}

export interface EnrichedReportData {
	variable: ReportVariable;
	variableLabel: string;
	totalRecords: number;
	mainDistribution: AggregatedMetric[];
	segments: SegmentAnalysis[];
}

export interface SegmentInsight {
	segmentLabel: string;
	findings: string[];
	comparisons: string[];
}

export interface AnalyticsReport {
	id: string;
	title: string;
	variable: ReportVariable;
	generatedAt: string;
	dataSnapshot: {
		totalRecords: number;
		anonymizationApplied: boolean;
		filters: AnalyticsFilters;
	};
	sections: ReportSection[];
	aiInsights: AIGeneratedInsights;
	metadata: {
		anonymizationThreshold: number;
		suppressedCategories: number;
	};
}

export interface ReportGenerationState {
	isGenerating: boolean;
	currentStep: 'idle' | 'aggregating' | 'analyzing' | 'generating' | 'complete';
	progress: number;
	error: string | null;
	report: AnalyticsReport | null;
}

export interface VariableConfig {
	key: ReportVariable;
	label: string;
	description: string;
	chartType: 'pie' | 'bar';
	icon: string;
}

export const REPORT_VARIABLES: Record<ReportVariable, VariableConfig> = {
	gender: {
		key: 'gender',
		label: 'Gender Distribution',
		description: 'Analysis of gender representation across the workforce',
		chartType: 'pie',
		icon: 'users'
	},
	community: {
		key: 'community',
		label: 'Community Breakdown',
		description: 'Geographic and community representation analysis',
		chartType: 'pie',
		icon: 'map-pin'
	},
	engagementStatus: {
		key: 'engagementStatus',
		label: 'Engagement Status',
		description: 'Active, prospect, and re-engaging participant analysis',
		chartType: 'pie',
		icon: 'activity'
	},
	employmentStatus: {
		key: 'employmentStatus',
		label: 'Employment Status',
		description: 'Employment outcomes and job-seeking analysis',
		chartType: 'pie',
		icon: 'briefcase'
	},
	qualificationLevel: {
		key: 'qualificationLevel',
		label: 'Qualification Levels',
		description: 'Educational attainment and certification analysis',
		chartType: 'bar',
		icon: 'award'
	},
	skillCategory: {
		key: 'skillCategory',
		label: 'Skills Distribution',
		description: 'Workforce skills and capability mapping',
		chartType: 'bar',
		icon: 'tool'
	}
};
