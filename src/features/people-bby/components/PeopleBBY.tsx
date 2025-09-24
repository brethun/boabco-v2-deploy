import React, { useState } from 'react';
import './PeopleBBY.css';

type TabType = 'contact-details' | 'surveys' | 'referrals' | 'history';

interface PersonalDetailsData {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  motherName: string;
  fatherName: string;
  community: string;
  familyGroup: string;
  driversLicence: string;
  driversLicenceNumber: string;
  driversLicenceExpiry: string;
  committeeRepresentative: string;
  interestedInClosureWork: string;
  familyDependants: string;
  culturalRequirements: string;
  openToFIFO: string;
  policeClearanceEligible: string;
  medicalClearanceEligible: string;
  additionalSupportNeeded: string;
  generalInformation: string;
  streetAddress1: string;
  streetAddress2: string;
  suburb: string;
  state: string;
  postcode: string;
  trainingTypeInterest: string;
  personalContext: string;
  anyDifficulties: string;
}

interface ReferralData {
  referralPathway: string;
  clientFirstName: string;
  clientLastName: string;
  clientPhoneNumber: string;
  clientEmail: string;
  clientAPP: string;
  clientGender: string;
}

interface ReferralItem {
  id: string;
  title: string;
  organization: string;
  referredDate: string;
  lastUpdated: string;
}

interface SurveyItem {
  id: string;
  title: string;
  date: string;
}

interface ReferralSlipData {
  responseId: string;
  referralId: string;
  organizationName: string;
  organizationSubtitle: string;
  serviceDate: string;
  serviceType: string;
  clientName: string;
  clientEmail: string;
  serviceProvider: string;
  servicesOffered: string;
  contactInformation: string;
  serviceLocation: string;
  notes: string;
}

interface HistoryItem {
  id: string;
  date: string;
  time: string;
  action: string;
  details: string;
  performedBy: string;
  type: 'status_change' | 'communication' | 'document' | 'meeting' | 'note';
}

