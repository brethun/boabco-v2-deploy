import React, { useState } from 'react';
import './Campaigns.css';

const Campaigns: React.FC = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Emergency Relief Referral 2025',
      status: 'Active',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      targetAudience: 'Kimberley Communities',
      budget: '$15,000',
      responses: 234
    },
    {
      id: 2,
      name: 'Baseline Community Survey 2025',
      status: 'Planning',
      startDate: '2025-08-15',
      endDate: '2025-10-15',
      targetAudience: 'Kimberley Communities',
      budget: '$25,000',
      responses: 0
    },
    {
      id: 3,
      name: 'Emergency Relief Referral 2024',
      status: 'Completed',
      startDate: '2024-03-01',
      endDate: '2024-05-31',
      targetAudience: 'Kimberley Communities',
      budget: '$20,000',
      responses: 156
    },
    {
      id: 4,
      name: 'Youth App',
      status: 'Active',
      startDate: '2025-01-01',
      endDate: '2025-04-30',
      targetAudience: 'Kimberley Communities',
      budget: '$18,000',
      responses: 287
    },
    {
      id: 5,
      name: 'Emergency Relief App',
      status: 'Active',
      startDate: '2025-03-01',
      endDate: '2025-07-31',
      targetAudience: 'Kimberley Communities',
      budget: '$22,000',
      responses: 342
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return '#4CAF50';
      case 'Planning':
        return '#FF9800';
      case 'Completed':
        return '#2196F3';
      default:
        return '#9E9E9E';
    }
  };

  return (
    <div className="page campaigns-page">
      <header className="page-header">
        <div className="stack">
          <h1 className="page-title">Campaigns</h1>
          <p className="page-subtitle">Monitor outreach performance and keep recruitment initiatives aligned.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary">New campaign</button>
        </div>
      </header>

      <div className="page-sections">
        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Snapshot</h2>
          </header>
          <div className="section-divider__body">
            <div className="metric-grid">
              <div className="metric-card">
                <p className="metric-label">Active campaigns</p>
                <p className="metric-value">1</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Total responses</p>
                <p className="metric-value">390</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Conversion rate</p>
                <p className="metric-value">23%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Campaign list</h2>
            <p className="section-divider__meta">{campaigns.length} active records</p>
          </header>
          <div className="section-divider__body">
            <div className="table-shell campaigns-table-shell">
              <table className="campaigns-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th>Target audience</th>
                    <th>Budget</th>
                    <th>Responses</th>
                    <th aria-label="row actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id}>
                      <td className="campaign-name">{campaign.name}</td>
                      <td>
                        <span className="status-badge" style={{ backgroundColor: getStatusColor(campaign.status) }}>
                          {campaign.status}
                        </span>
                      </td>
                      <td>{campaign.startDate} - {campaign.endDate}</td>
                      <td>{campaign.targetAudience}</td>
                      <td>{campaign.budget}</td>
                      <td>{campaign.responses}</td>
                      <td>
                        <div className="table-actions">
                          <button className="action-link" type="button">View</button>
                          <button className="action-link" type="button">Edit</button>
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

export default Campaigns;
