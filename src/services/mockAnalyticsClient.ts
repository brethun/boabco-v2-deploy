import { initialPeopleRecords } from '../mocks/personMockData';
import { PersonRecord, Qualification, SkillRecord, WorkExperience } from '../features/people/types';
import { initialReferralRecords } from '../mocks/referralsMockData';
import { initialCampaignRecords } from '../mocks/campaignsMockData';
import { initialServiceProviderRecords } from '../mocks/serviceProvidersMockData';
import { AnalyticsData, AnalyticsFilters, AggregatedMetric, FilterOptions } from '../features/analytics/types';

const ANONYMIZATION_THRESHOLD = 3;

const delay = (ms: number = 200) => new Promise(resolve => setTimeout(resolve, ms));

// BoAbCo Brand Colors
const CHART_COLORS = {
	primary: ['#E2592A', '#FAB819', '#482B12', '#f06d42', '#ffc94d', '#6b4520', '#c74a22', '#d99f00'],
	secondary: ['#E2592A', '#FAB819', '#482B12', '#f06d42', '#ffc94d', '#8a5d2c'],
	status: {
		active: '#22c55e',
		pending: '#FAB819',
		complete: '#E2592A',
		rejected: '#dc2626',
		inactive: '#9a8a7c',
		prospect: '#FAB819',
		reengaging: '#f06d42'
	}
};

const anonymizeAggregation = (metrics: AggregatedMetric[]): AggregatedMetric[] => {
	const total = metrics.reduce((sum, m) => sum + m.value, 0);
	if (total === 0) return [];

	const largeGroups = metrics.filter(m => m.value >= ANONYMIZATION_THRESHOLD);
	const smallGroups = metrics.filter(m => m.value < ANONYMIZATION_THRESHOLD);

	if (smallGroups.length > 0) {
		const otherCount = smallGroups.reduce((sum, m) => sum + m.value, 0);
		if (otherCount >= ANONYMIZATION_THRESHOLD) {
			largeGroups.push({
				label: 'Other',
				value: otherCount,
				percentage: Math.round((otherCount / total) * 100),
				color: '#94a3b8'
			});
		}
	}

	return largeGroups.map((m, index) => ({
		...m,
		percentage: Math.round((m.value / total) * 100),
		color: m.color || CHART_COLORS.primary[index % CHART_COLORS.primary.length]
	}));
};

const applyFilters = (records: PersonRecord[], filters?: AnalyticsFilters): PersonRecord[] => {
	if (!filters || Object.keys(filters).length === 0) return records;

	return records.filter(person => {
		if (filters.community && person.personalDetails.community !== filters.community) {
			return false;
		}
		if (filters.gender && person.personalDetails.gender !== filters.gender) {
			return false;
		}
		if (filters.engagementStatus && person.engagementStatus !== filters.engagementStatus) {
			return false;
		}
		if (filters.qualificationLevel) {
			const hasQual = person.skillsComp.qualifications.some(
				(q: Qualification) => q.level === filters.qualificationLevel
			);
			if (!hasQual) return false;
		}
		if (filters.skillCategory) {
			const hasSkill = person.skillsComp.skills.some(
				(s: SkillRecord) => s.skill === filters.skillCategory
			);
			if (!hasSkill) return false;
		}
		if (filters.employmentStatus) {
			const hasCurrentJob = person.workHistory.some((w: WorkExperience) => w.currentJob);
			if (filters.employmentStatus === 'Employed' && !hasCurrentJob) return false;
			if (filters.employmentStatus === 'Seeking' && hasCurrentJob) return false;
		}
		return true;
	});
};

const getSkillsDistribution = (people: PersonRecord[]): AggregatedMetric[] => {
	const skillCounts: Record<string, number> = {};

	people.forEach((person: PersonRecord) => {
		person.skillsComp.skills.forEach((skill: SkillRecord) => {
			const skillName = skill.skill;
			skillCounts[skillName] = (skillCounts[skillName] || 0) + 1;
		});
	});

	const metrics = Object.entries(skillCounts)
		.map(([label, value]) => ({ label, value }))
		.sort((a, b) => b.value - a.value)
		.slice(0, 10);

	return anonymizeAggregation(metrics);
};

