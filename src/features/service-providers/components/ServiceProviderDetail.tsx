import React, { useState } from 'react';
import './ServiceProviderDetail.css';

interface ServiceProviderData {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  createdDate: string;
  daysAgo: string;
  avatar: string;
  details?: {
    organizationType: string;
    abn: string;
    acn: string;
    registrationNumber: string;
    website: string;
    description: string;
    servicesOffered: string[];
    specializations: string[];
    address: {
      street: string;
      suburb: string;
      state: string;
      postcode: string;
      country: string;
    };
    contactPerson: {
      firstName: string;
      lastName: string;
      position: string;
      email: string;
      phone: string;
      mobile: string;
    };
    operationalDetails: {
      businessHours: string;
      capacity: string;
      serviceAreas: string[];
      languages: string[];
      accreditations: string[];
      openHours: {
        monday: { open: string; close: string; closed: boolean };
        tuesday: { open: string; close: string; closed: boolean };
        wednesday: { open: string; close: string; closed: boolean };
        thursday: { open: string; close: string; closed: boolean };
        friday: { open: string; close: string; closed: boolean };
        saturday: { open: string; close: string; closed: boolean };
        sunday: { open: string; close: string; closed: boolean };
      };
    };
    financialDetails: {
      feeStructure: string;
      paymentTerms: string;
      gstRegistered: boolean;
      insuranceDetails: string;
    };
    notes: string;
  };
}

interface ServiceProviderDetailProps {
  provider: ServiceProviderData;
  onBack: () => void;
  onSave: (updatedProvider: ServiceProviderData) => void;
}

type TabType = 'basic' | 'contact' | 'services' | 'operational' | 'financial';

