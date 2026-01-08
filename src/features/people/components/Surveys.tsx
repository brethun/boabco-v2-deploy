import React, { useState, useEffect } from 'react';
import { PersonRecord, SurveyItem, ReferralData } from '../types';

interface SurveysProps {
  data: PersonRecord;
  onDataUpdate: (data: SurveyItem[]) => void;
  isEditing?: boolean;
}

const Surveys: React.FC<SurveysProps> = ({ data, onDataUpdate, isEditing = false }) => {
  const [selectedSurvey, setSelectedSurvey] = useState<string>(data.surveys[0]?.id || '');
  const [referralData, setReferralData] = useState<ReferralData>({
    referralPathway: '',
    clientFirstName: '',
    clientLastName: '',
    clientPhoneNumber: '',
    clientEmail: '',
    clientAPP: '',
    clientGender: ''
  });

  // Load survey data when a survey is selected
  useEffect(() => {
    const currentSurvey = data.surveys.find(s => s.id === selectedSurvey);
    if (currentSurvey?.referralData) {
      setReferralData(currentSurvey.referralData);
    } else {
      // Reset to empty if no data
      setReferralData({
        referralPathway: '',
        clientFirstName: '',
        clientLastName: '',
        clientPhoneNumber: '',
        clientEmail: '',
        clientAPP: '',
        clientGender: ''
      });
    }
  }, [selectedSurvey, data.surveys]);

  const handleReferralChange = (field: keyof ReferralData, value: string) => {
    setReferralData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="tab-content-section">
      <div className="surveys-layout">
        <div className="surveys-sidebar">
          <div className="surveys-list">
            <h4>Surveys</h4>
            <div className="surveys-scroll">
              {data.surveys.length > 0 ? (
                data.surveys.map((survey) => (
                  <div
                    key={survey.id}
                    className={`survey-item ${selectedSurvey === survey.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSurvey(survey.id)}
                  >
                    <div className="survey-header">
                      <h5>{survey.title}</h5>
                    </div>
                    <div className="survey-meta">
                      <div className="survey-date">{survey.date}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-history">
                  <p>No surveys available for this person.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="survey-form">
          <div className="referral-details">
            <div className="form-section">
              <h3>1. Referral Pathway</h3>
              <div className="button-group">
                <button
                  type="button"
                  className={`pathway-btn ${referralData.referralPathway === 'Walk In' ? 'active' : ''}`}
                  onClick={() => handleReferralChange('referralPathway', 'Walk In')}
                  disabled={!isEditing}
                >
                  Walk In
                </button>
                <button
                  type="button"
                  className={`pathway-btn ${referralData.referralPathway === 'Phone In' ? 'active' : ''}`}
                  onClick={() => handleReferralChange('referralPathway', 'Phone In')}
                  disabled={!isEditing}
                >
                  Phone In
                </button>
                <button
                  type="button"
                  className={`pathway-btn ${referralData.referralPathway === 'Agency Referred' ? 'active' : ''}`}
                  onClick={() => handleReferralChange('referralPathway', 'Agency Referred')}
                  disabled={!isEditing}
                >
                  Agency Referred
                </button>
              </div>
            </div>

            <div className="form-section">
              <h3>2. Client Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Client First Name</label>
                  <input
                    type="text"
                    value={referralData.clientFirstName}
                    onChange={(e) => handleReferralChange('clientFirstName', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Client Last Name</label>
                  <input
                    type="text"
                    value={referralData.clientLastName}
                    onChange={(e) => handleReferralChange('clientLastName', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Client Phone Number</label>
                  <input
                    type="text"
                    value={referralData.clientPhoneNumber}
                    onChange={(e) => handleReferralChange('clientPhoneNumber', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Client Email</label>
                  <input
                    type="email"
                    value={referralData.clientEmail}
                    onChange={(e) => handleReferralChange('clientEmail', e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Client APP</label>
                  <div className="button-group">
                    <button
                      type="button"
                      className={`app-btn ${referralData.clientAPP === 'Survey completed' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientAPP', 'Survey completed')}
                      disabled={!isEditing}
                    >
                      Survey completed
                    </button>
                    <button
                      type="button"
                      className={`app-btn ${referralData.clientAPP === 'Survey not completed' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientAPP', 'Survey not completed')}
                      disabled={!isEditing}
                    >
                      Survey not completed
                    </button>
                    <button
                      type="button"
                      className={`app-btn ${referralData.clientAPP === 'Name Shared' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientAPP', 'Name Shared')}
                      disabled={!isEditing}
                    >
                      Name Shared
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Client Gender</label>
                  <div className="button-group gender-group">
                    <button
                      type="button"
                      className={`gender-btn ${referralData.clientGender === 'Female' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientGender', 'Female')}
                      disabled={!isEditing}
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      className={`gender-btn ${referralData.clientGender === 'Male' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientGender', 'Male')}
                      disabled={!isEditing}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`gender-btn ${referralData.clientGender === 'Gender Diverse' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientGender', 'Gender Diverse')}
                      disabled={!isEditing}
                    >
                      Gender Diverse
                    </button>
                    <button
                      type="button"
                      className={`gender-btn ${referralData.clientGender === 'Not Stated' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientGender', 'Not Stated')}
                      disabled={!isEditing}
                    >
                      Not Stated
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveys;
