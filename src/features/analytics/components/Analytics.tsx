import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchAnalyticsData,
	fetchFilterOptions,
	setFilter,
	clearFilters,
	setActiveSelection,
	removeFilter,
	selectAnalyticsData,
	selectAnalyticsFilters,
	selectActiveSelection,
	selectAnalyticsLoading,
	selectFilterOptions,
	selectHasActiveFilters
} from '../analyticsSlice';
import { AnalyticsFilters, ChartClickHandler } from '../types';
import { AppDispatch } from '../../../app/store';
import FilterPanel from './FilterPanel';
import ChartCard from './ChartCard';
import SkillsDistributionChart from './charts/SkillsDistributionChart';
import EmploymentStatusChart from './charts/EmploymentStatusChart';
import QualificationsChart from './charts/QualificationsChart';
import CommunityBreakdownChart from './charts/CommunityBreakdownChart';
import GenderDistributionChart from './charts/GenderDistributionChart';
import EngagementStatusChart from './charts/EngagementStatusChart';
import ReferralPipelineChart from './charts/ReferralPipelineChart';
import CampaignPerformanceChart from './charts/CampaignPerformanceChart';
import ServiceProviderStatsChart from './charts/ServiceProviderStatsChart';
import ReportModal from './ReportModal';
import './Analytics.css';

