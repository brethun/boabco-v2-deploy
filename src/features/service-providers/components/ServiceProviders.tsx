import React, { useState } from 'react';
import ServiceProviderDetail from './ServiceProviderDetail';
import './ServiceProviders.css';

const ServiceProviders: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [providers] = useState([
    {
      id: 1,
      name: 'Kununurra Community Garden Kitchen',
      email: 'info@kcgk.org.au',
      phone: '+61 8 9168 1234',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'K',
      details: {
        organizationType: 'Community Group',
        abn: '12 345 678 901',
        acn: '',
        registrationNumber: 'CG-2020-001',
        website: 'https://www.kcgk.org.au',
        description: 'A community-driven initiative providing fresh, healthy food options and cooking education to the Kununurra community through sustainable gardening practices.',
        servicesOffered: [
          'Community garden management',
          'Cooking classes and workshops',
          'Nutrition education programs',
          'Fresh produce distribution',
          'School garden programs'
        ],
        specializations: [
          'Indigenous food education',
          'Sustainable agriculture',
          'Community engagement',
          'Youth development'
        ],
        address: {
          street: '25 Messmate Way',
          suburb: 'Kununurra',
          state: 'WA',
          postcode: '6743',
          country: 'Australia'
        },
        contactPerson: {
          firstName: 'Sarah',
          lastName: 'Mitchell',
          position: 'Community Coordinator',
          email: 'sarah.mitchell@kcgk.org.au',
          phone: '+61 8 9168 1234',
          mobile: '+61 456 789 123'
        },
        operationalDetails: {
          businessHours: 'Mon-Fri 8:00 AM - 4:00 PM, Sat 9:00 AM - 1:00 PM',
          capacity: '150 community members per month',
          serviceAreas: [
            'Kununurra Township',
            'East Kimberley Region',
            'Remote Communities'
          ],
          languages: [
            'English',
            'Kriol',
            'Traditional Languages'
          ],
          accreditations: [
            'Food Safety Certification',
            'Community Services Registration'
          ],
          openHours: {
            monday: { open: '08:00', close: '16:00', closed: false },
            tuesday: { open: '08:00', close: '16:00', closed: false },
            wednesday: { open: '08:00', close: '16:00', closed: false },
            thursday: { open: '08:00', close: '16:00', closed: false },
            friday: { open: '08:00', close: '16:00', closed: false },
            saturday: { open: '09:00', close: '13:00', closed: false },
            sunday: { open: '09:00', close: '17:00', closed: true }
          }
        },
        financialDetails: {
          feeStructure: 'No Fee/Volunteer',
          paymentTerms: 'N/A - Community Service',
          gstRegistered: false,
          insuranceDetails: 'Public liability insurance through Community Sector Banking'
        },
        notes: 'Established in 2020 with support from local traditional owners. Strong focus on cultural preservation and food sovereignty.'
      }
    },
    {
      id: 2,
      name: 'Wunan Foundation',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'W'
    },
    {
      id: 3,
      name: 'Kununurra Neighbourhood House',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'K'
    },
    {
      id: 4,
      name: 'Services Australia',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'S'
    },
    {
      id: 5,
      name: 'Kimberley Community Legal Services (KCLS)',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'K'
    },
    {
      id: 6,
      name: '54 Reasons',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: '5'
    },
    {
      id: 7,
      name: 'Key Assets',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'K'
    },
    {
      id: 8,
      name: 'OVAHS (Ord Valley Aboriginal Health Service)',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'O'
    },
    {
      id: 9,
      name: 'Anglicare WA',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'A'
    },
    {
      id: 10,
      name: 'BOAB Health',
      email: 'No email',
      phone: 'No phone',
      status: 'Active',
      createdDate: 'Jul 12, 2025',
      daysAgo: '(15 days ago)',
      avatar: 'B'
    }
  ]);

  const getAvatarColor = (name: string) => {
    const colors = [
      '#8E44AD', '#3498DB', '#E67E22', '#E74C3C', '#2ECC71',
      '#9B59B6', '#34495E', '#F39C12', '#27AE60', '#2980B9'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleProviderClick = (provider: any) => {
    setSelectedProvider(provider);
  };

  const handleBackToList = () => {
    setSelectedProvider(null);
  };

  const handleSaveProvider = (updatedProvider: any) => {
    // In a real app, this would update the backend
    console.log('Saving updated provider:', updatedProvider);
    setSelectedProvider(updatedProvider);
  };

  if (selectedProvider) {
    return (
      <ServiceProviderDetail 
        provider={selectedProvider}
        onBack={handleBackToList}
        onSave={handleSaveProvider}
      />
    );
  }

  return (
    <div className="page providers-page">
      <header className="page-header">
        <div className="stack">
          <h1 className="page-title">Service providers</h1>
          <p className="page-subtitle">Maintain the network of organisations supporting the program.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" type="button">Refresh</button>
        </div>
      </header>

      <div className="page-sections">
        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Directory</h2>
            <p className="section-divider__meta">{providers.length} providers</p>
          </header>
          <div className="section-divider__body">
            <div className="providers-table-container">
              <table className="providers-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map((provider) => (
                    <tr key={provider.id} onClick={() => handleProviderClick(provider)} role="button">
                      <td>
                        <div className="provider-name-cell">
                          <div className="provider-avatar" style={{ backgroundColor: getAvatarColor(provider.name) }}>
                            {provider.avatar}
                          </div>
                          <span className="provider-name">{provider.name}</span>
                        </div>
                      </td>
                      <td className="email-cell">{provider.email}</td>
                      <td className="phone-cell">{provider.phone}</td>
                      <td>
                        <span className="status-chip">{provider.status}</span>
                      </td>
                      <td className="date-cell">
                        <div className="date-info">
                          <span className="date">{provider.createdDate}</span>
                          <span className="days-ago">{provider.daysAgo}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;