const ServiceProviderDetail: React.FC<ServiceProviderDetailProps> = ({ provider, onBack, onSave }) => {
  const [activeTab, setActiveTab] = useState<TabType>('basic');
  const [isEditing, setIsEditing] = useState(false);
  
  // Initialize provider with default details if they don't exist
  const initializeProvider = (p: ServiceProviderData): ServiceProviderData => {
    return {
      ...p,
      details: p.details || {
        organizationType: '',
        abn: '',
        acn: '',
        registrationNumber: '',
        website: '',
        description: '',
        servicesOffered: [],
        specializations: [],
        address: {
          street: '',
          suburb: '',
          state: '',
          postcode: '',
          country: 'Australia'
        },
        contactPerson: {
          firstName: '',
          lastName: '',
          position: '',
          email: p.email || '',
          phone: p.phone || '',
          mobile: ''
        },
        operationalDetails: {
          businessHours: '',
          capacity: '',
          serviceAreas: [],
          languages: [],
          accreditations: [],
          openHours: {
            monday: { open: '09:00', close: '17:00', closed: false },
            tuesday: { open: '09:00', close: '17:00', closed: false },
            wednesday: { open: '09:00', close: '17:00', closed: false },
            thursday: { open: '09:00', close: '17:00', closed: false },
            friday: { open: '09:00', close: '17:00', closed: false },
            saturday: { open: '09:00', close: '17:00', closed: true },
            sunday: { open: '14:00', close: '16:00', closed: false }
          }
        },
        financialDetails: {
          feeStructure: '',
          paymentTerms: '',
          gstRegistered: false,
          insuranceDetails: ''
        },
        notes: ''
      }
    };
  };

  const [editedProvider, setEditedProvider] = useState<ServiceProviderData>(initializeProvider(provider));

  const getAvatarColor = (name: string) => {
    const colors = [
      '#8E44AD', '#3498DB', '#E67E22', '#E74C3C', '#2ECC71',
      '#9B59B6', '#34495E', '#F39C12', '#27AE60', '#2980B9'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleSave = () => {
    onSave(editedProvider);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProvider(provider);
    setIsEditing(false);
  };

  const tabs = [
    { id: 'basic', label: 'Basic Information' },
    { id: 'contact', label: 'Contact Details' },
    { id: 'services', label: 'Services & Specializations' },
    { id: 'operational', label: 'Operational Details' },
    { id: 'financial', label: 'Financial Information' }
  ];

  const renderBasicInformation = () => (
    <div className="detail-section">
      <div className="form-row">
        <div className="form-group">
          <label className="required">Organization Name</label>
          <input
            type="text"
            value={editedProvider.name || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label>Organization Type</label>
          <select
            value={editedProvider.details?.organizationType || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, organizationType: e.target.value }
            }))}
          >
            <option value="">Select Type</option>
            <option value="Government Agency">Government Agency</option>
            <option value="Non-Profit Organization">Non-Profit Organization</option>
            <option value="Community Group">Community Group</option>
            <option value="Private Company">Private Company</option>
            <option value="Educational Institution">Educational Institution</option>
            <option value="Healthcare Provider">Healthcare Provider</option>
            <option value="Indigenous Corporation">Indigenous Corporation</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>ABN (Australian Business Number)</label>
          <input
            type="text"
            value={editedProvider.details?.abn || ''}
            disabled={!isEditing}
            placeholder="11 222 333 444"
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, abn: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label>ACN (Australian Company Number)</label>
          <input
            type="text"
            value={editedProvider.details?.acn || ''}
            disabled={!isEditing}
            placeholder="123 456 789"
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, acn: e.target.value }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            value={editedProvider.details?.registrationNumber || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, registrationNumber: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="url"
            value={editedProvider.details?.website || ''}
            disabled={!isEditing}
            placeholder="https://www.example.com"
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, website: e.target.value }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Organization Description</label>
          <textarea
            value={editedProvider.details?.description || ''}
            disabled={!isEditing}
            rows={4}
            placeholder="Describe the organization's mission, vision, and primary activities..."
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, description: e.target.value }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const renderContactDetails = () => (
    <div className="detail-section">
      <h4>Primary Contact Person</h4>
      <div className="form-row">
        <div className="form-group">
          <label className="required">First Name</label>
          <input
            type="text"
            value={editedProvider.details?.contactPerson?.firstName || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, firstName: e.target.value }
              }
            }))}
          />
        </div>
        <div className="form-group">
          <label className="required">Last Name</label>
          <input
            type="text"
            value={editedProvider.details?.contactPerson?.lastName || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, lastName: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Position/Title</label>
          <input
            type="text"
            value={editedProvider.details?.contactPerson?.position || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, position: e.target.value }
              }
            }))}
          />
        </div>
        <div className="form-group">
          <label className="required">Email Address</label>
          <input
            type="email"
            value={editedProvider.details?.contactPerson?.email || editedProvider.email}
            disabled={!isEditing}
            onChange={(e) => {
              setEditedProvider(prev => ({
                ...prev,
                email: e.target.value,
                details: {
                  ...prev.details!,
                  contactPerson: { ...prev.details!.contactPerson!, email: e.target.value }
                }
              }));
            }}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={editedProvider.details?.contactPerson?.phone || editedProvider.phone}
            disabled={!isEditing}
            onChange={(e) => {
              setEditedProvider(prev => ({
                ...prev,
                phone: e.target.value,
                details: {
                  ...prev.details!,
                  contactPerson: { ...prev.details!.contactPerson!, phone: e.target.value }
                }
              }));
            }}
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            value={editedProvider.details?.contactPerson?.mobile || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, mobile: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <h4>Address Information</h4>
      <div className="form-row">
        <div className="form-group full-width">
          <label className="required">Street Address</label>
          <input
            type="text"
            value={editedProvider.details?.address?.street || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                address: { ...prev.details!.address!, street: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="required">Suburb/City</label>
          <input
            type="text"
            value={editedProvider.details?.address?.suburb || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                address: { ...prev.details!.address!, suburb: e.target.value }
              }
            }))}
          />
        </div>
        <div className="form-group">
          <label className="required">State/Territory</label>
          <select
            value={editedProvider.details?.address?.state || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                address: { ...prev.details!.address!, state: e.target.value }
              }
            }))}
          >
            <option value="">Select State</option>
            <option value="NSW">NSW</option>
            <option value="VIC">VIC</option>
            <option value="QLD">QLD</option>
            <option value="WA">WA</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="ACT">ACT</option>
            <option value="NT">NT</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="required">Postcode</label>
          <input
            type="text"
            value={editedProvider.details?.address?.postcode || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                address: { ...prev.details!.address!, postcode: e.target.value }
              }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            value={editedProvider.details?.address?.country || 'Australia'}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                address: { ...prev.details!.address!, country: e.target.value }
              }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="detail-section">
      <div className="form-row">
        <div className="form-group full-width">
          <label>Services Offered</label>
          <textarea
            value={editedProvider.details?.servicesOffered?.join('\n') || ''}
            disabled={!isEditing}
            rows={4}
            placeholder="List services offered (one per line)"
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, servicesOffered: e.target.value.split('\n').filter(s => s.trim()) }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Specializations</label>
          <textarea
            value={editedProvider.details?.specializations?.join('\n') || ''}
            disabled={!isEditing}
            rows={3}
            placeholder="List areas of specialization (one per line)"
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, specializations: e.target.value.split('\n').filter(s => s.trim()) }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const renderOperational = () => {
    const days = [
      { key: 'monday', label: 'Monday' },
      { key: 'tuesday', label: 'Tuesday' },
      { key: 'wednesday', label: 'Wednesday' },
      { key: 'thursday', label: 'Thursday' },
      { key: 'friday', label: 'Friday' },
      { key: 'saturday', label: 'Saturday' },
      { key: 'sunday', label: 'Sunday' }
    ];

    const updateOpenHours = (day: string, field: 'open' | 'close' | 'closed', value: string | boolean) => {
      setEditedProvider(prev => {
        const currentOpenHours = prev.details?.operationalDetails?.openHours;
        const currentDayData = currentOpenHours?.[day as keyof typeof currentOpenHours];
        
        return {
          ...prev,
          details: {
            ...prev.details!,
            operationalDetails: {
              ...prev.details!.operationalDetails!,
              openHours: {
                ...prev.details!.operationalDetails!.openHours!,
                [day]: {
                  open: currentDayData?.open || '09:00',
                  close: currentDayData?.close || '17:00',
                  closed: currentDayData?.closed || false,
                  ...currentDayData,
                  [field]: value
                }
              }
            }
          }
        };
      });
    };

    return (
      <div className="detail-section">
        <div className="form-row">
          <div className="form-group">
            <label>Service Capacity</label>
            <input
              type="text"
              value={editedProvider.details?.operationalDetails?.capacity || ''}
              disabled={!isEditing}
              placeholder="e.g., 50 clients per month"
              onChange={(e) => setEditedProvider(prev => ({
                ...prev,
                details: {
                  ...prev.details!,
                  operationalDetails: { ...prev.details!.operationalDetails!, capacity: e.target.value }
                }
              }))}
            />
          </div>
        </div>

        <h4>Open Hours</h4>
        <div className="open-hours-section">
          {days.map(day => {
            const dayData = editedProvider.details?.operationalDetails?.openHours?.[day.key as keyof typeof editedProvider.details.operationalDetails.openHours];
            return (
              <div key={day.key} className="open-hours-row">
                <div className="day-label">
                  <label>{day.label}</label>
                </div>
                <div className="hours-inputs">
                  <input
                    type="time"
                    value={dayData?.open || '09:00'}
                    disabled={!isEditing || dayData?.closed}
                    onChange={(e) => updateOpenHours(day.key, 'open', e.target.value)}
                  />
                  <span className="time-separator">-</span>
                  <input
                    type="time"
                    value={dayData?.close || '17:00'}
                    disabled={!isEditing || dayData?.closed}
                    onChange={(e) => updateOpenHours(day.key, 'close', e.target.value)}
                  />
                </div>
                <div className="closed-checkbox">
                  <label>
                    <input
                      type="checkbox"
                      checked={dayData?.closed || false}
                      disabled={!isEditing}
                      onChange={(e) => updateOpenHours(day.key, 'closed', e.target.checked)}
                    />
                    Closed
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Service Areas</label>
            <textarea
              value={editedProvider.details?.operationalDetails?.serviceAreas?.join('\n') || ''}
              disabled={!isEditing}
              rows={3}
              placeholder="List geographic areas served (one per line)"
              onChange={(e) => setEditedProvider(prev => ({
                ...prev,
                details: {
                  ...prev.details!,
                  operationalDetails: {
                    ...prev.details!.operationalDetails!,
                    serviceAreas: e.target.value.split('\n').filter(s => s.trim())
                  }
                }
              }))}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Languages Supported</label>
            <textarea
              value={editedProvider.details?.operationalDetails?.languages?.join('\n') || ''}
              disabled={!isEditing}
              rows={3}
              placeholder="List languages (one per line)"
              onChange={(e) => setEditedProvider(prev => ({
                ...prev,
                details: {
                  ...prev.details!,
                  operationalDetails: {
                    ...prev.details!.operationalDetails!,
                    languages: e.target.value.split('\n').filter(s => s.trim())
                  }
                }
              }))}
            />
          </div>
          <div className="form-group">
            <label>Accreditations/Certifications</label>
            <textarea
              value={editedProvider.details?.operationalDetails?.accreditations?.join('\n') || ''}
              disabled={!isEditing}
              rows={3}
              placeholder="List accreditations (one per line)"
              onChange={(e) => setEditedProvider(prev => ({
                ...prev,
                details: {
                  ...prev.details!,
                  operationalDetails: {
                    ...prev.details!.operationalDetails!,
                    accreditations: e.target.value.split('\n').filter(s => s.trim())
                  }
                }
              }))}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderFinancial = () => (
    <div className="detail-section">
      <div className="form-row">
        <div className="form-group">
          <label>Fee Structure</label>
          <select
            value={editedProvider.details?.financialDetails?.feeStructure || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                financialDetails: { ...prev.details!.financialDetails!, feeStructure: e.target.value }
              }
            }))}
          >
            <option value="">Select Fee Structure</option>
            <option value="Hourly Rate">Hourly Rate</option>
            <option value="Fixed Fee">Fixed Fee</option>
            <option value="Performance Based">Performance Based</option>
            <option value="Retainer">Retainer</option>
            <option value="No Fee/Volunteer">No Fee/Volunteer</option>
            <option value="Government Funded">Government Funded</option>
          </select>
        </div>
        <div className="form-group">
          <label>Payment Terms</label>
          <input
            type="text"
            value={editedProvider.details?.financialDetails?.paymentTerms || ''}
            disabled={!isEditing}
            placeholder="e.g., Net 30 days"
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                financialDetails: { ...prev.details!.financialDetails!, paymentTerms: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>GST Registration</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gstRegistered"
                checked={editedProvider.details?.financialDetails?.gstRegistered === true}
                disabled={!isEditing}
                onChange={() => setEditedProvider(prev => ({
                  ...prev,
                  details: {
                    ...prev.details!,
                    financialDetails: { ...prev.details!.financialDetails!, gstRegistered: true }
                  }
                }))}
              />
              GST Registered
            </label>
            <label>
              <input
                type="radio"
                name="gstRegistered"
                checked={editedProvider.details?.financialDetails?.gstRegistered === false}
                disabled={!isEditing}
                onChange={() => setEditedProvider(prev => ({
                  ...prev,
                  details: {
                    ...prev.details!,
                    financialDetails: { ...prev.details!.financialDetails!, gstRegistered: false }
                  }
                }))}
              />
              Not GST Registered
            </label>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Insurance Details</label>
          <textarea
            value={editedProvider.details?.financialDetails?.insuranceDetails || ''}
            disabled={!isEditing}
            rows={3}
            placeholder="Professional indemnity, public liability, etc."
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                financialDetails: { ...prev.details!.financialDetails!, insuranceDetails: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Additional Notes</label>
          <textarea
            value={editedProvider.details?.notes || ''}
            disabled={!isEditing}
            rows={4}
            placeholder="Any additional information about this service provider..."
            onChange={(e) => setEditedProvider(prev => ({
              ...prev,
              details: { ...prev.details!, notes: e.target.value }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? tabs[0].label;

  return (
    <div className="page provider-detail-page">
      <header className="page-header provider-detail-header has-tabs">
        <div className="stack">
          <button className="link-button" type="button" onClick={onBack}>
            ← Back to service providers
          </button>
          <div className="provider-identity">
            <div className="provider-avatar-large" style={{ backgroundColor: getAvatarColor(provider.name) }}>
              {provider.avatar}
            </div>
            <div className="provider-info">
              <h1 className="page-title">{provider.name}</h1>
              <p className="page-subtitle">Status: <span className="status-chip">{provider.status}</span> • Created {provider.createdDate} {provider.daysAgo}</p>
            </div>
          </div>
        </div>
        <div className="page-actions">
          {isEditing ? (
            <>
              <button className="btn btn-secondary" type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn btn-primary" type="button" onClick={handleSave}>
                Save changes
              </button>
            </>
          ) : (
            <button className="btn btn-primary" type="button" onClick={() => setIsEditing(true)}>
              Edit details
            </button>
          )}
        </div>
        <nav className="page-tabs" aria-label="Provider sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? 'is-active' : ''}
              onClick={() => setActiveTab(tab.id as TabType)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="surface">
        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">{activeTabLabel}</h2>
          </header>
          <div className="section-divider__body">
            {activeTab === 'basic' && renderBasicInformation()}
            {activeTab === 'contact' && renderContactDetails()}
            {activeTab === 'services' && renderServices()}
            {activeTab === 'operational' && renderOperational()}
            {activeTab === 'financial' && renderFinancial()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDetail;
