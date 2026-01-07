import React, { useState } from 'react';
import { PersonRecord, ReferralItem, ReferralSlipData } from '../types';

interface ReferralsProps {
  data: PersonRecord;
  onDataUpdate: (data: ReferralItem[]) => void;
  isEditing?: boolean;
}

const Referrals: React.FC<ReferralsProps> = ({ data, onDataUpdate, isEditing = false }) => {
  const [selectedReferral, setSelectedReferral] = useState<string>(data.referrals[0]?.id || '');
  const [referralSlipData, setReferralSlipData] = useState<ReferralSlipData>({
    responseId: '',
    referralId: '#undefined',
    organizationName: 'community development network',
    organizationSubtitle: 'Community Support Services',
    serviceDate: '',
    serviceType: 'N/A',
    clientName: '',
    clientEmail: '',
    serviceProvider: 'undefined',
    servicesOffered: 'Contact provider for service details',
    contactInformation: 'Contact details not available',
    serviceLocation: '',
    notes: 'Please contact the service provider for more information.'
  });

  const handleReferralSlipChange = (field: keyof ReferralSlipData, value: string) => {
    setReferralSlipData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="tab-content-section">
      <div className="referrals-layout">
        <div className="referrals-sidebar">
          <div className="referrals-list">
            <h4>Referrals</h4>
            <div className="referrals-scroll">
              {data.referrals.map((referral) => (
                <div
                  key={referral.id}
                  className={`referral-item ${selectedReferral === referral.id ? 'selected' : ''}`}
                  onClick={() => setSelectedReferral(referral.id)}
                >
                  <div className="referral-header">
                    <h5>{referral.title}</h5>
                    <span className="organization-badge">{referral.organization}</span>
                  </div>
                  <div className="referral-meta">
                    <div className="referral-date">Referred: {referral.referredDate}</div>
                    <div className="referral-date">Last Updated: {referral.lastUpdated}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="referral-form">
          <div className="referral-slip">
            <div className="referral-slip-header">
              <div className="organization-info">
                <h2>{referralSlipData.organizationName}</h2>
                <p className="organization-subtitle">{referralSlipData.organizationSubtitle}</p>
              </div>
              <div className="referral-slip-title">
                <h3>REFERRAL SLIP</h3>
                <p className="confidential-notice">STRICTLY PRIVATE AND CONFIDENTIAL</p>
              </div>
            </div>

            <div className="referral-slip-content">
              <div className="form-section">
                <div className="form-row">
                  <div className="form-group">
                    <label>RESPONSE ID:</label>
                    <input
                      type="text"
                      value={referralSlipData.responseId}
                      onChange={(e) => handleReferralSlipChange('responseId', e.target.value)}
                      placeholder="Enter response ID"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>REFERRAL ID:</label>
                    <input
                      type="text"
                      value={referralSlipData.referralId}
                      onChange={(e) => handleReferralSlipChange('referralId', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="section-row">
                  <div className="left-column">
                    <h4>SERVICE DETAILS</h4>
                    <div className="form-group">
                      <label>Date:</label>
                      <input
                        type="date"
                        value={referralSlipData.serviceDate}
                        onChange={(e) => handleReferralSlipChange('serviceDate', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Type:</label>
                      <input
                        type="text"
                        value={referralSlipData.serviceType}
                        onChange={(e) => handleReferralSlipChange('serviceType', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="right-column">
                    <h4>CLIENT DETAILS</h4>
                    <div className="form-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        value={referralSlipData.clientName}
                        onChange={(e) => handleReferralSlipChange('clientName', e.target.value)}
                        placeholder="Client name"
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        value={referralSlipData.clientEmail}
                        onChange={(e) => handleReferralSlipChange('clientEmail', e.target.value)}
                        placeholder="Client email"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="service-provider-section">
                  <div className="provider-header">
                    <div className="provider-logo">
                      <div className="no-logo-placeholder">No Logo</div>
                    </div>
                    <div className="provider-info">
                      <h4>Service Provider</h4>
                      <input
                        type="text"
                        value={referralSlipData.serviceProvider}
                        onChange={(e) => handleReferralSlipChange('serviceProvider', e.target.value)}
                        placeholder="Service provider name"
                        className="provider-name-input"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="section-row">
                  <div className="left-column">
                    <h4>SERVICES OFFERED</h4>
                    <textarea
                      value={referralSlipData.servicesOffered}
                      onChange={(e) => handleReferralSlipChange('servicesOffered', e.target.value)}
                      rows={3}
                      placeholder="Contact provider for service details"
                      disabled={!isEditing}
                    />

                    <h4>CONTACT INFORMATION</h4>
                    <textarea
                      value={referralSlipData.contactInformation}
                      onChange={(e) => handleReferralSlipChange('contactInformation', e.target.value)}
                      rows={2}
                      placeholder="Contact details not available"
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="right-column">
                    <h4>SERVICE LOCATION</h4>
                    <textarea
                      value={referralSlipData.serviceLocation}
                      onChange={(e) => handleReferralSlipChange('serviceLocation', e.target.value)}
                      rows={3}
                      placeholder="Service location details"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>NOTES</h4>
                <textarea
                  value={referralSlipData.notes}
                  onChange={(e) => handleReferralSlipChange('notes', e.target.value)}
                  rows={3}
                  className="full-width"
                  placeholder="Please contact the service provider for more information."
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
