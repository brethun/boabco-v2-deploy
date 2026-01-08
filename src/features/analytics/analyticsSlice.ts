import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { mockAnalyticsClient } from '../../services/mockAnalyticsClient';
import {
	AnalyticsData,
	AnalyticsFilters,
	FilterOptions,
	ActiveSelection
} from './types';

interface AnalyticsState {
	data: AnalyticsData | null;
	loadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
	filters: AnalyticsFilters;
	activeSelection: ActiveSelection | null;
	filterOptions: FilterOptions | null;
	error: string | null;
}

const initialState: AnalyticsState = {
	data: null,
	loadingStatus: 'idle',
	filters: {},
	activeSelection: null,
	filterOptions: null,
	error: null
};

export const fetchAnalyticsData = createAsyncThunk(
	'analytics/fetchData',
	async (filters?: AnalyticsFilters) => {
		return await mockAnalyticsClient.getAnalyticsData(filters);
	}
);

export const fetchFilterOptions = createAsyncThunk(
	'analytics/fetchFilterOptions',
	async () => {
		return await mockAnalyticsClient.getFilterOptions();
	}
);

const chartToFilterMapping: Record<string, keyof AnalyticsFilters> = {
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

const analyticsSlice = createSlice({
	name: 'analytics',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<{ key: keyof AnalyticsFilters; value: string | undefined }>) => {
			const { key, value } = action.payload;
			if (value) {
				state.filters[key] = value;
			} else {
				delete state.filters[key];
			}
		},
		clearFilters: (state) => {
			state.filters = {};
			state.activeSelection = null;
		},
		setActiveSelection: (state, action: PayloadAction<ActiveSelection | null>) => {
			state.activeSelection = action.payload;
			if (action.payload) {
				const filterKey = chartToFilterMapping[action.payload.chartId];
				if (filterKey) {
					state.filters[filterKey] = action.payload.value;
				}
			}
		},
		clearActiveSelection: (state) => {
			if (state.activeSelection) {
				const filterKey = chartToFilterMapping[state.activeSelection.chartId];
				if (filterKey) {
					delete state.filters[filterKey];
				}
			}
			state.activeSelection = null;
		},
		removeFilter: (state, action: PayloadAction<keyof AnalyticsFilters>) => {
			delete state.filters[action.payload];
			if (state.activeSelection) {
				const filterKey = chartToFilterMapping[state.activeSelection.chartId];
				if (filterKey === action.payload) {
					state.activeSelection = null;
				}
			}
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAnalyticsData.pending, (state) => {
				state.loadingStatus = 'loading';
				state.error = null;
			})
			.addCase(fetchAnalyticsData.fulfilled, (state, action) => {
				state.loadingStatus = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchAnalyticsData.rejected, (state, action) => {
				state.loadingStatus = 'failed';
				state.error = action.error.message || 'Failed to fetch analytics data';
			})
			.addCase(fetchFilterOptions.fulfilled, (state, action) => {
				state.filterOptions = action.payload;
			});
	}
});

export const {
	setFilter,
	clearFilters,
	setActiveSelection,
	clearActiveSelection,
	removeFilter
} = analyticsSlice.actions;

export const selectAnalyticsData = (state: { analytics: AnalyticsState }) => state.analytics.data;
export const selectAnalyticsFilters = (state: { analytics: AnalyticsState }) => state.analytics.filters;
export const selectActiveSelection = (state: { analytics: AnalyticsState }) => state.analytics.activeSelection;
export const selectAnalyticsLoading = (state: { analytics: AnalyticsState }) => state.analytics.loadingStatus;
export const selectFilterOptions = (state: { analytics: AnalyticsState }) => state.analytics.filterOptions;
export const selectAnalyticsError = (state: { analytics: AnalyticsState }) => state.analytics.error;
export const selectHasActiveFilters = (state: { analytics: AnalyticsState }) =>
	Object.keys(state.analytics.filters).length > 0;

export default analyticsSlice.reducer;