const getEmploymentStatus = (people: PersonRecord[]): AggregatedMetric[] => {
	const counts = { 'Employed': 0, 'Seeking': 0, 'Not Working': 0 };

	people.forEach((person: PersonRecord) => {
		const hasCurrentJob = person.workHistory.some((w: WorkExperience) => w.currentJob);
		if (hasCurrentJob) {
			counts['Employed']++;
		} else if (person.engagementStatus === 'Active' || person.engagementStatus === 'Prospect') {
			counts['Seeking']++;
		} else {
			counts['Not Working']++;
		}
	});

	const metrics: AggregatedMetric[] = [
		{ label: 'Employed', value: counts['Employed'], color: CHART_COLORS.status.active },
		{ label: 'Seeking', value: counts['Seeking'], color: CHART_COLORS.status.pending },
		{ label: 'Not Working', value: counts['Not Working'], color: CHART_COLORS.status.inactive }
	];

	return anonymizeAggregation(metrics);
};

const getQualificationLevels = (people: PersonRecord[]): AggregatedMetric[] => {
	const qualCounts: Record<string, number> = {};

	people.forEach((person: PersonRecord) => {
		person.skillsComp.qualifications.forEach((qual: Qualification) => {
			const qualName = qual.level;
			qualCounts[qualName] = (qualCounts[qualName] || 0) + 1;
		});
	});

	const metrics = Object.entries(qualCounts)
		.map(([label, value]) => ({ label, value }))
		.sort((a, b) => b.value - a.value);

	return anonymizeAggregation(metrics);
};

const getCommunityBreakdown = (people: PersonRecord[]): AggregatedMetric[] => {
	const communityCounts: Record<string, number> = {};

	people.forEach(person => {
		const community = person.personalDetails.community || 'Unknown';
		communityCounts[community] = (communityCounts[community] || 0) + 1;
	});

	const metrics = Object.entries(communityCounts)
		.map(([label, value]) => ({ label, value }))
		.sort((a, b) => b.value - a.value);

	return anonymizeAggregation(metrics);
};

const getGenderDistribution = (people: PersonRecord[]): AggregatedMetric[] => {
	const genderCounts: Record<string, number> = {};

	people.forEach(person => {
		const gender = person.personalDetails.gender || 'Not Stated';
		genderCounts[gender] = (genderCounts[gender] || 0) + 1;
	});

	const genderColors: Record<string, string> = {
		'Male': '#482B12',
		'Female': '#E2592A',
		'Gender Diverse': '#FAB819',
		'Not Stated': '#9a8a7c'
	};

	const metrics = Object.entries(genderCounts)
		.map(([label, value]) => ({ label, value, color: genderColors[label] || '#94a3b8' }))
		.sort((a, b) => b.value - a.value);

	return anonymizeAggregation(metrics);
};

const getEngagementStatus = (people: PersonRecord[]): AggregatedMetric[] => {
	const statusCounts: Record<string, number> = {};

	people.forEach(person => {
		const status = person.engagementStatus || 'Unknown';
		statusCounts[status] = (statusCounts[status] || 0) + 1;
	});

	const statusColors: Record<string, string> = {
		'Active': CHART_COLORS.status.active,
		'Prospect': CHART_COLORS.status.prospect,
		'Re-engaging': CHART_COLORS.status.reengaging,
		'Inactive': CHART_COLORS.status.inactive
	};

	const metrics = Object.entries(statusCounts)
		.map(([label, value]) => ({ label, value, color: statusColors[label] || '#94a3b8' }))
		.sort((a, b) => b.value - a.value);

	return anonymizeAggregation(metrics);
};

const getReferralPipeline = (filters?: AnalyticsFilters): AggregatedMetric[] => {
	let referrals = [...initialReferralRecords];

	if (filters?.referralStatus) {
		referrals = referrals.filter(r => r.status === filters.referralStatus);
	}

	const statusCounts: Record<string, number> = {};
	referrals.forEach(referral => {
		statusCounts[referral.status] = (statusCounts[referral.status] || 0) + 1;
	});

	const statusColors: Record<string, string> = {
		'Pending Approval': '#FAB819',
		'In Progress': '#E2592A',
		'Complete': '#482B12',
		'Rejected': '#dc2626'
	};

	const statusOrder = ['Pending Approval', 'In Progress', 'Complete', 'Rejected'];
	const metrics = statusOrder
		.filter(status => statusCounts[status] > 0)
		.map(status => ({
			label: status,
			value: statusCounts[status],
			color: statusColors[status]
		}));

	return anonymizeAggregation(metrics);
};

