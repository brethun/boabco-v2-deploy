import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CampaignData } from '../../mocks/campaignsMockData';
import { getCampaignsClient } from '../../services/apiServiceFactory';

// Async thunks for campaign operations
export const fetchCampaignsList = createAsyncThunk(
  'campaigns/fetchList',
  async () => {
    const client = getCampaignsClient();
    return await client.getCampaignsList();
  }
);

export const fetchCampaignRecord = createAsyncThunk(
  'campaigns/fetchRecord',
  async (campaignId: string) => {
    const client = getCampaignsClient();
    return await client.getCampaignRecord(campaignId);
  }
);

export const createCampaign = createAsyncThunk(
  'campaigns/create',
  async (campaignData: Omit<CampaignData, 'id'>) => {
    const client = getCampaignsClient();
    return await client.createCampaign(campaignData);
  }
);

export const updateCampaign = createAsyncThunk(
  'campaigns/update',
  async ({ campaignId, campaignData }: { campaignId: string; campaignData: Partial<CampaignData> }) => {
    const client = getCampaignsClient();
    return await client.updateCampaign(campaignId, campaignData);
  }
);

export const deleteCampaign = createAsyncThunk(
  'campaigns/delete',
  async (campaignId: string) => {
    const client = getCampaignsClient();
    await client.deleteCampaign(campaignId);
    return campaignId;
  }
);

export const fetchCampaignMetrics = createAsyncThunk(
  'campaigns/fetchMetrics',
  async () => {
    const client = getCampaignsClient();
    return await client.getCampaignMetrics();
  }
);

// State interface
interface CampaignMetrics {
  activeCampaigns: number;
  totalResponses: number;
  conversionRate: string;
}

interface CampaignsState {
  campaigns: CampaignData[];
  selectedCampaign: CampaignData | null;
  metrics: CampaignMetrics | null;
  loading: boolean;
  error: string | null;
  filters: {
    searchTerm: string;
    selectedStatus: string;
    sortBy: string;
  };
}

// Initial state
const initialState: CampaignsState = {
  campaigns: [],
  selectedCampaign: null,
  metrics: null,
  loading: false,
  error: null,
  filters: {
    searchTerm: '',
    selectedStatus: '',
    sortBy: 'name'
  }
};

// Slice
const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setSelectedCampaign: (state, action: PayloadAction<CampaignData | null>) => {
      state.selectedCampaign = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.filters.searchTerm = action.payload;
    },
    setSelectedStatus: (state, action: PayloadAction<string>) => {
      state.filters.selectedStatus = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.filters.sortBy = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    // Fetch campaigns list
    builder
      .addCase(fetchCampaignsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaignsList.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns = action.payload;
      })
      .addCase(fetchCampaignsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch campaigns list';
      })
      
      // Fetch campaign record
      .addCase(fetchCampaignRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaignRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCampaign = action.payload;
      })
      .addCase(fetchCampaignRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch campaign record';
      })
      
      // Create campaign
      .addCase(createCampaign.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCampaign.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns.push(action.payload);
      })
      .addCase(createCampaign.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create campaign';
      })
      
      // Update campaign
      .addCase(updateCampaign.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCampaign.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.campaigns.findIndex(c => c.id === action.payload.id);
        if (index !== -1) {
          state.campaigns[index] = action.payload;
        }
        if (state.selectedCampaign && state.selectedCampaign.id === action.payload.id) {
          state.selectedCampaign = action.payload;
        }
      })
      .addCase(updateCampaign.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update campaign';
      })
      
      // Delete campaign
      .addCase(deleteCampaign.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCampaign.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns = state.campaigns.filter(c => c.id !== action.payload);
        if (state.selectedCampaign && state.selectedCampaign.id === action.payload) {
          state.selectedCampaign = null;
        }
      })
      .addCase(deleteCampaign.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete campaign';
      })
      
      // Fetch campaign metrics
      .addCase(fetchCampaignMetrics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaignMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.metrics = action.payload;
      })
      .addCase(fetchCampaignMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch campaign metrics';
      });
  }
});

// Export actions
export const {
  setSelectedCampaign,
  setSearchTerm,
  setSelectedStatus,
  setSortBy,
  clearError
} = campaignsSlice.actions;

// Selectors
export const selectCampaigns = (state: { campaigns: CampaignsState }) => state.campaigns.campaigns;
export const selectSelectedCampaign = (state: { campaigns: CampaignsState }) => state.campaigns.selectedCampaign;
export const selectCampaignMetrics = (state: { campaigns: CampaignsState }) => state.campaigns.metrics;
export const selectCampaignsLoading = (state: { campaigns: CampaignsState }) => state.campaigns.loading;
export const selectCampaignsError = (state: { campaigns: CampaignsState }) => state.campaigns.error;
export const selectCampaignsFilters = (state: { campaigns: CampaignsState }) => state.campaigns.filters;

// Filtered campaigns selector
export const selectFilteredCampaigns = (state: { campaigns: CampaignsState }) => {
  const { campaigns, filters } = state.campaigns;
  
  return campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         campaign.targetAudience.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    const matchesStatus = !filters.selectedStatus || campaign.status === filters.selectedStatus;

    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'status':
        return a.status.localeCompare(b.status);
      case 'startDate':
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      case 'responses':
        return b.responses - a.responses;
      default:
        return 0;
    }
  });
};

export default campaignsSlice.reducer;