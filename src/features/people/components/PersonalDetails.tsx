import React, { useEffect, useState } from 'react';

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

interface PersonalDetailsProps {
  data: any;
  onDataUpdate: (data: any) => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ data, onDataUpdate }) => {
  const buildFormState = (source: any): PersonalDetailsData => ({
    firstName: source?.firstName || '',
    middleName: source?.middleName || '',
    lastName: source?.lastName || '',
    dateOfBirth: source?.dateOfBirth || '',
    gender: source?.gender || '',
    motherName: source?.motherName || '',
    fatherName: source?.fatherName || '',
    community: source?.community || '',
    familyGroup: source?.familyGroup || '',
    driversLicence: source?.driversLicence || 'No',
    driversLicenceNumber: source?.driversLicenceNumber || '',
    driversLicenceExpiry: source?.driversLicenceExpiry || '',
    committeeRepresentative: source?.committeeRepresentative || 'No',
    interestedInClosureWork: source?.interestedInClosureWork || 'No',
    familyDependants: source?.familyDependants || 'No',
    culturalRequirements: source?.culturalRequirements || '',
    openToFIFO: source?.openToFIFO || 'No',
    policeClearanceEligible: source?.policeClearanceEligible || 'No',
    medicalClearanceEligible: source?.medicalClearanceEligible || 'No',
    additionalSupportNeeded: source?.additionalSupportNeeded || '',
    generalInformation: source?.generalInformation || '',
    streetAddress1: source?.streetAddress1 || '',
    streetAddress2: source?.streetAddress2 || '',
    suburb: source?.suburb || '',
    state: source?.state || '',
    postcode: source?.postcode || '',
    trainingTypeInterest: source?.trainingTypeInterest || '',
    personalContext: source?.personalContext || '',
    anyDifficulties: source?.anyDifficulties || 'No'
  });

  const [formData, setFormData] = useState<PersonalDetailsData>(buildFormState(data.personalDetails));

  useEffect(() => {
    setFormData(buildFormState(data.personalDetails));
  }, [data.personalDetails]);

  const handleInputChange = (field: keyof PersonalDetailsData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onDataUpdate(newData);
  };

  const familyGroups = [
    'Group A',
    'Group B', 
    'Group C',
    'Group D',
    'Group E'
  ];

  return (
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
  );
};

export default PersonalDetails;
