import React, { useState, useMemo } from 'react';
import BusinessDetail from './BusinessDetail';
import './Business.css';

interface Director {
  id: string;
  title: string;
  name: string;
}

interface Project {
  id: string;
  clientName: string;
  description: string;
  startDate: string;
  endDate: string;
  workforce: number;
  spend: number;
}

interface BusinessData {
  id: string;
  businessName: string;
  abn: string;
  acn: string;
  community: string;
  website: string;
  generalInformation: string;
  businessHistory: string;
  missionStatement: string;
  familyGroup: string;
  operationLength: number;
  interestedInClosureWork: boolean;
  additionalSupportRequired: boolean;
  address: {
    street: string;
    street2: string;
    suburb: string;
    state: string;
    postcode: string;
  };
  contact: {
    primaryContactName: string;
    title: string;
    contactNumber: string;
    email: string;
    contactType: string;
  };
  directors: Director[];
  workforce: {
    employeeNumber: string;
    largestPeakWorkforce: number;
    mainCompetencies: string[];
    largestProjectManaged: string;
  };
  industry: {
    primary: string;
    secondary: string;
  };
  projects: Project[];
  previousClients: Array<{
    id: string;
    clientName: string;
    projectDescription: string;
  }>;
  equipment: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  socialMedia: Array<{
    id: string;
    type: string;
    url: string;
  }>;
}

