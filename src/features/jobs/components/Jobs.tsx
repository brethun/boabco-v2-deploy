import React, { useState } from 'react';
import JobDetail from './JobDetail';
import { JobData } from '../types';
import { initialJobRecords } from '../../../mocks/jobMockData';
import './Jobs.css';

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobData | null>(null);
  const [jobs] = useState<JobData[]>(initialJobRecords);

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

  const handleJobClick = (job: JobData) => {
    setSelectedJob(job);
  };

  const handleBackToList = () => {
    setSelectedJob(null);
  };

  const handleSaveJob = (updatedJob: JobData) => {
    // In a real app, this would update the backend
    console.log('Saving updated job:', updatedJob);
    setSelectedJob(updatedJob);
  };

  if (selectedJob) {
    return (
      <JobDetail
        job={selectedJob}
        onBack={handleBackToList}
        onSave={handleSaveJob}
      />
    );
  }

  return (
    <div className="page jobs-page">
      <header className="page-header">
        <div className="stack">
          <h1 className="page-title">Jobs</h1>
          <p className="page-subtitle">Manage employment opportunities and track applications across the network.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" type="button">Post new job</button>
        </div>
      </header>

      <div className="page-sections">
        <div className="section-divider">
          <header className="section-divider__header">
            <h2 className="section-divider__title">Job Listings</h2>
            <p className="section-divider__meta">{jobs.length} jobs</p>
          </header>
          <div className="section-divider__body">
            <div className="jobs-table-container">
              <table className="jobs-table">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Organization</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Applications</th>
                    <th>Posted</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id} onClick={() => handleJobClick(job)} role="button">
                      <td>
                        <div className="job-title-cell">
                          <div className="job-avatar" style={{ backgroundColor: getAvatarColor(job.title) }}>
                            {job.avatar}
                          </div>
                          <div className="job-title-info">
                            <span className="job-title">{job.title}</span>
                            <span className="job-salary">{job.salary}</span>
                          </div>
                        </div>
                      </td>
                      <td className="organization-cell">{job.business?.name || 'Unknown Business'}</td>
                      <td className="location-cell">{job.location}</td>
                      <td>
                        <span className="job-type-chip">{job.jobType}</span>
                      </td>
                      <td>
                        <span className={`status-chip ${getStatusColor(job.status)}`}>{job.status}</span>
                      </td>
                      <td className="applications-cell">
                        <span className="applications-count">{job.applicationsCount}</span>
                      </td>
                      <td className="date-cell">
                        <div className="date-info">
                          <span className="date">{job.postedDate}</span>
                          <span className="days-ago">{job.daysAgo}</span>
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

export default Jobs;
