import React, { useState } from 'react';
import { JobData, JobTabSection } from '../types';
import CandidateMatching from './CandidateMatching';
import './JobDetail.css';


interface JobDetailProps {
  job: JobData;
  onBack: () => void;
  onSave: (updatedJob: JobData) => void;
}

type TabType = JobTabSection;

const JobDetail: React.FC<JobDetailProps> = ({ job, onBack, onSave }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isEditing, setIsEditing] = useState(false);

  // Initialize job with default details if they don't exist
  const initializeJob = (j: JobData): JobData => {
    return {
      ...j,
      details: j.details || {
        description: '',
        requirements: [],
        responsibilities: [],
        benefits: [],
        applicationDeadline: '',
        contactPerson: {
          name: '',
          position: '',
          email: '',
          phone: ''
        },
        workingHours: '',
        startDate: '',
        contractLength: '',
        selectionCriteria: ''
      }
    };
  };

  const [editedJob, setEditedJob] = useState<JobData>(initializeJob(job));

  const getAvatarColor = (title: string) => {
    const colors = [
      '#8E44AD', '#3498DB', '#E67E22', '#E74C3C', '#2ECC71',
      '#9B59B6', '#34495E', '#F39C12', '#27AE60', '#2980B9'
    ];
    const index = title.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'status-open';
      case 'In Progress':
        return 'status-in-progress';
      case 'Filled':
        return 'status-filled';
      case 'Closed':
        return 'status-closed';
      default:
        return '';
    }
  };

  const handleSave = () => {
    onSave(editedJob);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedJob(job);
    setIsEditing(false);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'requirements', label: 'Requirements & Responsibilities' },
    { id: 'applications', label: 'Applications' },
    { id: 'candidates', label: 'Match Candidates' },
    { id: 'details', label: 'Additional Details' }
  ];

  const renderOverview = () => (
    <div className="detail-section">
      <div className="form-row">
        <div className="form-group">
          <label className="required">Job Title</label>
          <input
            type="text"
            value={editedJob.title || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({ ...prev, title: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label className="required">Organization</label>
          <input
            type="text"
            value={editedJob.business?.name || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({ 
              ...prev, 
              business: { 
                ...prev.business!, 
                name: e.target.value 
              } 
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="required">Location</label>
          <input
            type="text"
            value={editedJob.location || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({ ...prev, location: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label className="required">Job Type</label>
          <select
            value={editedJob.jobType || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({ ...prev, jobType: e.target.value as JobData['jobType'] }))}
          >
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Casual">Casual</option>
            <option value="Contract">Contract</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="required">Salary Range</label>
          <input
            type="text"
            value={editedJob.salary || ''}
            disabled={!isEditing}
            placeholder="e.g., $65,000 - $75,000"
            onChange={(e) => setEditedJob(prev => ({ ...prev, salary: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label className="required">Status</label>
          <select
            value={editedJob.status || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({ ...prev, status: e.target.value as JobData['status'] }))}
          >
            <option value="">Select Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Filled">Filled</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label className="required">Job Description</label>
          <textarea
            value={editedJob.details?.description || ''}
            disabled={!isEditing}
            rows={6}
            placeholder="Describe the role, key objectives, and what the successful candidate will be doing..."
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { ...prev.details!, description: e.target.value }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Working Hours</label>
          <input
            type="text"
            value={editedJob.details?.workingHours || ''}
            disabled={!isEditing}
            placeholder="e.g., Monday to Friday, 9:00 AM - 5:00 PM"
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { ...prev.details!, workingHours: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Contract Length</label>
          <input
            type="text"
            value={editedJob.details?.contractLength || ''}
            disabled={!isEditing}
            placeholder="e.g., Ongoing, 12 months"
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { ...prev.details!, contractLength: e.target.value }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="text"
            value={editedJob.details?.startDate || ''}
            disabled={!isEditing}
            placeholder="e.g., September 2025"
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { ...prev.details!, startDate: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label className="required">Application Deadline</label>
          <input
            type="text"
            value={editedJob.details?.applicationDeadline || ''}
            disabled={!isEditing}
            placeholder="e.g., Aug 15, 2025"
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { ...prev.details!, applicationDeadline: e.target.value }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const renderRequirements = () => (
    <div className="detail-section">
      <div className="form-row">
        <div className="form-group full-width">
          <label>Requirements</label>
          <textarea
            value={editedJob.details?.requirements?.map(req => req.description).join('\n') || ''}
            disabled={!isEditing}
            rows={6}
            placeholder="List job requirements (one per line)"
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { 
                ...prev.details!, 
                requirements: e.target.value.split('\n').filter(s => s.trim()).map((desc, idx) => ({
                  id: `req-${idx}`,
                  type: 'essential' as const,
                  description: desc
                }))
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Key Responsibilities</label>
          <textarea
            value={editedJob.details?.responsibilities?.map(resp => resp.description).join('\n') || ''}
            disabled={!isEditing}
            rows={6}
            placeholder="List key responsibilities (one per line)"
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { 
                ...prev.details!, 
                responsibilities: e.target.value.split('\n').filter(s => s.trim()).map((desc, idx) => ({
                  id: `resp-${idx}`,
                  description: desc,
                  priority: 'medium' as const
                }))
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Benefits</label>
          <textarea
            value={editedJob.details?.benefits?.map(benefit => benefit.description).join('\n') || ''}
            disabled={!isEditing}
            rows={5}
            placeholder="List benefits and perks (one per line)"
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { 
                ...prev.details!, 
                benefits: e.target.value.split('\n').filter(s => s.trim()).map((desc, idx) => ({
                  id: `benefit-${idx}`,
                  description: desc,
                  category: 'other' as const
                }))
              }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="detail-section">
      <div className="applications-summary">
        <div className="applications-stat">
          <span className="stat-number">{editedJob.applicationsCount || 0}</span>
          <span className="stat-label">Total Applications</span>
        </div>
      </div>

      <div className="empty-state">
        <h3>Application Management</h3>
        <p>Application tracking and management features coming soon.</p>
      </div>
    </div>
  );

  const renderDetails = () => (
    <div className="detail-section">
      <h4>Contact Person</h4>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={editedJob.details?.contactPerson?.name || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, name: e.target.value }
              }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            value={editedJob.details?.contactPerson?.position || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, position: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={editedJob.details?.contactPerson?.email || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, email: e.target.value }
              }
            }))}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={editedJob.details?.contactPerson?.phone || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: {
                ...prev.details!,
                contactPerson: { ...prev.details!.contactPerson!, phone: e.target.value }
              }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Selection Criteria</label>
          <textarea
            value={editedJob.details?.selectionCriteria || ''}
            disabled={!isEditing}
            rows={4}
            placeholder="Additional information about selection criteria or how to apply..."
            onChange={(e) => setEditedJob(prev => ({
              ...prev,
              details: { ...prev.details!, selectionCriteria: e.target.value }
            }))}
          />
        </div>
      </div>
    </div>
  );

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? tabs[0].label;

  return (
    <div className="page job-detail-page">
      <header className="page-header job-detail-header has-tabs">
        <div className="stack">
          <button className="link-button" type="button" onClick={onBack}>
            ← Back to jobs
          </button>
          <div className="job-identity">
            <div className="job-avatar-large" style={{ backgroundColor: getAvatarColor(job.title) }}>
              {job.avatar}
            </div>
            <div className="job-info">
              <h1 className="page-title">{job.title}</h1>
              <p className="page-subtitle">
                {job.business?.name} • {job.location} • <span className={`status-chip ${getStatusColor(job.status)}`}>{job.status}</span>
              </p>
              <p className="page-meta">Posted {job.postedDate} {job.daysAgo}</p>
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
              Edit job
            </button>
          )}
        </div>
        <nav className="page-tabs" aria-label="Job sections">
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
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'requirements' && renderRequirements()}
            {activeTab === 'applications' && renderApplications()}
            {activeTab === 'candidates' && <CandidateMatching job={editedJob} onJobUpdate={setEditedJob} isEditing={isEditing} />}
            {activeTab === 'details' && renderDetails()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
