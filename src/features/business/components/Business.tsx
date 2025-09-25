import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import BusinessDetail from './BusinessDetail';
import { industries, communities, familyGroups } from '../../../mocks/businessMockData';
import {
  fetchBusinessList,
  deleteBusiness,
  setSelectedBusiness,
  setSearchTerm,
  setSelectedIndustry,
  setSelectedCommunity,
  setSelectedFamilyGroup,
  setSortBy,
  selectFilteredBusinesses,
  selectSelectedBusiness,
  selectBusinessLoading,
  selectBusinessError,
  selectBusinessFilters
} from '../businessSlice';
import './Business.css';

const Business: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  // Redux selectors
  const filteredBusinesses = useSelector((state: RootState) => selectFilteredBusinesses(state));
  const selectedBusiness = useSelector((state: RootState) => selectSelectedBusiness(state));
  const loading = useSelector((state: RootState) => selectBusinessLoading(state));
  const error = useSelector((state: RootState) => selectBusinessError(state));
  const filters = useSelector((state: RootState) => selectBusinessFilters(state));

  // Load business data on component mount
  useEffect(() => {
    dispatch(fetchBusinessList());
  }, [dispatch]);

  const handleBusinessClick = (business: any) => {
    dispatch(setSelectedBusiness(business));
  };

  const handleBackToList = () => {
    dispatch(setSelectedBusiness(null));
  };

  const handleAddBusiness = () => {
    console.log('Add business functionality coming soon');
  };

  const handleDeleteBusiness = async (businessId: string) => {
    if (window.confirm('Are you sure you want to delete this business?')) {
      dispatch(deleteBusiness(businessId));
    }
  };

  const getEmployeeCount = (range: string) => {
    switch (range) {
      case '1-10': return '1-10';
      case '11-25': return '11-25';
      case '25-50': return '25-50';
      case '50-100': return '50-100';
      case '100+': return '100+';
      default: return range;
    }
  };

  if (selectedBusiness) {
    return (
      <BusinessDetail 
        business={selectedBusiness} 
        onBack={handleBackToList}
        onSave={(updatedBusiness) => {
          dispatch(setSelectedBusiness(updatedBusiness));
        }}
      />
    );
  }

  return (
    <div className="page business-page">
      <header className="page-header">
        <div className="stack">
          <h1 className="page-title">Business directory</h1>
          <p className="page-subtitle">
            Search and maintain local businesses, their contacts, and key operational details.
          </p>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleAddBusiness}>
            New business
          </button>
        </div>
      </header>

      {error && (
        <div className="error-banner">
          <p>Error: {error}</p>
        </div>
      )}

      <div className="page-sections">
        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Filter businesses</h2>
          </header>
          <div className="section-divider__body">
            <div className="business-filters">
              <div className="filter-row">
                <div className="search-group">
                  <label className="filter-label" htmlFor="business-search">Search</label>
                  <input
                    id="business-search"
                    type="text"
                    placeholder="Search businesses"
                    value={filters.searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    className="filter-input"
                  />
                </div>

                <div className="filter-group">
                  <label className="filter-label" htmlFor="business-industry">Industry</label>
                  <select 
                    id="business-industry"
                    value={filters.selectedIndustry[0] || ''}
                    onChange={(e) => dispatch(setSelectedIndustry(e.target.value ? [e.target.value] : []))}
                    className="filter-input"
                  >
                    <option value="">All industries</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label" htmlFor="business-community">Community</label>
                  <select 
                    id="business-community"
                    value={filters.selectedCommunity[0] || ''}
                    onChange={(e) => dispatch(setSelectedCommunity(e.target.value ? [e.target.value] : []))}
                    className="filter-input"
                  >
                    <option value="">All communities</option>
                    {communities.map(community => (
                      <option key={community} value={community}>{community}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label" htmlFor="business-family-group">Family group</label>
                  <select 
                    id="business-family-group"
                    value={filters.selectedFamilyGroup}
                    onChange={(e) => dispatch(setSelectedFamilyGroup(e.target.value))}
                    className="filter-input"
                  >
                    <option value="">All groups</option>
                    {familyGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label" htmlFor="business-sort">Sort by</label>
                  <select 
                    id="business-sort"
                    value={filters.sortBy}
                    onChange={(e) => dispatch(setSortBy(e.target.value))}
                    className="filter-input"
                  >
                    <option value="businessName">Name</option>
                    <option value="community">Community</option>
                    <option value="industry">Industry</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Business directory</h2>
            <p className="section-divider__meta">{filteredBusinesses.length} result{filteredBusinesses.length === 1 ? '' : 's'}</p>
          </header>
          <div className="section-divider__body">
            {loading ? (
              <div className="loading-state">
                <p>Loading businesses...</p>
              </div>
            ) : (
              <div className="table-shell business-table-shell">
                <table className="business-table">
                  <thead>
                    <tr>
                      <th>Business</th>
                      <th>ABN / ACN</th>
                      <th>Community</th>
                      <th>Primary industry</th>
                      <th>Employees</th>
                      <th>Lead contact</th>
                      <th aria-label="row actions">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBusinesses.map(business => (
                      <tr key={business.id}>
                        <td>
                          <button 
                            className="business-name-link"
                            onClick={() => handleBusinessClick(business)}
                            type="button"
                          >
                            {business.businessName}
                          </button>
                        </td>
                        <td>
                          <div className="abn-details">
                            <div>ABN: {business.abn}</div>
                            {business.acn && <div>ACN: {business.acn}</div>}
                          </div>
                        </td>
                        <td>
                          <span className="community-tag">{business.community}</span>
                        </td>
                        <td>
                          <span className="industry-tag">{business.industry.primary}</span>
                        </td>
                        <td>{getEmployeeCount(business.workforce.employeeNumber)}</td>
                        <td>{business.contact.primaryContactName}</td>
                        <td>
                          <div className="action-buttons">
                            <button 
                              className="action-btn"
                              onClick={() => handleBusinessClick(business)}
                              title="View"
                              type="button"
                            >
                              View
                            </button>
                            <button 
                              className="action-btn"
                              onClick={() => handleBusinessClick(business)}
                              title="Edit"
                              type="button"
                            >
                              Edit
                            </button>
                            <button 
                              className="action-btn action-btn--danger"
                              onClick={() => handleDeleteBusiness(business.id)}
                              title="Delete"
                              type="button"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredBusinesses.length === 0 && !loading && (
                  <div className="empty-state">
                    <h3>No businesses found</h3>
                    <p>Try adjusting your filters or search term to see more results.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;