const PeopleBBY: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('contact-details');
  const [formData, setFormData] = useState<PersonalDetailsData>({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    motherName: '',
    fatherName: '',
    community: '',
    familyGroup: '',
    driversLicence: 'No',
    driversLicenceNumber: '',
    driversLicenceExpiry: '',
    committeeRepresentative: 'No',
    interestedInClosureWork: 'No',
    familyDependants: 'No',
    culturalRequirements: '',
    openToFIFO: 'No',
    policeClearanceEligible: 'No',
    medicalClearanceEligible: 'No',
    additionalSupportNeeded: 'No',
    generalInformation: '',
    streetAddress1: '',
    streetAddress2: '',
    suburb: '',
    state: '',
    postcode: '',
    trainingTypeInterest: '',
    personalContext: '',
    anyDifficulties: 'No'
  });

  const [referralData, setReferralData] = useState<ReferralData>({
    referralPathway: '',
    clientFirstName: 'Jason',
    clientLastName: 'Hungerford',
    clientPhoneNumber: '63917723016',
    clientEmail: 'jason@hungerford.com.au',
    clientAPP: '',
    clientGender: 'Male'
  });

  const [selectedReferral, setSelectedReferral] = useState<string>('');
  const [selectedSurvey, setSelectedSurvey] = useState<string>('survey-1');
  const [referralsList] = useState<ReferralItem[]>([
    {
      id: '#24851',
      title: 'Referral #24851',
      organization: 'Wunan SP',
      referredDate: '2024-07-28 at 2:13 AM',
      lastUpdated: '2024-07-28 at 2:13 AM'
    },
    {
      id: '#24850',
      title: 'Referral #24850',
      organization: 'Kimberley Community Legal Service',
      referredDate: '2024-07-28 at 2:13 AM',
      lastUpdated: '2024-07-28 at 2:13 AM'
    },
    {
      id: '#24843',
      title: 'Referral #24843',
      organization: '54 Reasons',
      referredDate: '2024-07-27 at 11:38 PM',
      lastUpdated: '2024-07-27 at 11:38 PM'
    },
    {
      id: '#24842',
      title: 'Referral #24842',
      organization: 'Wunan SP',
      referredDate: '2024-07-27 at 11:37 PM',
      lastUpdated: '2024-07-27 at 11:37 PM'
    },
    {
      id: '#24841',
      title: 'Referral #24841',
      organization: 'Services Australia',
      referredDate: '2024-07-27 at 11:32 PM',
      lastUpdated: '2024-07-27 at 11:32 PM'
    }
  ]);

  const [surveysList] = useState<SurveyItem[]>([
    {
      id: 'survey-1',
      title: 'Emergency Relief Referral',
      date: '2024-12-12 at 10:30 AM'
    },
    {
      id: 'survey-2',
      title: 'Emergency Relief Referral',
      date: '2025-04-21 at 2:15 PM'
    }
  ]);

  const [referralSlipData, setReferralSlipData] = useState<ReferralSlipData>({
    responseId: '',
    referralId: '#undefined',
    organizationName: 'binarri-binyja yarrawoo',
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

  const [historyItems] = useState<HistoryItem[]>([
    {
      id: '15',
      date: '2024-07-27',
      time: '2:30 PM',
      action: 'Profile Created',
      details: 'Initial People BBY profile created with basic information and contact details.',
      performedBy: 'System Admin',
      type: 'status_change'
    },
    {
      id: '14',
      date: '2024-07-27',
      time: '3:15 PM',
      action: 'Contact Details Updated',
      details: 'Added family group information and community details to contact profile.',
      performedBy: 'Community Coordinator',
      type: 'document'
    },
    {
      id: '13',
      date: '2024-07-27',
      time: '4:00 PM',
      action: 'Survey Assigned',
      details: 'Emergency Relief Referral survey assigned to assess service needs and eligibility.',
      performedBy: 'Service Coordinator',
      type: 'status_change'
    },
    {
      id: '12',
      date: '2024-07-28',
      time: '9:30 AM',
      action: 'Survey Completed',
      details: 'Client completed Emergency Relief Referral survey. Assessment indicates high priority for community support services.',
      performedBy: 'Jason Hungerford',
      type: 'document'
    },
    {
      id: '11',
      date: '2024-07-28',
      time: '10:45 AM',
      action: 'Referral Generated',
      details: 'Referral slip #24851 generated for Wunan SP based on survey results and identified service needs.',
      performedBy: 'System',
      type: 'status_change'
    },
    {
      id: '10',
      date: '2024-07-28',
      time: '11:00 AM',
      action: 'Service Provider Notification',
      details: 'Email notification sent to Wunan SP regarding new referral. Contact person: Sarah Thompson.',
      performedBy: 'System',
      type: 'communication'
    },
    {
      id: '9',
      date: '2024-07-28',
      time: '2:13 PM',
      action: 'Referral Acknowledged',
      details: 'Wunan SP acknowledged receipt of referral #24851. Expected response time: 3-5 business days.',
      performedBy: 'Sarah Thompson (Wunan SP)',
      type: 'communication'
    },
    {
      id: '8',
      date: '2024-07-29',
      time: '11:20 AM',
      action: 'Initial Assessment',
      details: 'Conducted preliminary assessment of client needs. Identified potential for housing assistance and employment support programs.',
      performedBy: 'Sarah Thompson (Wunan SP)',
      type: 'note'
    },
    {
      id: '7',
      date: '2024-07-30',
      time: '3:45 PM',
      action: 'Service Plan Created',
      details: 'Developed comprehensive service plan including emergency accommodation, financial counseling, and job readiness training.',
      performedBy: 'Sarah Thompson (Wunan SP)',
      type: 'document'
    },
    {
      id: '6',
      date: '2024-07-31',
      time: '10:15 AM',
      action: 'Client Meeting Scheduled',
      details: 'Face-to-face meeting scheduled for August 2nd to discuss service plan and next steps.',
      performedBy: 'Sarah Thompson (Wunan SP)',
      type: 'meeting'
    },
    {
      id: '5',
      date: '2024-08-02',
      time: '2:00 PM',
      action: 'Client Consultation',
      details: 'Met with Jason Hungerford to review service options. Client expressed interest in housing support and skills training programs.',
      performedBy: 'Sarah Thompson (Wunan SP)',
      type: 'meeting'
    },
    {
      id: '4',
      date: '2024-08-02',
      time: '3:30 PM',
      action: 'Housing Application Submitted',
      details: 'Submitted housing assistance application on behalf of client. Application reference: HA-2024-0751.',
      performedBy: 'Sarah Thompson (Wunan SP)',
      type: 'document'
    },
    {
      id: '3',
      date: '2024-08-05',
      time: '9:00 AM',
      action: 'Training Enrollment',
      details: 'Enrolled client in Certificate II in Construction training program. Start date: August 12th, 2024.',
      performedBy: 'Training Coordinator',
      type: 'status_change'
    },
    {
      id: '2',
      date: '2024-08-12',
      time: '8:00 AM',
      action: 'Training Commenced',
      details: 'Client commenced Certificate II in Construction training. Attendance and progress tracking initiated.',
      performedBy: 'Training Provider',
      type: 'status_change'
    },
    {
      id: '1',
      date: '2024-08-15',
      time: '4:30 PM',
      action: 'Progress Review',
      details: 'Weekly progress review completed. Client demonstrating excellent engagement and skill development. Housing application approved.',
      performedBy: 'Sarah Thompson (Wunan SP)',
      type: 'note'
    }
  ]);

  const tabs = [
    { id: 'contact-details', label: 'Contact Details' },
    { id: 'surveys', label: 'Surveys' },
    { id: 'referrals', label: 'Referrals' },
    { id: 'history', label: 'History' }
  ];

  const handleInputChange = (field: keyof PersonalDetailsData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleReferralChange = (field: keyof ReferralData, value: string) => {
    setReferralData(prev => ({ ...prev, [field]: value }));
  };

  const handleReferralSlipChange = (field: keyof ReferralSlipData, value: string) => {
    setReferralSlipData(prev => ({ ...prev, [field]: value }));
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

  const familyGroups = [
    'Group A',
    'Group B', 
    'Group C',
    'Group D',
    'Group E'
  ];

  const renderContactDetails = () => (
    <div className="tab-content-section">
      <div className="personal-details">
        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="required">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Middle Name</label>
              <input
                type="text"
                value={formData.middleName}
                onChange={(e) => handleInputChange('middleName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="required">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="required">Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="required">Gender</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  />
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mother's Name</label>
              <input
                type="text"
                value={formData.motherName}
                onChange={(e) => handleInputChange('motherName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Father's Name</label>
              <input
                type="text"
                value={formData.fatherName}
                onChange={(e) => handleInputChange('fatherName', e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Community</label>
              <input
                type="text"
                value={formData.community}
                onChange={(e) => handleInputChange('community', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="required">Family Group</label>
              <select
                value={formData.familyGroup}
                onChange={(e) => handleInputChange('familyGroup', e.target.value)}
                required
              >
                <option value="">Select Family Group</option>
                {familyGroups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Licenses & Clearances</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="required">Driver's Licence</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="driversLicence"
                    value="Yes"
                    checked={formData.driversLicence === 'Yes'}
                    onChange={(e) => handleInputChange('driversLicence', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="driversLicence"
                    value="No"
                    checked={formData.driversLicence === 'No'}
                    onChange={(e) => handleInputChange('driversLicence', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {formData.driversLicence === 'Yes' && (
            <div className="form-row">
              <div className="form-group">
                <label>Driver's Licence Number</label>
                <input
                  type="text"
                  value={formData.driversLicenceNumber}
                  onChange={(e) => handleInputChange('driversLicenceNumber', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Driver's Licence Expiry</label>
                <input
                  type="date"
                  value={formData.driversLicenceExpiry}
                  onChange={(e) => handleInputChange('driversLicenceExpiry', e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label className="required">Police Clearance Eligible</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="policeClearanceEligible"
                    value="Yes"
                    checked={formData.policeClearanceEligible === 'Yes'}
                    onChange={(e) => handleInputChange('policeClearanceEligible', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="policeClearanceEligible"
                    value="No"
                    checked={formData.policeClearanceEligible === 'No'}
                    onChange={(e) => handleInputChange('policeClearanceEligible', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="required">Medical Clearance Eligible</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="medicalClearanceEligible"
                    value="Yes"
                    checked={formData.medicalClearanceEligible === 'Yes'}
                    onChange={(e) => handleInputChange('medicalClearanceEligible', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="medicalClearanceEligible"
                    value="No"
                    checked={formData.medicalClearanceEligible === 'No'}
                    onChange={(e) => handleInputChange('medicalClearanceEligible', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Work & Support</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="required">Committee Representative</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="committeeRepresentative"
                    value="Yes"
                    checked={formData.committeeRepresentative === 'Yes'}
                    onChange={(e) => handleInputChange('committeeRepresentative', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="committeeRepresentative"
                    value="No"
                    checked={formData.committeeRepresentative === 'No'}
                    onChange={(e) => handleInputChange('committeeRepresentative', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="required">Interested in Closure Work</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="interestedInClosureWork"
                    value="Yes"
                    checked={formData.interestedInClosureWork === 'Yes'}
                    onChange={(e) => handleInputChange('interestedInClosureWork', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="interestedInClosureWork"
                    value="No"
                    checked={formData.interestedInClosureWork === 'No'}
                    onChange={(e) => handleInputChange('interestedInClosureWork', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="required">Family Dependants</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="familyDependants"
                    value="Yes"
                    checked={formData.familyDependants === 'Yes'}
                    onChange={(e) => handleInputChange('familyDependants', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="familyDependants"
                    value="No"
                    checked={formData.familyDependants === 'No'}
                    onChange={(e) => handleInputChange('familyDependants', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="required">Open to FIFO Work</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="openToFIFO"
                    value="Yes"
                    checked={formData.openToFIFO === 'Yes'}
                    onChange={(e) => handleInputChange('openToFIFO', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="openToFIFO"
                    value="No"
                    checked={formData.openToFIFO === 'No'}
                    onChange={(e) => handleInputChange('openToFIFO', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Additional Support Needed</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="additionalSupportNeeded"
                    value="Yes"
                    checked={formData.additionalSupportNeeded === 'Yes'}
                    onChange={(e) => handleInputChange('additionalSupportNeeded', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="additionalSupportNeeded"
                    value="No"
                    checked={formData.additionalSupportNeeded === 'No'}
                    onChange={(e) => handleInputChange('additionalSupportNeeded', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="required">Any Difficulties</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="anyDifficulties"
                    value="Yes"
                    checked={formData.anyDifficulties === 'Yes'}
                    onChange={(e) => handleInputChange('anyDifficulties', e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="anyDifficulties"
                    value="No"
                    checked={formData.anyDifficulties === 'No'}
                    onChange={(e) => handleInputChange('anyDifficulties', e.target.value)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Address</h3>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Street Address Line 1</label>
              <input
                type="text"
                value={formData.streetAddress1}
                onChange={(e) => handleInputChange('streetAddress1', e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Street Address Line 2</label>
              <input
                type="text"
                value={formData.streetAddress2}
                onChange={(e) => handleInputChange('streetAddress2', e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Suburb</label>
              <input
                type="text"
                value={formData.suburb}
                onChange={(e) => handleInputChange('suburb', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Postcode</label>
              <input
                type="text"
                value={formData.postcode}
                onChange={(e) => handleInputChange('postcode', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Additional Information</h3>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Cultural Requirements</label>
              <textarea
                value={formData.culturalRequirements}
                onChange={(e) => handleInputChange('culturalRequirements', e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Training Type Interest</label>
              <input
                type="text"
                value={formData.trainingTypeInterest}
                onChange={(e) => handleInputChange('trainingTypeInterest', e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>Personal Context</label>
              <textarea
                value={formData.personalContext}
                onChange={(e) => handleInputChange('personalContext', e.target.value)}
                rows={4}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label>General Information</label>
              <textarea
                value={formData.generalInformation}
                onChange={(e) => handleInputChange('generalInformation', e.target.value)}
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSurveys = () => (
    <div className="tab-content-section">
      <div className="surveys-layout">
        <div className="surveys-sidebar">
          <div className="surveys-list">
            <h4>Surveys</h4>
            <div className="surveys-scroll">
              {surveysList.map((survey) => (
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
              ))}
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
                >
                  Walk In
                </button>
                <button
                  type="button"
                  className={`pathway-btn ${referralData.referralPathway === 'Phone In' ? 'active' : ''}`}
                  onClick={() => handleReferralChange('referralPathway', 'Phone In')}
                >
                  Phone In
                </button>
                <button
                  type="button"
                  className={`pathway-btn ${referralData.referralPathway === 'Agency Referred' ? 'active' : ''}`}
                  onClick={() => handleReferralChange('referralPathway', 'Agency Referred')}
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
                  />
                </div>
                <div className="form-group">
                  <label>Client Last Name</label>
                  <input
                    type="text"
                    value={referralData.clientLastName}
                    onChange={(e) => handleReferralChange('clientLastName', e.target.value)}
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
                  />
                </div>
                <div className="form-group">
                  <label>Client Email</label>
                  <input
                    type="email"
                    value={referralData.clientEmail}
                    onChange={(e) => handleReferralChange('clientEmail', e.target.value)}
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
                    >
                      Survey completed
                    </button>
                    <button
                      type="button"
                      className={`app-btn ${referralData.clientAPP === 'Survey not completed' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientAPP', 'Survey not completed')}
                    >
                      Survey not completed
                    </button>
                    <button
                      type="button"
                      className={`app-btn ${referralData.clientAPP === 'Name Shared' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientAPP', 'Name Shared')}
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
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      className={`gender-btn ${referralData.clientGender === 'Male' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientGender', 'Male')}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`gender-btn ${referralData.clientGender === 'Gender Diverse' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientGender', 'Gender Diverse')}
                    >
                      Gender Diverse
                    </button>
                    <button
                      type="button"
                      className={`gender-btn ${referralData.clientGender === 'Not Stated' ? 'active' : ''}`}
                      onClick={() => handleReferralChange('clientGender', 'Not Stated')}
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

  const renderReferrals = () => (
    <div className="tab-content-section">
      <div className="referrals-layout">
        <div className="referrals-sidebar">
          <div className="referrals-list">
            <h4>Referrals</h4>
            <div className="referrals-scroll">
              {referralsList.map((referral) => (
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
                    />
                  </div>
                  <div className="form-group">
                    <label>REFERRAL ID:</label>
                    <input
                      type="text"
                      value={referralSlipData.referralId}
                      onChange={(e) => handleReferralSlipChange('referralId', e.target.value)}
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
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Type:</label>
                      <input
                        type="text"
                        value={referralSlipData.serviceType}
                        onChange={(e) => handleReferralSlipChange('serviceType', e.target.value)}
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
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        value={referralSlipData.clientEmail}
                        onChange={(e) => handleReferralSlipChange('clientEmail', e.target.value)}
                        placeholder="Client email"
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
                    />
                    
                    <h4>CONTACT INFORMATION</h4>
                    <textarea
                      value={referralSlipData.contactInformation}
                      onChange={(e) => handleReferralSlipChange('contactInformation', e.target.value)}
                      rows={2}
                      placeholder="Contact details not available"
                    />
                  </div>
                  
                  <div className="right-column">
                    <h4>SERVICE LOCATION</h4>
                    <textarea
                      value={referralSlipData.serviceLocation}
                      onChange={(e) => handleReferralSlipChange('serviceLocation', e.target.value)}
                      rows={3}
                      placeholder="Service location details"
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="tab-content-section">
      <div className="history-timeline">
        {historyItems && historyItems.length > 0 ? (
          historyItems.map((item) => (
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
            <p>No activity history available for this contact.</p>
          </div>
        )}
      </div>
    </div>
  );

  const activeLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? tabs[0].label;

  return (
    <div className="page people-bby-page">
      <header className="page-header has-tabs">
        <div className="stack">
          <h1 className="page-title">BBY participant record</h1>
          <p className="page-subtitle">
            Track referrals, surveys, and contact information for the Binarri-Binyja Yarrawoo community program.
          </p>
        </div>
        <nav className="page-tabs" aria-label="People BBY sections">
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
            <h2 className="section-divider__title">{activeLabel}</h2>
          </header>
          <div className="section-divider__body">
            {activeTab === 'contact-details' && renderContactDetails()}
            {activeTab === 'surveys' && renderSurveys()}
            {activeTab === 'referrals' && renderReferrals()}
            {activeTab === 'history' && renderHistory()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleBBY;
