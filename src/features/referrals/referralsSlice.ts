import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ReferralData } from '../../mocks/referralsMockData';
import { getReferralsClient } from '../../services/apiServiceFactory';

// Async thunks for referral operations
export const fetchReferralsList = createAsyncThunk(
  'referrals/fetchList',
  async () => {
    const client = getReferralsClient();
    return await client.getReferralsList();
  }
);

export const fetchReferralRecord = createAsyncThunk(
  'referrals/fetchRecord',
  async (referralId: string) => {
    const client = getReferralsClient();
    return await client.getReferralRecord(referralId);
  }
);

export const createReferral = createAsyncThunk(
  'referrals/create',
  async (referralData: Omit<ReferralData, 'id'>) => {
    const client = getReferralsClient();
    return await client.createReferral(referralData);
  }
);

export const updateReferral = createAsyncThunk(
  'referrals/update',
  async ({ referralId, referralData }: { referralId: string; referralData: Partial<ReferralData> }) => {
    const client = getReferralsClient();
    return await client.updateReferral(referralId, referralData);
  }
);

export const deleteReferral = createAsyncThunk(
  'referrals/delete',
  async (referralId: string) => {
    const client = getReferralsClient();
    await client.deleteReferral(referralId);
    return referralId;
  }
);

export const fetchReferralsByStatus = createAsyncThunk(
  'referrals/fetchByStatus',
  async (status: ReferralData['status']) => {
    const client = getReferralsClient();
    return await client.getReferralsByStatus(status);
  }
);

export const fetchReferralMetrics = createAsyncThunk(
  'referrals/fetchMetrics',
  async () => {
    const client = getReferralsClient();
    return await client.getReferralMetrics();
  }
);

// State interface
interface ReferralMetrics {
  total: number;
  [key: string]: number;
}

interface ReferralsState {
  referrals: ReferralData[];
  selectedReferral: ReferralData | null;
  metrics: ReferralMetrics | null;
  loading: boolean;
  error: string | null;
  filters: {
    searchTerm: string;
    selectedStatus: string;
    selectedAssignee: string;
    sortBy: string;
  };
}

// Initial state
const initialState: ReferralsState = {
  referrals: [],
  selectedReferral: null,
  metrics: null,
  loading: false,
  error: null,
  filters: {
    searchTerm: '',
    selectedStatus: '',
    selectedAssignee: '',
    sortBy: 'lastUpdated'
  }
};

// Slice
const referralsSlice = createSlice({
  name: 'referrals',
  initialState,
  reducers: {
    setSelectedReferral: (state, action: PayloadAction<ReferralData | null>) => {
      state.selectedReferral = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.filters.searchTerm = action.payload;
    },
    setSelectedStatus: (state, action: PayloadAction<string>) => {
      state.filters.selectedStatus = action.payload;
    },
    setSelectedAssignee: (state, action: PayloadAction<string>) => {
      state.filters.selectedAssignee = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.filters.sortBy = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    // Fetch referrals list
    builder
      .addCase(fetchReferralsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReferralsList.fulfilled, (state, action) => {
        state.loading = false;
        state.referrals = action.payload;
      })
      .addCase(fetchReferralsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch referrals list';
      })
      
      // Fetch referral record
      .addCase(fetchReferralRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReferralRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedReferral = action.payload;
      })
      .addCase(fetchReferralRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch referral record';
      })
      
      // Create referral
      .addCase(createReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReferral.fulfilled, (state, action) => {
        state.loading = false;
        state.referrals.push(action.payload);
      })
      .addCase(createReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create referral';
      })
      
      // Update referral
      .addCase(updateReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateReferral.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.referrals.findIndex(r => r.id === action.payload.id);
        if (index !== -1) {
          state.referrals[index] = action.payload;
        }
        if (state.selectedReferral && state.selectedReferral.id === action.payload.id) {
          state.selectedReferral = action.payload;
        }
      })
      .addCase(updateReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update referral';
      })
      
      // Delete referral
      .addCase(deleteReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReferral.fulfilled, (state, action) => {
        state.loading = false;
        state.referrals = state.referrals.filter(r => r.id !== action.payload);
        if (state.selectedReferral && state.selectedReferral.id === action.payload) {
          state.selectedReferral = null;
        }
      })
      .addCase(deleteReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete referral';
      })
      
      // Fetch referrals by status
      .addCase(fetchReferralsByStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReferralsByStatus.fulfilled, (state, action) => {
        state.loading = false;
        // Update or add referrals to the list
        action.payload.forEach(referral => {
          const index = state.referrals.findIndex(r => r.id === referral.id);
          if (index !== -1) {
            state.referrals[index] = referral;
          } else {
            state.referrals.push(referral);
          }
        });
      })
      .addCase(fetchReferralsByStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch referrals by status';
      })
      
      // Fetch referral metrics
      .addCase(fetchReferralMetrics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReferralMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.metrics = action.payload;
      })
      .addCase(fetchReferralMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch referral metrics';
      });
  }
});

// Export actions
export const {
  setSelectedReferral,
  setSearchTerm,
  setSelectedStatus,
  setSelectedAssignee,
  setSortBy,
  clearError
} = referralsSlice.actions;

// Selectors
export const selectReferrals = (state: { referrals: ReferralsState }) => state.referrals.referrals;
export const selectSelectedReferral = (state: { referrals: ReferralsState }) => state.referrals.selectedReferral;
export const selectReferralMetrics = (state: { referrals: ReferralsState }) => state.referrals.metrics;
export const selectReferralsLoading = (state: { referrals: ReferralsState }) => state.referrals.loading;
export const selectReferralsError = (state: { referrals: ReferralsState }) => state.referrals.error;
export const selectReferralsFilters = (state: { referrals: ReferralsState }) => state.referrals.filters;

// Grouped referrals selector for Kanban board
export const selectGroupedReferrals = (state: { referrals: ReferralsState }) => {
  const { referrals } = state.referrals;
  
  return referrals.reduce((groups, referral) => {
    if (!groups[referral.status]) {
      groups[referral.status] = [];
    }
    groups[referral.status].push(referral);
    return groups;
  }, {} as Record<string, ReferralData[]>);
};

// Filtered referrals selector
export const selectFilteredReferrals = (state: { referrals: ReferralsState }) => {
  const { referrals, filters } = state.referrals;
  
  return referrals.filter(referral => {
    const matchesSearch = referral.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         referral.assignee.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    const matchesStatus = !filters.selectedStatus || referral.status === filters.selectedStatus;
    const matchesAssignee = !filters.selectedAssignee || referral.assignee === filters.selectedAssignee;

    return matchesSearch && matchesStatus && matchesAssignee;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'status':
        return a.status.localeCompare(b.status);
      case 'assignee':
        return a.assignee.localeCompare(b.assignee);
      case 'lastUpdated':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'referred':
        return new Date(b.referred).getTime() - new Date(a.referred).getTime();
      default:
        return 0;
    }
  });
};

export default referralsSlice.reducer;