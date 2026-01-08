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
