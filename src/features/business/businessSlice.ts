import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BusinessData } from '../../mocks/businessMockData';
import { getBusinessClient } from '../../services/apiServiceFactory';

// Async thunks for business operations
export const fetchBusinessList = createAsyncThunk(
  'business/fetchList',
  async () => {
    const client = getBusinessClient();
    return await client.getBusinessList();
  }
);

export const fetchBusinessRecord = createAsyncThunk(
  'business/fetchRecord',
  async (businessId: string) => {
    const client = getBusinessClient();
    return await client.getBusinessRecord(businessId);
  }
);

export const createBusiness = createAsyncThunk(
  'business/create',
  async (businessData: Omit<BusinessData, 'id'>) => {
    const client = getBusinessClient();
    return await client.createBusiness(businessData);
  }
);

export const updateBusiness = createAsyncThunk(
  'business/update',
  async ({ businessId, businessData }: { businessId: string; businessData: Partial<BusinessData> }) => {
    const client = getBusinessClient();
    return await client.updateBusiness(businessId, businessData);
  }
);

export const deleteBusiness = createAsyncThunk(
  'business/delete',
  async (businessId: string) => {
    const client = getBusinessClient();
    await client.deleteBusiness(businessId);
    return businessId;
  }
);

// State interface
interface BusinessState {
  businesses: BusinessData[];
  selectedBusiness: BusinessData | null;
  loading: boolean;
  error: string | null;
  filters: {
    searchTerm: string;
    selectedIndustry: string[];
    selectedCommunity: string[];
    selectedFamilyGroup: string;
    sortBy: string;
  };
}

// Initial state
const initialState: BusinessState = {
  businesses: [],
  selectedBusiness: null,
  loading: false,
  error: null,
  filters: {
    searchTerm: '',
    selectedIndustry: [],
    selectedCommunity: [],
    selectedFamilyGroup: '',
    sortBy: 'businessName'
  }
};

// Slice
const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    setSelectedBusiness: (state, action: PayloadAction<BusinessData | null>) => {
      state.selectedBusiness = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.filters.searchTerm = action.payload;
    },
    setSelectedIndustry: (state, action: PayloadAction<string[]>) => {
      state.filters.selectedIndustry = action.payload;
    },
    setSelectedCommunity: (state, action: PayloadAction<string[]>) => {
      state.filters.selectedCommunity = action.payload;
    },
    setSelectedFamilyGroup: (state, action: PayloadAction<string>) => {
      state.filters.selectedFamilyGroup = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.filters.sortBy = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    // Fetch business list
    builder
      .addCase(fetchBusinessList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBusinessList.fulfilled, (state, action) => {
        state.loading = false;
        state.businesses = action.payload;
      })
      .addCase(fetchBusinessList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch business list';
      })
      
      // Fetch business record
      .addCase(fetchBusinessRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBusinessRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBusiness = action.payload;
      })
      .addCase(fetchBusinessRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch business record';
      })
      
      // Create business
      .addCase(createBusiness.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBusiness.fulfilled, (state, action) => {
        state.loading = false;
        state.businesses.push(action.payload);
      })
      .addCase(createBusiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create business';
      })
      
      // Update business
      .addCase(updateBusiness.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBusiness.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.businesses.findIndex(b => b.id === action.payload.id);
        if (index !== -1) {
          state.businesses[index] = action.payload;
        }
        if (state.selectedBusiness && state.selectedBusiness.id === action.payload.id) {
          state.selectedBusiness = action.payload;
        }
      })
      .addCase(updateBusiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update business';
      })
      
      // Delete business
      .addCase(deleteBusiness.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBusiness.fulfilled, (state, action) => {
        state.loading = false;
        state.businesses = state.businesses.filter(b => b.id !== action.payload);
        if (state.selectedBusiness && state.selectedBusiness.id === action.payload) {
          state.selectedBusiness = null;
        }
      })
      .addCase(deleteBusiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete business';
      });
  }
});

// Export actions
export const {
  setSelectedBusiness,
  setSearchTerm,
  setSelectedIndustry,
  setSelectedCommunity,
  setSelectedFamilyGroup,
  setSortBy,
  clearError
} = businessSlice.actions;

// Selectors
export const selectBusinesses = (state: { business: BusinessState }) => state.business.businesses;
export const selectSelectedBusiness = (state: { business: BusinessState }) => state.business.selectedBusiness;
export const selectBusinessLoading = (state: { business: BusinessState }) => state.business.loading;
export const selectBusinessError = (state: { business: BusinessState }) => state.business.error;
export const selectBusinessFilters = (state: { business: BusinessState }) => state.business.filters;

// Filtered businesses selector
export const selectFilteredBusinesses = (state: { business: BusinessState }) => {
  const { businesses, filters } = state.business;
  
  return businesses.filter(business => {
    const matchesSearch = business.businessName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         business.abn.includes(filters.searchTerm) ||
                         business.community.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    const matchesIndustry = filters.selectedIndustry.length === 0 || 
                           filters.selectedIndustry.includes(business.industry.primary);
    
    const matchesCommunity = filters.selectedCommunity.length === 0 || 
                            filters.selectedCommunity.includes(business.community);
    
    const matchesFamilyGroup = !filters.selectedFamilyGroup || 
                              business.familyGroup === filters.selectedFamilyGroup;

    return matchesSearch && matchesIndustry && matchesCommunity && matchesFamilyGroup;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'businessName':
        return a.businessName.localeCompare(b.businessName);
      case 'community':
        return a.community.localeCompare(b.community);
      case 'industry':
        return a.industry.primary.localeCompare(b.industry.primary);
      default:
        return 0;
    }
  });
};

export default businessSlice.reducer;