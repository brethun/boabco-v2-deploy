import React, { useState } from 'react';
import './ReferralDetail.css';

interface ReferralData {
  id: string;
  title: string;
  assignee: string;
  status: string;
  response?: string;
  referred?: string;
  lastUpdated?: string;
  contactDetails?: {
    name: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    linkedIn?: string;
    address?: {
      street: string;
      suburb: string;
      state: string;
      postcode: string;
    };
    notes?: string;
  };
  linkedReferrals?: Array<{
    id: string;
    title: string;
    status: string;
    date: string;
    outcome: string;
  }>;
  history?: Array<{
    id: string;
    date: string;
    time: string;
    action: string;
    details: string;
    performedBy: string;
    type: 'status_change' | 'communication' | 'document' | 'meeting' | 'note';
  }>;
}

interface ReferralDetailProps {
  referral: ReferralData;
  onBack: () => void;
  onSave: (updatedReferral: ReferralData) => void;
}

type TabType = 'contact' | 'referrals' | 'history';

const ReferralDetail: React.FC<ReferralDetailProps> = ({ referral, onBack, onSave }) => {
  const [activeTab, setActiveTab] = useState<TabType>('contact');
  const [isEditing, setIsEditing] = useState(false);
  const [editedReferral, setEditedReferral] = useState<ReferralData>(referral);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending Approval':
        return '#4A90E2';
      case 'In Progress':
        return '#7ED321';
      case 'Complete':
        return '#50E3C2';
      case 'Rejected':
        return '#D0021B';
      default:
        return '#9B9B9B';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'status_change':
        return '🔄';
      case 'communication':
        return '💬';
      case 'document':
        return '📄';
      case 'meeting':
        return '🤝';
      case 'note':
        return '📝';
      default:
        return '📌';
    }
  };

  const handleSave = () => {
    onSave(editedReferral);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedReferral(referral);
    setIsEditing(false);
  };

  const tabs = [
    { id: 'contact', label: 'Contact Details' },
    { id: 'referrals', label: 'Referrals' },
    { id: 'history', label: 'History' }
  ];

  const renderContactDetails = () => (
    <div className="detail-section">
      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={editedReferral.contactDetails?.name || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { ...prev.contactDetails!, name: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            value={editedReferral.contactDetails?.position || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { ...prev.contactDetails!, position: e.target.value }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={editedReferral.contactDetails?.email || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { ...prev.contactDetails!, email: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={editedReferral.contactDetails?.phone || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { ...prev.contactDetails!, phone: e.target.value }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            value={editedReferral.contactDetails?.company || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { ...prev.contactDetails!, company: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label>LinkedIn Profile</label>
          <input
            type="url"
            value={editedReferral.contactDetails?.linkedIn || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { ...prev.contactDetails!, linkedIn: e.target.value }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Street Address</label>
          <input
            type="text"
            value={editedReferral.contactDetails?.address?.street || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { 
                ...prev.contactDetails!, 
                address: { ...prev.contactDetails!.address!, street: e.target.value }
              }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Suburb</label>
          <input
            type="text"
            value={editedReferral.contactDetails?.address?.suburb || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { 
                ...prev.contactDetails!, 
                address: { ...prev.contactDetails!.address!, suburb: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>State</label>
          <select
            value={editedReferral.contactDetails?.address?.state || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { 
                ...prev.contactDetails!, 
                address: { ...prev.contactDetails!.address!, state: e.target.value }
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
        <div className="form-group">
          <label>Postcode</label>
          <input
            type="text"
            value={editedReferral.contactDetails?.address?.postcode || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { 
                ...prev.contactDetails!, 
                address: { ...prev.contactDetails!.address!, postcode: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Notes</label>
          <textarea
            value={editedReferral.contactDetails?.notes || ''}
            disabled={!isEditing}
            rows={4}
            onChange={(e) => setEditedReferral(prev => ({
              ...prev,
              contactDetails: { ...prev.contactDetails!, notes: e.target.value }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const renderReferrals = () => (
    <div className="detail-section">
      <div className="active-referral">
        <h4>Active Referral</h4>
        <div className="referral-card-detail">
          <div className="referral-header">
            <h5>{referral.title}</h5>
            <span 
              className="status-badge" 
              style={{ backgroundColor: getStatusColor(referral.status) }}
            >
              {referral.status}
            </span>
          </div>
          <div className="referral-info">
            <div className="info-item">
              <span className="info-label">Assignee:</span>
              <span className="info-value">{referral.assignee}</span>
            </div>
            {referral.response && (
              <div className="info-item">
                <span className="info-label">Response Date:</span>
                <span className="info-value">{referral.response}</span>
              </div>
            )}
            {referral.referred && (
              <div className="info-item">
                <span className="info-label">Referred Date:</span>
                <span className="info-value">{referral.referred}</span>
              </div>
            )}
            {referral.lastUpdated && (
              <div className="info-item">
                <span className="info-label">Last Updated:</span>
                <span className="info-value">{referral.lastUpdated}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {referral.linkedReferrals && referral.linkedReferrals.length > 0 && (
        <div className="linked-referrals">
          <h4>Other Referrals for this Contact</h4>
          <div className="referrals-table-container">
            <table className="referrals-table">
              <thead>
                <tr>
                  <th>Referral ID</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Outcome</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {referral.linkedReferrals.map((linkedRef) => (
                  <tr key={linkedRef.id}>
                    <td>{linkedRef.title}</td>
                    <td>
                      <span 
                        className="status-badge small" 
                        style={{ backgroundColor: getStatusColor(linkedRef.status) }}
                      >
                        {linkedRef.status}
                      </span>
                    </td>
                    <td>{linkedRef.date}</td>
                    <td>{linkedRef.outcome}</td>
                    <td>
                      <button className="table-link" type="button">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );

  const renderHistory = () => (
    <div className="detail-section">
      <div className="history-timeline">
        {referral.history && referral.history.length > 0 ? (
          referral.history.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-icon">{getActivityIcon(item.type)}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h5 className="timeline-action">{item.action}</h5>
                  <span className="timeline-date">{item.date} at {item.time}</span>
                </div>
                <p className="timeline-details">{item.details}</p>
                <span className="timeline-performer">by {item.performedBy}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-history">
            <p>No activity history available for this referral.</p>
          </div>
        )}
      </div>
    </div>
  );

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? tabs[0].label;

  return (
    <div className="page referral-detail-page">
      <header className="page-header referral-detail-header has-tabs">
        <div className="stack">
          <button className="link-button" type="button" onClick={onBack}>
            ← Back to referrals
          </button>
          <h1 className="page-title">{referral.title}</h1>
          <p className="page-subtitle">Contact: {referral.contactDetails?.name || 'Unknown'} • Status: <span className="status-chip" style={{ color: getStatusColor(referral.status) }}>{referral.status}</span></p>
        </div>
        <nav className="page-tabs" aria-label="Referral sections">
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
            {activeTab === 'contact' && renderContactDetails()}
            {activeTab === 'referrals' && renderReferrals()}
            {activeTab === 'history' && renderHistory()}
          </div>
        </div>
      </div>

      <div className="page-actions-bottom">
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
    </div>
  );
};

export default ReferralDetail;
