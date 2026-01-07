import React, { useState } from 'react';
import TrainingDetail from './TrainingDetail';
import { TrainingData } from '../types';
import { initialTrainingRecords } from '../../../mocks/trainingMockData';
import './Training.css';

const Training: React.FC = () => {
  const [selectedTraining, setSelectedTraining] = useState<TrainingData | null>(null);
  const [trainings] = useState<TrainingData[]>(initialTrainingRecords);

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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundation':
        return 'level-foundation';
      case 'Intermediate':
        return 'level-intermediate';
      case 'Advanced':
        return 'level-advanced';
      case 'Specialist':
        return 'level-specialist';
      default:
        return '';
    }
  };

  const handleTrainingClick = (training: TrainingData) => {
    setSelectedTraining(training);
  };

  const handleBackToList = () => {
    setSelectedTraining(null);
  };

  const handleSaveTraining = (updatedTraining: TrainingData) => {
    console.log('Saving updated training:', updatedTraining);
    setSelectedTraining(updatedTraining);
  };

  if (selectedTraining) {
    return (
      <TrainingDetail
        training={selectedTraining}
        onBack={handleBackToList}
        onSave={handleSaveTraining}
      />
    );
  }

  return (
    <div className="page training-page">
      <header className="page-header">
        <div className="stack">
          <h1 className="page-title">Training</h1>
          <p className="page-subtitle">Manage training programs and match participants with development opportunities.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" type="button">Create new training</button>
        </div>
      </header>

      <div className="page-sections">
        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Training Programs</h2>
            <p className="section-divider__meta">{trainings.length} programs</p>
          </header>
          <div className="section-divider__body">
            <div className="training-table-container">
              <table className="training-table">
                <thead>
                  <tr>
                    <th>Training Program</th>
                    <th>Provider</th>
                    <th>Category</th>
                    <th>Level</th>
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Enrollments</th>
                  </tr>
                </thead>
                <tbody>
                  {trainings.map((training) => (
                    <tr key={training.id} onClick={() => handleTrainingClick(training)} role="button">
                      <td>
                        <div className="training-title-cell">
                          <div className="training-avatar" style={{ backgroundColor: getAvatarColor(training.title) }}>
                            {training.title.charAt(0)}
                          </div>
                          <div className="training-title-info">
                            <span className="training-title">{training.title}</span>
                            <span className="training-code">{training.code}</span>
                          </div>
                        </div>
                      </td>
                      <td className="provider-cell">{training.provider.name}</td>
                      <td className="category-cell">{training.category}</td>
                      <td>
                        <span className={`level-chip ${getLevelColor(training.level)}`}>{training.level}</span>
                      </td>
                      <td className="duration-cell">
                        <div className="duration-info">
                          <span className="duration-hours">{training.duration.totalHours}h</span>
                          <span className="duration-weeks">{training.duration.weeks} weeks</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-chip ${getStatusColor(training.status)}`}>{training.status}</span>
                      </td>
                      <td className="enrollments-cell">
                        <div className="enrollments-info">
                          <span className="enrollments-count">{training.enrollments}</span>
                          <span className="enrollments-max">/ {training.maxParticipants}</span>
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

export default Training;