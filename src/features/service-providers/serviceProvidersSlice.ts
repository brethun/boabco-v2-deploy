import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ServiceProviderData } from '../../mocks/serviceProvidersMockData';
import { getServiceProvidersClient } from '../../services/apiServiceFactory';

// Async thunks for service provider operations
export const fetchServiceProvidersList = createAsyncThunk(
  'serviceProviders/fetchList',
  async () => {
    const client = getServiceProvidersClient();
    return await client.getServiceProvidersList();
  }
);

export const fetchServiceProviderRecord = createAsyncThunk(
  'serviceProviders/fetchRecord',
  async (providerId: string) => {
    const client = getServiceProvidersClient();
    return await client.getServiceProviderRecord(providerId);
  }
);

export const createServiceProvider = createAsyncThunk(
  'serviceProviders/create',
  async (providerData: Omit<ServiceProviderData, 'id'>) => {
    const client = getServiceProvidersClient();
    return await client.createServiceProvider(providerData);
  }
);

export const updateServiceProvider = createAsyncThunk(
  'serviceProviders/update',
  async ({ providerId, providerData }: { providerId: string; providerData: Partial<ServiceProviderData> }) => {
    const client = getServiceProvidersClient();
    return await client.updateServiceProvider(providerId, providerData);
  }
);

export const deleteServiceProvider = createAsyncThunk(
  'serviceProviders/delete',
  async (providerId: string) => {
    const client = getServiceProvidersClient();
    await client.deleteServiceProvider(providerId);
    return providerId;
  }
);

export const fetchServiceProvidersByStatus = createAsyncThunk(
  'serviceProviders/fetchByStatus',
  async (status: ServiceProviderData['status']) => {
    const client = getServiceProvidersClient();
    return await client.getServiceProvidersByStatus(status);
  }
);

export const fetchServiceProviderMetrics = createAsyncThunk(
  'serviceProviders/fetchMetrics',
  async () => {
    const client = getServiceProvidersClient();
    return await client.getServiceProviderMetrics();
  }
);

// State interface
interface ServiceProviderMetrics {
  total: number;
  [key: string]: number;
}

interface ServiceProvidersState {
  providers: ServiceProviderData[];
  selectedProvider: ServiceProviderData | null;
  metrics: ServiceProviderMetrics | null;
  loading: boolean;
  error: string | null;
  filters: {
    searchTerm: string;
    selectedStatus: string;
    sortBy: string;
  };
}

// Initial state
const initialState: ServiceProvidersState = {
  providers: [],
  selectedProvider: null,
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
const serviceProvidersSlice = createSlice({
  name: 'serviceProviders',
  initialState,
  reducers: {
    setSelectedProvider: (state, action: PayloadAction<ServiceProviderData | null>) => {
      state.selectedProvider = action.payload;
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
    // Fetch service providers list
    builder
      .addCase(fetchServiceProvidersList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceProvidersList.fulfilled, (state, action) => {
        state.loading = false;
        state.providers = action.payload;
      })
      .addCase(fetchServiceProvidersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch service providers list';
      })
      
      // Fetch service provider record
      .addCase(fetchServiceProviderRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceProviderRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProvider = action.payload;
      })
      .addCase(fetchServiceProviderRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch service provider record';
      })
      
      // Create service provider
      .addCase(createServiceProvider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createServiceProvider.fulfilled, (state, action) => {
        state.loading = false;
        state.providers.push(action.payload);
      })
      .addCase(createServiceProvider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create service provider';
      })
      
      // Update service provider
      .addCase(updateServiceProvider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateServiceProvider.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.providers.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.providers[index] = action.payload;
        }
        if (state.selectedProvider && state.selectedProvider.id === action.payload.id) {
          state.selectedProvider = action.payload;
        }
      })
      .addCase(updateServiceProvider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update service provider';
      })
      
      // Delete service provider
      .addCase(deleteServiceProvider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteServiceProvider.fulfilled, (state, action) => {
        state.loading = false;
        state.providers = state.providers.filter(p => p.id !== parseInt(action.payload));
        if (state.selectedProvider && state.selectedProvider.id === parseInt(action.payload)) {
          state.selectedProvider = null;
        }
      })
      .addCase(deleteServiceProvider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete service provider';
      })
      
      // Fetch service providers by status
      .addCase(fetchServiceProvidersByStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceProvidersByStatus.fulfilled, (state, action) => {
        state.loading = false;
        // Update or add providers to the list
        action.payload.forEach(provider => {
          const index = state.providers.findIndex(p => p.id === provider.id);
          if (index !== -1) {
            state.providers[index] = provider;
          } else {
            state.providers.push(provider);
          }
        });
      })
      .addCase(fetchServiceProvidersByStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch service providers by status';
      })
      
      // Fetch service provider metrics
      .addCase(fetchServiceProviderMetrics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceProviderMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.metrics = action.payload;
      })
      .addCase(fetchServiceProviderMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch service provider metrics';
      });
  }
});

// Export actions
export const {
  setSelectedProvider,
  setSearchTerm,
  setSelectedStatus,
  setSortBy,
  clearError
} = serviceProvidersSlice.actions;

// Selectors
export const selectServiceProviders = (state: { serviceProviders: ServiceProvidersState }) => state.serviceProviders.providers;
export const selectSelectedServiceProvider = (state: { serviceProviders: ServiceProvidersState }) => state.serviceProviders.selectedProvider;
export const selectServiceProviderMetrics = (state: { serviceProviders: ServiceProvidersState }) => state.serviceProviders.metrics;
export const selectServiceProvidersLoading = (state: { serviceProviders: ServiceProvidersState }) => state.serviceProviders.loading;
export const selectServiceProvidersError = (state: { serviceProviders: ServiceProvidersState }) => state.serviceProviders.error;
export const selectServiceProvidersFilters = (state: { serviceProviders: ServiceProvidersState }) => state.serviceProviders.filters;

// Filtered service providers selector
export const selectFilteredServiceProviders = (state: { serviceProviders: ServiceProvidersState }) => {
  const { providers, filters } = state.serviceProviders;
  
  return providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         provider.email.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    const matchesStatus = !filters.selectedStatus || provider.status === filters.selectedStatus;

    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'status':
        return a.status.localeCompare(b.status);
      case 'createdDate':
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
      default:
        return 0;
    }
  });
};

export default serviceProvidersSlice.reducer;