const Business: React.FC = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<string[]>([]);
  const [selectedFamilyGroup, setSelectedFamilyGroup] = useState('');
  const [sortBy, setSortBy] = useState('businessName');

  // Mock data for demonstration
  const [businesses, setBusinesses] = useState<BusinessData[]>([
    {
      id: '1',
      businessName: 'Aboriginal Construction Services',
      abn: '12 345 678 901',
      acn: 'ACN 123 456 789',
      community: 'Kimberley Region',
      website: 'https://acs-construction.com.au',
      generalInformation: 'Leading indigenous construction company specializing in remote area projects.',
      businessHistory: 'Established in 2010, we have grown from a small family business to a regional leader.',
      missionStatement: 'To provide quality construction services while employing and training local Aboriginal people.',
      familyGroup: 'Group A',
      operationLength: 13,
      interestedInClosureWork: true,
      additionalSupportRequired: false,
      address: {
        street: '123 Main Street',
        street2: '',
        suburb: 'Broome',
        state: 'WA',
        postcode: '6725'
      },
      contact: {
        primaryContactName: 'John Lawson',
        title: 'Mr',
        contactNumber: '08 9192 1234',
        email: 'john.lawson@acs-construction.com.au',
        contactType: 'General Manager'
      },
      directors: [
        { id: '1', title: 'Managing Director', name: 'Sarah Wilson' },
        { id: '2', title: 'Operations Director', name: 'Michael Brown' }
      ],
      workforce: {
        employeeNumber: '25-50',
        largestPeakWorkforce: 75,
        mainCompetencies: ['Construction', 'Project Management', 'Safety Management'],
        largestProjectManaged: 'Major Infrastructure'
      },
      industry: {
        primary: 'Construction',
        secondary: 'Infrastructure'
      },
      projects: [
        {
          id: '1',
          clientName: 'Department of Infrastructure',
          description: 'Remote community housing project',
          startDate: '2023-01-15',
          endDate: '2023-12-20',
          workforce: 35,
          spend: 2500000
        }
      ],
      previousClients: [
        { id: '1', clientName: 'Main Roads WA', projectDescription: 'Highway maintenance contract for Great Northern Highway section' },
        { id: '2', clientName: 'Shire of Broome', projectDescription: 'Community center construction and landscaping project' },
        { id: '3', clientName: 'Department of Infrastructure', projectDescription: 'Remote housing infrastructure development' },
        { id: '4', clientName: 'Rio Tinto', projectDescription: 'Site preparation and civil works for mining operations' }
      ],
      equipment: [
        { id: '1', name: 'Excavator', description: 'CAT 320D Excavator - 20 tonne capacity' },
        { id: '2', name: 'Dump Truck', description: 'Volvo A25G Articulated Dump Truck - 25 tonne payload' },
        { id: '3', name: 'Bulldozer', description: 'CAT D6T Bulldozer - Track-type tractor' },
        { id: '4', name: 'Grader', description: 'CAT 140M3 Motor Grader - Road maintenance' }
      ],
      socialMedia: [
        { id: '1', type: 'LinkedIn', url: 'https://linkedin.com/company/acs-construction' },
        { id: '2', type: 'Facebook', url: 'https://facebook.com/acsconstruction' },
        { id: '3', type: 'Instagram', url: 'https://instagram.com/acs_construction_wa' },
        { id: '4', type: 'YouTube', url: 'https://youtube.com/@ACSConstructionWA' }
      ]
    },
    {
      id: '2',
      businessName: 'Pilbara Mining Services',
      abn: '98 765 432 109',
      acn: 'ACN 987 654 321',
      community: 'Pilbara Region',
      website: 'https://pilbaramining.com.au',
      generalInformation: 'Specialized mining support services for the Pilbara region.',
      businessHistory: 'Family-owned business operating since 2005.',
      missionStatement: 'Delivering safe, reliable mining support services to the Pilbara.',
      familyGroup: 'Group B',
      operationLength: 18,
      interestedInClosureWork: true,
      additionalSupportRequired: true,
      address: {
        street: '456 Industrial Drive',
        street2: 'Unit 12',
        suburb: 'Karratha',
        state: 'WA',
        postcode: '6714'
      },
      contact: {
        primaryContactName: 'David Thompson',
        title: 'Mr',
        contactNumber: '08 9144 5678',
        email: 'david.thompson@pilbaramining.com.au',
        contactType: 'Operations Manager'
      },
      directors: [
        { id: '1', title: 'Chief Executive Officer', name: 'Linda Thompson' }
      ],
      workforce: {
        employeeNumber: '50-100',
        largestPeakWorkforce: 120,
        mainCompetencies: ['Mining Operations', 'Equipment Maintenance', 'Logistics'],
        largestProjectManaged: 'Mine Site Support'
      },
      industry: {
        primary: 'Mining',
        secondary: 'Logistics'
      },
      projects: [
        {
          id: '1',
          clientName: 'Rio Tinto',
          description: 'Mine site maintenance contract',
          startDate: '2023-03-01',
          endDate: '2024-02-29',
          workforce: 45,
          spend: 5200000
        }
      ],
      previousClients: [
        { id: '1', clientName: 'BHP', projectDescription: 'Equipment maintenance services and 24/7 on-site support' },
        { id: '2', clientName: 'Fortescue Metals', projectDescription: 'Site logistics support and material handling operations' },
        { id: '3', clientName: 'Woodside Energy', projectDescription: 'Industrial maintenance for LNG processing facilities' },
        { id: '4', clientName: 'Chevron Australia', projectDescription: 'Heavy equipment rental and maintenance services' },
        { id: '5', clientName: 'Iron Bridge Magnetite', projectDescription: 'Mining infrastructure development and support' }
      ],
      equipment: [
        { id: '1', name: 'Mobile Crane', description: 'Liebherr LTM 1090-4.2 - 90 tonne capacity' },
        { id: '2', name: 'Service Truck', description: 'Kenworth T909 Service Vehicle - Heavy duty maintenance' },
        { id: '3', name: 'Water Cart', description: 'Volvo FM12 Water Cart - 20,000L capacity' },
        { id: '4', name: 'Low Loader', description: 'Kenworth T909 Low Loader - Equipment transport' },
        { id: '5', name: 'Compressor', description: 'Atlas Copco XRVS 1000 - Portable air compressor' }
      ],
      socialMedia: [
        { id: '1', type: 'LinkedIn', url: 'https://linkedin.com/company/pilbara-mining' },
        { id: '2', type: 'Facebook', url: 'https://facebook.com/pilbaraminingservices' },
        { id: '3', type: 'Twitter', url: 'https://twitter.com/PilbaraMining' }
      ]
    }
  ]);

  const industries = ['Construction', 'Mining', 'Agriculture', 'Tourism', 'Retail', 'Healthcare', 'Education'];
  const communities = ['Kimberley Region', 'Pilbara Region', 'Goldfields', 'Great Southern', 'Wheatbelt'];
  const familyGroups = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'];

  const filteredBusinesses = useMemo(() => {
    return businesses.filter(business => {
      const matchesSearch = business.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           business.abn.includes(searchTerm) ||
                           business.community.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIndustry = selectedIndustry.length === 0 || 
                             selectedIndustry.includes(business.industry.primary);
      
      const matchesCommunity = selectedCommunity.length === 0 || 
                              selectedCommunity.includes(business.community);
      
      const matchesFamilyGroup = !selectedFamilyGroup || 
                                business.familyGroup === selectedFamilyGroup;

      return matchesSearch && matchesIndustry && matchesCommunity && matchesFamilyGroup;
    }).sort((a, b) => {
      switch (sortBy) {
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
  }, [businesses, searchTerm, selectedIndustry, selectedCommunity, selectedFamilyGroup, sortBy]);

  const handleBusinessClick = (business: BusinessData) => {
    setSelectedBusiness(business);
  };

  const handleBackToList = () => {
    setSelectedBusiness(null);
  };

  const handleAddBusiness = () => {
    console.log('Add business functionality coming soon');
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
          setBusinesses(prev => prev.map(b => b.id === updatedBusiness.id ? updatedBusiness : b));
          setSelectedBusiness(updatedBusiness);
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="filter-input"
                  />
                </div>

                <div className="filter-group">
                  <label className="filter-label" htmlFor="business-industry">Industry</label>
                  <select 
                    id="business-industry"
                    value={selectedIndustry[0] || ''}
                    onChange={(e) => setSelectedIndustry(e.target.value ? [e.target.value] : [])}
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
                    value={selectedCommunity[0] || ''}
                    onChange={(e) => setSelectedCommunity(e.target.value ? [e.target.value] : [])}
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
                    value={selectedFamilyGroup}
                    onChange={(e) => setSelectedFamilyGroup(e.target.value)}
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
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
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
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this business?')) {
                                setBusinesses(prev => prev.filter(b => b.id !== business.id));
                              }
                            }}
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

              {filteredBusinesses.length === 0 && (
                <div className="empty-state">
                  <h3>No businesses found</h3>
                  <p>Try adjusting your filters or search term to see more results.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
