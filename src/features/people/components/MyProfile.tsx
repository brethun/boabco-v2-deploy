import React, { useState } from 'react';
import './MyProfile.css';

interface MyProfileProps {
  data: any;
  onDataUpdate: (data: any) => void;
  isEditing?: boolean;
}

const MyProfile: React.FC<MyProfileProps> = ({ data, isEditing = false }) => {
  const [profileImage, setProfileImage] = useState<string>('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const personalDetails = data.personalDetails || {};
  const workHistory = data.workHistory || [];
  const skillsComp = data.skillsComp || {};
  const notes = data.notes || [];

  const currentJob = workHistory.find((job: any) => job.currentJob);
  const totalYearsExperience = workHistory.length > 0 ? 
    workHistory.reduce((total: number, job: any) => {
      const start = parseInt(job.startYear) || 0;
      const end = job.currentJob ? new Date().getFullYear() : parseInt(job.endYear) || 0;
      return total + (end - start);
    }, 0) : 0;

  const topSkills = skillsComp.skills?.slice(0, 5) || [];
  const recentNotes = notes.slice(0, 3) || [];

  const getCompletionPercentage = () => {
    let completedFields = 0;
    const totalFields = 10;

    if (personalDetails.firstName) completedFields++;
    if (personalDetails.lastName) completedFields++;
    if (personalDetails.dateOfBirth) completedFields++;
    if (personalDetails.gender) completedFields++;
    if (personalDetails.familyGroup) completedFields++;
    if (workHistory.length > 0) completedFields++;
    if (skillsComp.qualifications?.length > 0) completedFields++;
    if (skillsComp.skills?.length > 0) completedFields++;
    if (personalDetails.streetAddress1) completedFields++;
    if (notes.length > 0) completedFields++;

    return Math.round((completedFields / totalFields) * 100);
  };

  return (
    <div className="my-profile-tab">
      <div className="profile-header">
        <div className="profile-image-section">
          <div className="profile-image-container">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-image" />
            ) : (
              <div className="profile-image-placeholder">
                <span>No Photo</span>
              </div>
            )}
          </div>
          <div className="upload-section">
            <input
              type="file"
              id="profile-image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="profile-image-upload" className="btn btn-secondary" style={{ pointerEvents: !isEditing ? 'none' : 'auto', opacity: !isEditing ? 0.5 : 1 }}>
              Upload Image
            </label>
          </div>
        </div>
        
        <div className="profile-summary">
          <h2>
            {personalDetails.firstName || 'First Name'} {personalDetails.lastName || 'Last Name'}
          </h2>
          <p className="profile-subtitle">
            {currentJob ? `${currentJob.jobTitle} at ${currentJob.employer}` : 'No current position'}
          </p>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">{totalYearsExperience}</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">{skillsComp.qualifications?.length || 0}</span>
              <span className="stat-label">Qualifications</span>
            </div>
            <div className="stat">
              <span className="stat-number">{skillsComp.skills?.length || 0}</span>
              <span className="stat-label">Skills</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-completion">
        <h3>Profile Completion</h3>
        <div className="completion-bar">
          <div 
            className="completion-fill" 
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
        <p>{getCompletionPercentage()}% Complete</p>
      </div>

      <div className="profile-sections">
        <div className="profile-section">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Full Name:</label>
              <span>{personalDetails.firstName} {personalDetails.middleName} {personalDetails.lastName}</span>
            </div>
            <div className="info-item">
              <label>Date of Birth:</label>
              <span>{personalDetails.dateOfBirth || 'Not specified'}</span>
            </div>
            <div className="info-item">
              <label>Gender:</label>
              <span>{personalDetails.gender || 'Not specified'}</span>
            </div>
            <div className="info-item">
              <label>Family Group:</label>
              <span>{personalDetails.familyGroup || 'Not specified'}</span>
            </div>
            <div className="info-item">
              <label>Address:</label>
              <span>
                {personalDetails.streetAddress1 ? 
                  `${personalDetails.streetAddress1}, ${personalDetails.suburb} ${personalDetails.state} ${personalDetails.postcode}` : 
                  'Not specified'
                }
              </span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Work Experience</h3>
          {workHistory.length > 0 ? (
            <div className="work-summary">
              {workHistory.slice(0, 3).map((job: any, index: number) => (
                <div key={index} className="work-item">
                  <h4>{job.jobTitle}</h4>
                  <p>{job.employer} • {job.startYear} - {job.currentJob ? 'Present' : job.endYear}</p>
                  {job.summary && <p className="work-description">{job.summary}</p>}
                </div>
              ))}
              {workHistory.length > 3 && (
                <p className="more-items">+ {workHistory.length - 3} more positions</p>
              )}
            </div>
          ) : (
            <p>No work experience added yet.</p>
          )}
        </div>

        <div className="profile-section">
          <h3>Education & Skills</h3>
          <div className="education-skills">
            <div className="education-item">
              <label>Highest Qualification:</label>
              <span>{skillsComp.highestQualification || 'Not specified'}</span>
            </div>
            <div className="education-item">
              <label>Interested in Training:</label>
              <span>{skillsComp.interestedInTraining || 'Not specified'}</span>
            </div>
            {topSkills.length > 0 && (
              <div className="skills-preview">
                <label>Top Skills:</label>
                <div className="skills-list">
                  {topSkills.map((skill: any, index: number) => (
                    <span key={index} className="skill-tag">
                      {skill.skill} {skill.rating && `(${skill.rating}★)`}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h3>Recent Notes</h3>
          {recentNotes.length > 0 ? (
            <div className="notes-preview">
              {recentNotes.map((note: any, index: number) => (
                <div key={index} className="note-preview">
                  <p>{note.content.substring(0, 100)}{note.content.length > 100 ? '...' : ''}</p>
                  <span className="note-date">{new Date(note.timestamp).toLocaleDateString()}</span>
                </div>
              ))}
              {notes.length > 3 && (
                <p className="more-items">+ {notes.length - 3} more notes</p>
              )}
            </div>
          ) : (
            <p>No notes added yet.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default MyProfile;