const getCampaignPerformance = (filters?: AnalyticsFilters): AggregatedMetric[] => {
	let campaigns = [...initialCampaignRecords];

	if (filters?.campaignStatus) {
		campaigns = campaigns.filter(c => c.status === filters.campaignStatus);
	}

	const metrics = campaigns
		.map(campaign => ({
			label: campaign.name.length > 25 ? campaign.name.substring(0, 22) + '...' : campaign.name,
			value: campaign.responses,
			color: campaign.status === 'Active'
				? CHART_COLORS.status.active
				: campaign.status === 'Planning'
					? CHART_COLORS.status.pending
					: CHART_COLORS.status.complete
		}))
		.sort((a, b) => b.value - a.value)
		.slice(0, 8);

	return metrics;
};

const getServiceProviderStats = (filters?: AnalyticsFilters): AggregatedMetric[] => {
	let providers = [...initialServiceProviderRecords];

	if (filters?.serviceProviderStatus) {
		providers = providers.filter(p => p.status === filters.serviceProviderStatus);
	}

	const typeCounts: Record<string, number> = {};
	providers.forEach(provider => {
		const type = provider.details?.organizationType || 'Unknown';
		typeCounts[type] = (typeCounts[type] || 0) + 1;
	});

	const metrics = Object.entries(typeCounts)
		.map(([label, value]) => ({ label, value }))
		.sort((a, b) => b.value - a.value);

	return anonymizeAggregation(metrics);
};

const getFilterOptions = (): FilterOptions => {
	const communities = new Set<string>();
	const genders = new Set<string>();
	const engagementStatuses = new Set<string>();
	const qualificationLevels = new Set<string>();
	const skills = new Set<string>();

	initialPeopleRecords.forEach((person: PersonRecord) => {
		if (person.personalDetails.community) communities.add(person.personalDetails.community);
		if (person.personalDetails.gender) genders.add(person.personalDetails.gender);
		if (person.engagementStatus) engagementStatuses.add(person.engagementStatus);
		person.skillsComp.qualifications.forEach((q: Qualification) => qualificationLevels.add(q.level));
		person.skillsComp.skills.forEach((s: SkillRecord) => skills.add(s.skill));
	});

	return {
		communities: Array.from(communities).sort(),
		genders: Array.from(genders).sort(),
		engagementStatuses: Array.from(engagementStatuses).sort(),
		qualificationLevels: Array.from(qualificationLevels).sort(),
		skills: Array.from(skills).sort()
	};
};

export const mockAnalyticsClient = {
	async getAnalyticsData(filters?: AnalyticsFilters): Promise<AnalyticsData> {
		await delay();

		const filteredPeople = applyFilters(initialPeopleRecords, filters);
		const referrals = initialReferralRecords;
		const campaigns = initialCampaignRecords;
		const providers = initialServiceProviderRecords;

		return {
			skillsDistribution: getSkillsDistribution(filteredPeople),
			employmentStatus: getEmploymentStatus(filteredPeople),
			qualificationLevels: getQualificationLevels(filteredPeople),
			communityBreakdown: getCommunityBreakdown(filteredPeople),
			genderDistribution: getGenderDistribution(filteredPeople),
			engagementStatus: getEngagementStatus(filteredPeople),
			referralPipeline: getReferralPipeline(filters),
			campaignPerformance: getCampaignPerformance(filters),
			serviceProviderStats: getServiceProviderStats(filters),
			summary: {
				totalPeople: filteredPeople.length,
				totalReferrals: referrals.length,
				totalCampaigns: campaigns.length,
				totalServiceProviders: providers.length,
				activePeople: filteredPeople.filter(p => p.engagementStatus === 'Active').length,
				activeReferrals: referrals.filter(r => r.status === 'In Progress').length
			}
		};
	},

	async getFilterOptions(): Promise<FilterOptions> {
		await delay(100);
		return getFilterOptions();
	}
};