const Analytics: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const data = useSelector(selectAnalyticsData);
	const filters = useSelector(selectAnalyticsFilters);
	const activeSelection = useSelector(selectActiveSelection);
	const loadingStatus = useSelector(selectAnalyticsLoading);
	const filterOptions = useSelector(selectFilterOptions);
	const hasActiveFilters = useSelector(selectHasActiveFilters);
	const [isReportModalOpen, setIsReportModalOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchFilterOptions());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAnalyticsData(filters));
	}, [dispatch, filters]);

	const handleFilterChange = useCallback((key: keyof AnalyticsFilters, value: string | undefined) => {
		dispatch(setFilter({ key, value }));
	}, [dispatch]);

	const handleClearFilters = useCallback(() => {
		dispatch(clearFilters());
	}, [dispatch]);

	const handleRemoveFilter = useCallback((key: keyof AnalyticsFilters) => {
		dispatch(removeFilter(key));
	}, [dispatch]);

	const handleChartClick: ChartClickHandler = useCallback((chartId: string, value: string) => {
		if (activeSelection?.chartId === chartId && activeSelection?.value === value) {
			dispatch(setActiveSelection(null));
			const filterKey = getFilterKeyForChart(chartId);
			if (filterKey) {
				dispatch(removeFilter(filterKey));
			}
		} else {
			dispatch(setActiveSelection({ chartId, value }));
		}
	}, [dispatch, activeSelection]);

	const isLoading = loadingStatus === 'loading';

	return (
		<div className="analytics">
			{/* Hero Header */}
			<header className="analytics-hero">
				<div className="analytics-hero__content">
					<h1 className="analytics-hero__title">Analytics Dashboard</h1>
					<p className="analytics-hero__subtitle">
						Real-time workforce insights, skills distribution, and program performance metrics
					</p>
				</div>
				<button
					type="button"
					className="analytics-hero__report-btn"
					onClick={() => setIsReportModalOpen(true)}
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
						<polyline points="10 9 9 9 8 9" />
					</svg>
					Generate AI Report
				</button>
			</header>

			{/* Main Content */}
			<div className="analytics-main">
				{/* Summary Cards */}
				<section className="summary-cards">
					<div className="metric-card metric-card--people">
						<div className="metric-card__icon">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
						</div>
						<div className="metric-card__value">{data?.summary.totalPeople ?? '-'}</div>
						<div className="metric-card__label">Total People</div>
						<div className="metric-card__subtext metric-card__subtext--highlight">
							{data?.summary.activePeople ?? 0} active
						</div>
					</div>
					<div className="metric-card metric-card--referrals">
						<div className="metric-card__icon">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
						</div>
						<div className="metric-card__value">{data?.summary.totalReferrals ?? '-'}</div>
						<div className="metric-card__label">Total Referrals</div>
						<div className="metric-card__subtext metric-card__subtext--highlight">
							{data?.summary.activeReferrals ?? 0} in progress
						</div>
					</div>
					<div className="metric-card metric-card--campaigns">
						<div className="metric-card__icon">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
								<polyline points="2 17 12 22 22 17"></polyline>
								<polyline points="2 12 12 17 22 12"></polyline>
							</svg>
						</div>
						<div className="metric-card__value">{data?.summary.totalCampaigns ?? '-'}</div>
						<div className="metric-card__label">Campaigns</div>
						<div className="metric-card__subtext">
							Active programs
						</div>
					</div>
					<div className="metric-card metric-card--providers">
						<div className="metric-card__icon">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
								<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>
						</div>
						<div className="metric-card__value">{data?.summary.totalServiceProviders ?? '-'}</div>
						<div className="metric-card__label">Service Providers</div>
						<div className="metric-card__subtext">
							Partner network
						</div>
					</div>
				</section>

				{/* Analytics Layout */}
				<div className="analytics-layout">
					<aside className="analytics-sidebar">
						<FilterPanel
							filters={filters}
							filterOptions={filterOptions}
							activeSelection={activeSelection}
							onFilterChange={handleFilterChange}
							onClearFilters={handleClearFilters}
							onRemoveFilter={handleRemoveFilter}
							hasActiveFilters={hasActiveFilters}
						/>
					</aside>

					<main className="analytics-content">
						{/* People Insights Section */}
						<section className="analytics-section analytics-section--people">
							<div className="analytics-section__header">
								<div className="analytics-section__icon">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
								</div>
								<div>
									<h2 className="analytics-section__title">People Insights</h2>
									<p className="analytics-section__subtitle">Workforce demographics and skills analysis</p>
								</div>
							</div>
							<div className="chart-grid chart-grid--2col">
								<ChartCard
									title="Skills Distribution"
									chartId="skills"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'skills'}
								>
									<SkillsDistributionChart
										data={data?.skillsDistribution ?? []}
										activeValue={activeSelection?.chartId === 'skills' ? activeSelection.value : undefined}
										onBarClick={handleChartClick}
									/>
								</ChartCard>

								<ChartCard
									title="Employment Status"
									chartId="employment"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'employment'}
								>
									<EmploymentStatusChart
										data={data?.employmentStatus ?? []}
										activeValue={activeSelection?.chartId === 'employment' ? activeSelection.value : undefined}
										onSliceClick={handleChartClick}
									/>
								</ChartCard>

								<ChartCard
									title="Qualification Levels"
									chartId="qualifications"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'qualifications'}
								>
									<QualificationsChart
										data={data?.qualificationLevels ?? []}
										activeValue={activeSelection?.chartId === 'qualifications' ? activeSelection.value : undefined}
										onBarClick={handleChartClick}
									/>
								</ChartCard>

								<ChartCard
									title="Community Breakdown"
									chartId="community"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'community'}
								>
									<CommunityBreakdownChart
										data={data?.communityBreakdown ?? []}
										activeValue={activeSelection?.chartId === 'community' ? activeSelection.value : undefined}
										onSliceClick={handleChartClick}
									/>
								</ChartCard>

								<ChartCard
									title="Gender Distribution"
									chartId="gender"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'gender'}
								>
									<GenderDistributionChart
										data={data?.genderDistribution ?? []}
										activeValue={activeSelection?.chartId === 'gender' ? activeSelection.value : undefined}
										onSliceClick={handleChartClick}
									/>
								</ChartCard>

								<ChartCard
									title="Engagement Status"
									chartId="engagement"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'engagement'}
								>
									<EngagementStatusChart
										data={data?.engagementStatus ?? []}
										activeValue={activeSelection?.chartId === 'engagement' ? activeSelection.value : undefined}
										onSliceClick={handleChartClick}
									/>
								</ChartCard>
							</div>
						</section>

						{/* Program Performance Section */}
						<section className="analytics-section analytics-section--program">
							<div className="analytics-section__header">
								<div className="analytics-section__icon">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
										<line x1="18" y1="20" x2="18" y2="10"></line>
										<line x1="12" y1="20" x2="12" y2="4"></line>
										<line x1="6" y1="20" x2="6" y2="14"></line>
									</svg>
								</div>
								<div>
									<h2 className="analytics-section__title">Program Performance</h2>
									<p className="analytics-section__subtitle">Referrals, campaigns, and service provider metrics</p>
								</div>
							</div>
							<div className="chart-grid chart-grid--3col">
								<ChartCard
									title="Referral Pipeline"
									chartId="referrals"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'referrals'}
									className="chart-card--small"
								>
									<ReferralPipelineChart
										data={data?.referralPipeline ?? []}
										activeValue={activeSelection?.chartId === 'referrals' ? activeSelection.value : undefined}
										onBarClick={handleChartClick}
									/>
								</ChartCard>

								<ChartCard
									title="Campaign Responses"
									chartId="campaigns"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'campaigns'}
									className="chart-card--small"
								>
									<CampaignPerformanceChart
										data={data?.campaignPerformance ?? []}
										activeValue={activeSelection?.chartId === 'campaigns' ? activeSelection.value : undefined}
										onBarClick={handleChartClick}
									/>
								</ChartCard>

								<ChartCard
									title="Provider Types"
									chartId="providers"
									loading={isLoading}
									isActive={activeSelection?.chartId === 'providers'}
									className="chart-card--small"
								>
									<ServiceProviderStatsChart
										data={data?.serviceProviderStats ?? []}
										activeValue={activeSelection?.chartId === 'providers' ? activeSelection.value : undefined}
										onBarClick={handleChartClick}
									/>
								</ChartCard>
							</div>
						</section>
					</main>
				</div>
			</div>

			{/* Report Modal */}
			<ReportModal
				isOpen={isReportModalOpen}
				onClose={() => setIsReportModalOpen(false)}
				currentFilters={filters}
			/>
		</div>
	);
};

const getFilterKeyForChart = (chartId: string): keyof AnalyticsFilters | null => {
	const mapping: Record<string, keyof AnalyticsFilters> = {
		'community': 'community',
		'gender': 'gender',
		'engagement': 'engagementStatus',
		'skills': 'skillCategory',
		'qualifications': 'qualificationLevel',
		'employment': 'employmentStatus',
		'referrals': 'referralStatus',
		'campaigns': 'campaignStatus',
		'providers': 'serviceProviderStatus'
	};
	return mapping[chartId] || null;
};

export default Analytics;
