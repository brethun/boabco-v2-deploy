import React from 'react';
import { AnalyticsFilters, FilterOptions, ActiveSelection } from '../types';
import './FilterPanel.css';

interface FilterPanelProps {
	filters: AnalyticsFilters;
	filterOptions: FilterOptions | null;
	activeSelection: ActiveSelection | null;
	onFilterChange: (key: keyof AnalyticsFilters, value: string | undefined) => void;
	onClearFilters: () => void;
	onRemoveFilter: (key: keyof AnalyticsFilters) => void;
	hasActiveFilters?: boolean;
}

const filterLabels: Record<keyof AnalyticsFilters, string> = {
	community: 'Community',
	gender: 'Gender',
	engagementStatus: 'Engagement',
	qualificationLevel: 'Qualification',
	skillCategory: 'Skill',
	employmentStatus: 'Employment',
	referralStatus: 'Referral Status',
	campaignStatus: 'Campaign Status',
	serviceProviderStatus: 'Provider Status'
};

const FilterPanel: React.FC<FilterPanelProps> = ({
	filters,
	filterOptions,
	activeSelection,
	onFilterChange,
	onClearFilters,
	onRemoveFilter,
	hasActiveFilters: hasActiveFiltersProp
}) => {
	const hasActiveFilters = hasActiveFiltersProp ?? Object.keys(filters).length > 0;

	const handleSelectChange = (key: keyof AnalyticsFilters, value: string) => {
		onFilterChange(key, value || undefined);
	};

	const activeFilterEntries = Object.entries(filters) as [keyof AnalyticsFilters, string][];

	return (
		<div className="filter-panel">
			<div className="filter-panel__header">
				<div className="filter-panel__title-group">
					<div className="filter-panel__icon">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
						</svg>
					</div>
					<h3 className="filter-panel__title">Filters</h3>
				</div>
				{hasActiveFilters && (
					<button
						className="filter-panel__clear-btn"
						onClick={onClearFilters}
					>
						Clear All
					</button>
				)}
			</div>

			<div className="filter-panel__body">
				<div className="filter-group">
					<label className="filter-label">Community</label>
					<select
						className="filter-select"
						value={filters.community || ''}
						onChange={(e) => handleSelectChange('community', e.target.value)}
					>
						<option value="">All Communities</option>
						{filterOptions?.communities.map(community => (
							<option key={community} value={community}>{community}</option>
						))}
					</select>
				</div>

				<div className="filter-group">
					<label className="filter-label">Gender</label>
					<select
						className="filter-select"
						value={filters.gender || ''}
						onChange={(e) => handleSelectChange('gender', e.target.value)}
					>
						<option value="">All Genders</option>
						{filterOptions?.genders.map(gender => (
							<option key={gender} value={gender}>{gender}</option>
						))}
					</select>
				</div>

				<div className="filter-group">
					<label className="filter-label">Engagement Status</label>
					<select
						className="filter-select"
						value={filters.engagementStatus || ''}
						onChange={(e) => handleSelectChange('engagementStatus', e.target.value)}
					>
						<option value="">All Statuses</option>
						{filterOptions?.engagementStatuses.map(status => (
							<option key={status} value={status}>{status}</option>
						))}
					</select>
				</div>

				<div className="filter-group">
					<label className="filter-label">Qualification Level</label>
					<select
						className="filter-select"
						value={filters.qualificationLevel || ''}
						onChange={(e) => handleSelectChange('qualificationLevel', e.target.value)}
					>
						<option value="">All Levels</option>
						{filterOptions?.qualificationLevels.map(level => (
							<option key={level} value={level}>{level}</option>
						))}
					</select>
				</div>

				<div className="filter-group">
					<label className="filter-label">Employment Status</label>
					<select
						className="filter-select"
						value={filters.employmentStatus || ''}
						onChange={(e) => handleSelectChange('employmentStatus', e.target.value)}
					>
						<option value="">All</option>
						<option value="Employed">Employed</option>
						<option value="Seeking">Seeking Work</option>
						<option value="Not Working">Not Working</option>
					</select>
				</div>
			</div>

			{hasActiveFilters && activeFilterEntries.length > 0 && (
				<div className="filter-panel__active">
					<div className="filter-panel__active-header">
						<h4 className="filter-panel__active-title">Active Filters</h4>
						<span className="filter-panel__active-count">{activeFilterEntries.length}</span>
					</div>
					<div className="filter-chips">
						{activeFilterEntries.map(([key, value]) => (
							<div
								key={key}
								className={`filter-chip ${activeSelection && key === getFilterKeyForChart(activeSelection.chartId) ? 'filter-chip--from-chart' : ''}`}
							>
								<span className="filter-chip__label">
									{filterLabels[key]}: {value}
								</span>
								<button
									className="filter-chip__remove"
									onClick={() => onRemoveFilter(key)}
									aria-label={`Remove ${filterLabels[key]} filter`}
								>
									×
								</button>
							</div>
						))}
					</div>
				</div>
			)}
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

export default FilterPanel;
