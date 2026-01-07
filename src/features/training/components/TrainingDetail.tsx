import React, { useState } from 'react';
import { TrainingData, TrainingTabSection } from '../types';
import ParticipantMatcher from './ParticipantMatcher';
import './TrainingDetail.css';

interface TrainingDetailProps {
  training: TrainingData;
  onBack: () => void;
  onSave: (updatedTraining: TrainingData) => void;
}

type TabType = TrainingTabSection;

const TrainingDetail: React.FC<TrainingDetailProps> = ({ training, onBack, onSave }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTraining, setEditedTraining] = useState<TrainingData>(training);

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
      case 'Published':
        return 'status-open';
      case 'Draft':
        return 'status-draft';
      case 'Full':
        return 'status-filled';
      case 'Cancelled':
        return 'status-cancelled';
      case 'Archived':
        return 'status-archived';
      default:
        return '';
    }
  };

  const handleSave = () => {
    onSave(editedTraining);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTraining(training);
    setIsEditing(false);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'content', label: 'Content & Modules' },
    { id: 'schedule', label: 'Schedule & Delivery' },
    { id: 'participants', label: 'Current Participants' },
    { id: 'match-participants', label: 'Match Participants' },
    { id: 'outcomes', label: 'Outcomes & Assessment' }
  ];

  const renderOverview = () => (
    <div className="detail-section">
      <div className="form-row">
        <div className="form-group">
          <label className="required">Training Title</label>
          <input
            type="text"
            value={editedTraining.title || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedTraining(prev => ({ ...prev, title: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label>Training Code</label>
          <input
            type="text"
            value={editedTraining.code || ''}
            disabled={!isEditing}
            placeholder="e.g., CHC42015"
            onChange={(e) => setEditedTraining(prev => ({ ...prev, code: e.target.value }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="required">Training Provider</label>
          <input
            type="text"
            value={editedTraining.provider.name || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedTraining(prev => ({
              ...prev,
              provider: { ...prev.provider, name: e.target.value }
            }))}
          />
        </div>
        <div className="form-group">
          <label className="required">Category</label>
          <select
            value={editedTraining.category || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedTraining(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="">Select Category</option>
            <option value="Community Services">Community Services</option>
            <option value="Mining & Resources">Mining & Resources</option>
            <option value="Digital Skills">Digital Skills</option>
            <option value="Construction">Construction</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="required">Level</label>
          <select
            value={editedTraining.level || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedTraining(prev => ({ ...prev, level: e.target.value as any }))}
          >
            <option value="">Select Level</option>
            <option value="Foundation">Foundation</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Specialist">Specialist</option>
          </select>
        </div>
        <div className="form-group">
          <label className="required">Duration (Hours)</label>
          <input
            type="number"
            value={editedTraining.duration.totalHours || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedTraining(prev => ({
              ...prev,
              duration: { ...prev.duration, totalHours: parseInt(e.target.value) }
            }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label className="required">Description</label>
          <textarea
            value={editedTraining.description || ''}
            disabled={!isEditing}
            rows={4}
            placeholder="Describe the training program, its purpose, and target outcomes..."
            onChange={(e) => setEditedTraining(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Target Audience</label>
          <textarea
            value={editedTraining.targetAudience || ''}
            disabled={!isEditing}
            rows={2}
            placeholder="Who is this training designed for?"
            onChange={(e) => setEditedTraining(prev => ({ ...prev, targetAudience: e.target.value }))}
          />
        </div>
        <div className="form-group">
          <label>Max Participants</label>
          <input
            type="number"
            value={editedTraining.maxParticipants || ''}
            disabled={!isEditing}
            onChange={(e) => setEditedTraining(prev => ({ ...prev, maxParticipants: parseInt(e.target.value) }))}
          />
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="detail-section">
      <div className="modules-section">
        <h4>Training Modules</h4>
        <div className="modules-list">
          {editedTraining.modules.map((module, index) => (
            <div key={module.id} className="module-card">
              <div className="module-header">
                <h5>Module {index + 1}: {module.title}</h5>
                <span className="module-duration">{module.duration} hours</span>
              </div>
              <p className="module-description">{module.description}</p>
              {module.assessments.length > 0 && (
                <div className="module-assessments">
                  <h6>Assessments:</h6>
                  <ul>
                    {module.assessments.map(assessment => (
                      <li key={assessment.id}>
                        {assessment.description} ({assessment.weightPercentage}%)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="objectives-section">
        <h4>Learning Objectives</h4>
        <ul className="objectives-list">
          {editedTraining.objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="detail-section">
      <div className="schedules-section">
        <h4>Training Schedules</h4>
        <div className="schedules-list">
          {editedTraining.schedules.map(schedule => (
            <div key={schedule.id} className="schedule-card">
              <div className="schedule-header">
                <h5>{schedule.deliveryMethod} - {schedule.location}</h5>
                <span className={`status-chip ${getStatusColor(schedule.status)}`}>
                  {schedule.status}
                </span>
              </div>
              <div className="schedule-details">
                <div className="schedule-dates">
                  <strong>Dates:</strong> {schedule.startDate} to {schedule.endDate}
                </div>
                <div className="schedule-commitment">
                  <strong>Time Commitment:</strong> {schedule.timeCommitment}
                </div>
                <div className="schedule-enrollment">
                  <strong>Enrollment:</strong> {schedule.currentEnrollments} / {schedule.maxParticipants}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderParticipants = () => (
    <div className="detail-section">
      <div className="participants-summary">
        <div className="participants-stat">
          <span className="stat-number">{editedTraining.enrollments || 0}</span>
          <span className="stat-label">Current Enrollments</span>
        </div>
        <div className="participants-stat">
          <span className="stat-number">{editedTraining.maxParticipants}</span>
          <span className="stat-label">Maximum Capacity</span>
        </div>
      </div>

      <div className="empty-state">
        <h3>Participant Management</h3>
        <p>Participant tracking and management features coming soon.</p>
      </div>
    </div>
  );

  const renderMatchParticipants = () => (
    <ParticipantMatcher training={editedTraining} />
  );

  const renderOutcomes = () => (
    <div className="detail-section">
      <div className="outcomes-section">
        <h4>Training Outcomes</h4>
        <div className="outcomes-list">
          {editedTraining.outcomes.map(outcome => (
            <div key={outcome.id} className="outcome-card">
              <h5>{outcome.title}</h5>
              <p>{outcome.description}</p>
              {outcome.code && <span className="outcome-code">Code: {outcome.code}</span>}
              <div className="industry-recognition">
                <strong>Industry Recognition:</strong> {outcome.industryRecognition.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="career-pathways-section">
        <h4>Career Pathways</h4>
        <div className="pathways-list">
          {editedTraining.careerPathways.map((pathway, index) => (
            <span key={index} className="pathway-tag">{pathway}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'content': return renderContent();
      case 'schedule': return renderSchedule();
      case 'participants': return renderParticipants();
      case 'match-participants': return renderMatchParticipants();
      case 'outcomes': return renderOutcomes();
      default: return renderOverview();
    }
  };

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? tabs[0].label;

  return (
    <div className="page training-detail-page">
      <header className="page-header training-detail-header has-tabs">
        <div className="stack">
          <button className="link-button" type="button" onClick={onBack}>
            ← Back to training
          </button>
          <div className="training-identity">
            <div className="training-avatar-large" style={{ backgroundColor: getAvatarColor(training.title) }}>
              {training.title.charAt(0)}
            </div>
            <div className="training-info">
              <h1 className="page-title">{training.title}</h1>
              <p className="page-subtitle">
                {training.provider.name} • {training.category} • 
                <span className={`status-chip ${getStatusColor(training.status)}`}>{training.status}</span>
              </p>
              <p className="page-meta">
                {training.duration.totalHours} hours • {training.duration.weeks} weeks • 
                {training.enrollments}/{training.maxParticipants} enrolled
              </p>
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
              Edit training
            </button>
          )}
        </div>
        <nav className="page-tabs" aria-label="Training sections">
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
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetail;