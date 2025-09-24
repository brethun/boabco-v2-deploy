import React, { useState } from 'react';
import './BusinessDetail.css';

interface BusinessDetailProps {
  business: any;
  onBack: () => void;
  onSave: (business: any) => void;
}

const BusinessDetail: React.FC<BusinessDetailProps> = ({ business, onBack, onSave }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState(business);
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Business Overview' },
    { id: 'contact', label: 'Contact Information' },
    { id: 'directors', label: 'Directors' },
    { id: 'workforce', label: 'Workforce & Competency' },
    { id: 'projects', label: 'Projects' },
    { id: 'profile', label: 'Profile' }
  ];

  const handleInputChange = (field: string, value: any, section?: string) => {
    if (section) {
      setFormData((prev: any) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData((prev: any) => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(business);
    setIsEditing(false);
  };

  const addDirector = () => {
    const newDirector = {
      id: Date.now().toString(),
      title: '',
      name: ''
    };
    setFormData((prev: any) => ({
      ...prev,
      directors: [...prev.directors, newDirector]
    }));
  };

  const removeDirector = (directorId: string) => {
    setFormData((prev: any) => ({
      ...prev,
      directors: prev.directors.filter((d: any) => d.id !== directorId)
    }));
  };

  const updateDirector = (directorId: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      directors: prev.directors.map((d: any) => 
        d.id === directorId ? { ...d, [field]: value } : d
      )
    }));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      clientName: '',
      description: '',
      startDate: '',
      endDate: '',
      workforce: 0,
      spend: 0
    };
    setFormData((prev: any) => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const removeProject = (projectId: string) => {
    setFormData((prev: any) => ({
      ...prev,
      projects: prev.projects.filter((p: any) => p.id !== projectId)
    }));
  };

  const updateProject = (projectId: string, field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      projects: prev.projects.map((p: any) => 
        p.id === projectId ? { ...p, [field]: value } : p
      )
    }));
  };

  const addClient = () => {
    const newClient = {
      id: Date.now().toString(),
      clientName: '',
      projectDescription: ''
    };
    setFormData((prev: any) => ({
      ...prev,
      previousClients: [...prev.previousClients, newClient]
    }));
  };

  const removeClient = (clientId: string) => {
    setFormData((prev: any) => ({
      ...prev,
      previousClients: prev.previousClients.filter((c: any) => c.id !== clientId)
    }));
  };

  const updateClient = (clientId: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      previousClients: prev.previousClients.map((c: any) => 
        c.id === clientId ? { ...c, [field]: value } : c
      )
    }));
  };

  const addSocialMedia = () => {
    const newSocialMedia = {
      id: Date.now().toString(),
      type: '',
      url: ''
    };
    setFormData((prev: any) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, newSocialMedia]
    }));
  };

  const removeSocialMedia = (socialId: string) => {
    setFormData((prev: any) => ({
      ...prev,
      socialMedia: prev.socialMedia.filter((s: any) => s.id !== socialId)
    }));
  };

  const updateSocialMedia = (socialId: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      socialMedia: prev.socialMedia.map((s: any) => 
        s.id === socialId ? { ...s, [field]: value } : s
      )
    }));
  };

  const addEquipment = () => {
    const newEquipment = {
      id: Date.now().toString(),
      name: '',
      description: ''
    };
    setFormData((prev: any) => ({
      ...prev,
      equipment: [...prev.equipment, newEquipment]
    }));
  };

  const removeEquipment = (equipmentId: string) => {
    setFormData((prev: any) => ({
      ...prev,
      equipment: prev.equipment.filter((e: any) => e.id !== equipmentId)
    }));
  };

  const updateEquipment = (equipmentId: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      equipment: prev.equipment.map((e: any) => 
        e.id === equipmentId ? { ...e, [field]: value } : e
      )
    }));
  };

  const renderOverview = () => (
    <div className="form-section">
      <div className="form-row">
        <div className="form-group">
          <label className="required">Business Name</label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>ABN</label>
          <input
            type="text"
            value={formData.abn}
            onChange={(e) => handleInputChange('abn', e.target.value)}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>ACN</label>
          <input
            type="text"
            value={formData.acn}
            onChange={(e) => handleInputChange('acn', e.target.value)}
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Community</label>
          <select
            value={formData.community}
            onChange={(e) => handleInputChange('community', e.target.value)}
            disabled={!isEditing}
          >
            <option value="">Select Community</option>
            <option value="Kimberley Region">Kimberley Region</option>
            <option value="Pilbara Region">Pilbara Region</option>
            <option value="Goldfields">Goldfields</option>
            <option value="Great Southern">Great Southern</option>
            <option value="Wheatbelt">Wheatbelt</option>
          </select>
        </div>
        <div className="form-group">
          <label>Family Group</label>
          <select
            value={formData.familyGroup}
            onChange={(e) => handleInputChange('familyGroup', e.target.value)}
            disabled={!isEditing}
          >
            <option value="">Select Family Group</option>
            <option value="Group A">Group A</option>
            <option value="Group B">Group B</option>
            <option value="Group C">Group C</option>
            <option value="Group D">Group D</option>
            <option value="Group E">Group E</option>
          </select>
        </div>
        <div className="form-group">
          <label>Operation Length (years)</label>
          <input
            type="number"
            value={formData.operationLength}
            onChange={(e) => handleInputChange('operationLength', parseInt(e.target.value))}
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Website URL</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Interested in Closure Work</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="interestedInClosureWork"
                value="true"
                checked={formData.interestedInClosureWork === true}
                onChange={() => handleInputChange('interestedInClosureWork', true)}
                disabled={!isEditing}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="interestedInClosureWork"
                value="false"
                checked={formData.interestedInClosureWork === false}
                onChange={() => handleInputChange('interestedInClosureWork', false)}
                disabled={!isEditing}
              />
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Additional Support Required</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="additionalSupportRequired"
                value="true"
                checked={formData.additionalSupportRequired === true}
                onChange={() => handleInputChange('additionalSupportRequired', true)}
                disabled={!isEditing}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="additionalSupportRequired"
                value="false"
                checked={formData.additionalSupportRequired === false}
                onChange={() => handleInputChange('additionalSupportRequired', false)}
                disabled={!isEditing}
              />
              No
            </label>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>General Information</label>
          <textarea
            value={formData.generalInformation}
            onChange={(e) => handleInputChange('generalInformation', e.target.value)}
            disabled={!isEditing}
            rows={4}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Business History</label>
          <textarea
            value={formData.businessHistory}
            onChange={(e) => handleInputChange('businessHistory', e.target.value)}
            disabled={!isEditing}
            rows={4}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Mission Statement</label>
          <textarea
            value={formData.missionStatement}
            onChange={(e) => handleInputChange('missionStatement', e.target.value)}
            disabled={!isEditing}
            rows={4}
          />
        </div>
      </div>


      <h3>Social Media & Online Presence</h3>
      <div className="social-list">
        {formData.socialMedia.map((social: any, index: number) => (
          <div key={social.id} className="repeatable-section">
            <h4>Social Media {index + 1}</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Platform Type</label>
                <select
                  value={social.type}
                  onChange={(e) => updateSocialMedia(social.id, 'type', e.target.value)}
                  disabled={!isEditing}
                >
                  <option value="">Select Platform</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Website">Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Profile URL</label>
                <input
                  type="url"
                  value={social.url}
                  onChange={(e) => updateSocialMedia(social.id, 'url', e.target.value)}
                  disabled={!isEditing}
                  placeholder="https://..."
                />
              </div>
              {isEditing && (
                <div className="form-group">
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => removeSocialMedia(social.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isEditing && (
        <button type="button" className="btn btn-secondary add-button" onClick={addSocialMedia}>
          Add Social Media
        </button>
      )}
    </div>
  );

  const renderContact = () => (
    <div className="form-section">
      <h3>Contact Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Title</label>
          <select
            value={formData.contact.title}
            onChange={(e) => handleInputChange('title', e.target.value, 'contact')}
            disabled={!isEditing}
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
        </div>
        <div className="form-group">
          <label>Primary Contact Name</label>
          <input
            type="text"
            value={formData.contact.primaryContactName}
            onChange={(e) => handleInputChange('primaryContactName', e.target.value, 'contact')}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>Contact Type</label>
          <select
            value={formData.contact.contactType}
            onChange={(e) => handleInputChange('contactType', e.target.value, 'contact')}
            disabled={!isEditing}
          >
            <option value="">Select Type</option>
            <option value="General Manager">General Manager</option>
            <option value="Operations Manager">Operations Manager</option>
            <option value="HR Manager">HR Manager</option>
            <option value="Office Manager">Office Manager</option>
            <option value="Director">Director</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            value={formData.contact.contactNumber}
            onChange={(e) => handleInputChange('contactNumber', e.target.value, 'contact')}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={formData.contact.email}
            onChange={(e) => handleInputChange('email', e.target.value, 'contact')}
            disabled={!isEditing}
          />
        </div>
      </div>

      <h3>Address Information</h3>
      <div className="form-row">
        <div className="form-group full-width">
          <label>Street Address</label>
          <input
            type="text"
            value={formData.address.street}
            onChange={(e) => handleInputChange('street', e.target.value, 'address')}
            disabled={!isEditing}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group full-width">
          <label>Street Address 2</label>
          <input
            type="text"
            value={formData.address.street2}
            onChange={(e) => handleInputChange('street2', e.target.value, 'address')}
            disabled={!isEditing}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Suburb</label>
          <input
            type="text"
            value={formData.address.suburb}
            onChange={(e) => handleInputChange('suburb', e.target.value, 'address')}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <select
            value={formData.address.state}
            onChange={(e) => handleInputChange('state', e.target.value, 'address')}
            disabled={!isEditing}
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
            value={formData.address.postcode}
            onChange={(e) => handleInputChange('postcode', e.target.value, 'address')}
            disabled={!isEditing}
          />
        </div>
      </div>
    </div>
  );

  const renderDirectors = () => (
    <div className="form-section">
      <div className="directors-list">
        {formData.directors.map((director: any, index: number) => (
          <div key={director.id} className="repeatable-section">
            <h4>Director {index + 1}</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Director Title</label>
                <select
                  value={director.title}
                  onChange={(e) => updateDirector(director.id, 'title', e.target.value)}
                  disabled={!isEditing}
                >
                  <option value="">Select Title</option>
                  <option value="Chief Executive Officer">Chief Executive Officer</option>
                  <option value="Managing Director">Managing Director</option>
                  <option value="Operations Director">Operations Director</option>
                  <option value="Finance Director">Finance Director</option>
                  <option value="Director">Director</option>
                </select>
              </div>
              <div className="form-group">
                <label>Director Name</label>
                <input
                  type="text"
                  value={director.name}
                  onChange={(e) => updateDirector(director.id, 'name', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              {isEditing && (
                <div className="form-group">
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => removeDirector(director.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isEditing && (
        <button type="button" className="btn btn-secondary add-button" onClick={addDirector}>
          Add Director
        </button>
      )}
    </div>
  );

  const renderProjects = () => (
    <div className="form-section">
      <h3>Current Projects</h3>
      <div className="projects-list">
        {formData.projects.map((project: any, index: number) => (
          <div key={project.id} className="repeatable-section">
            <h4>Project {index + 1}</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Client Name</label>
                <input
                  type="text"
                  value={project.clientName}
                  onChange={(e) => updateProject(project.id, 'clientName', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={project.startDate}
                  onChange={(e) => updateProject(project.id, 'startDate', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  value={project.endDate}
                  onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <label>Project Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                  disabled={!isEditing}
                  rows={3}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Workforce Size</label>
                <input
                  type="number"
                  value={project.workforce}
                  onChange={(e) => updateProject(project.id, 'workforce', parseInt(e.target.value))}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Project Spend ($)</label>
                <input
                  type="number"
                  value={project.spend}
                  onChange={(e) => updateProject(project.id, 'spend', parseInt(e.target.value))}
                  disabled={!isEditing}
                />
              </div>
              {isEditing && (
                <div className="form-group">
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => removeProject(project.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isEditing && (
        <button type="button" className="btn btn-secondary add-button" onClick={addProject}>
          Add Current Project
        </button>
      )}

      <h3>Previous Clients & Projects</h3>
      <div className="clients-list">
        {formData.previousClients.map((client: any, index: number) => (
          <div key={client.id} className="repeatable-section">
            <h4>Previous Client {index + 1}</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Client Name</label>
                <input
                  type="text"
                  value={client.clientName}
                  onChange={(e) => updateClient(client.id, 'clientName', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group full-width">
                <label>Project Description</label>
                <textarea
                  value={client.projectDescription}
                  onChange={(e) => updateClient(client.id, 'projectDescription', e.target.value)}
                  disabled={!isEditing}
                  rows={2}
                />
              </div>
              {isEditing && (
                <div className="form-group">
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => removeClient(client.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isEditing && (
        <button type="button" className="btn btn-secondary add-button" onClick={addClient}>
          Add Previous Client
        </button>
      )}
    </div>
  );

  const renderWorkforce = () => (
    <div className="form-section">
      <h3>Workforce Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Employee Number Range</label>
          <select
            value={formData.workforce.employeeNumber}
            onChange={(e) => handleInputChange('employeeNumber', e.target.value, 'workforce')}
            disabled={!isEditing}
          >
            <option value="">Select Range</option>
            <option value="1-10">1-10</option>
            <option value="11-25">11-25</option>
            <option value="25-50">25-50</option>
            <option value="50-100">50-100</option>
            <option value="100+">100+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Largest Peak Workforce</label>
          <input
            type="number"
            value={formData.workforce.largestPeakWorkforce}
            onChange={(e) => handleInputChange('largestPeakWorkforce', parseInt(e.target.value), 'workforce')}
            disabled={!isEditing}
          />
        </div>
        <div className="form-group">
          <label>Largest Project Managed</label>
          <select
            value={formData.workforce.largestProjectManaged}
            onChange={(e) => handleInputChange('largestProjectManaged', e.target.value, 'workforce')}
            disabled={!isEditing}
          >
            <option value="">Select Project Size</option>
            <option value="Small Project">Small Project</option>
            <option value="Medium Project">Medium Project</option>
            <option value="Large Project">Large Project</option>
            <option value="Major Infrastructure">Major Infrastructure</option>
          </select>
        </div>
      </div>

      <h3>Industry & Competency</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Primary Industry</label>
          <select
            value={formData.industry.primary}
            onChange={(e) => handleInputChange('primary', e.target.value, 'industry')}
            disabled={!isEditing}
          >
            <option value="">Select Primary Industry</option>
            <option value="Construction">Construction</option>
            <option value="Mining">Mining</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Tourism">Tourism</option>
            <option value="Retail">Retail</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Transport">Transport</option>
          </select>
        </div>
        <div className="form-group">
          <label>Secondary Industry</label>
          <select
            value={formData.industry.secondary}
            onChange={(e) => handleInputChange('secondary', e.target.value, 'industry')}
            disabled={!isEditing}
          >
            <option value="">Select Secondary Industry</option>
            <option value="Construction">Construction</option>
            <option value="Mining">Mining</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Tourism">Tourism</option>
            <option value="Retail">Retail</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Transport">Transport</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Logistics">Logistics</option>
          </select>
        </div>
      </div>

      <h3>Equipment & Assets</h3>
      <div className="equipment-list">
        {formData.equipment.map((equipment: any, index: number) => (
          <div key={equipment.id} className="repeatable-section">
            <h4>Equipment {index + 1}</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Equipment Name</label>
                <input
                  type="text"
                  value={equipment.name}
                  onChange={(e) => updateEquipment(equipment.id, 'name', e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group full-width">
                <label>Equipment Description</label>
                <textarea
                  value={equipment.description}
                  onChange={(e) => updateEquipment(equipment.id, 'description', e.target.value)}
                  disabled={!isEditing}
                  rows={2}
                />
              </div>
              {isEditing && (
                <div className="form-group">
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => removeEquipment(equipment.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isEditing && (
        <button type="button" className="btn btn-secondary add-button" onClick={addEquipment}>
          Add Equipment
        </button>
      )}
    </div>
  );

  const renderProfile = () => (
    <div className="profile-dashboard">
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Business Summary</h3>
          <div className="summary-item">
            <label>Business Name:</label>
            <span>{formData.businessName}</span>
          </div>
          <div className="summary-item">
            <label>ABN:</label>
            <span>{formData.abn}</span>
          </div>
          <div className="summary-item">
            <label>Primary Industry:</label>
            <span>{formData.industry.primary}</span>
          </div>
          <div className="summary-item">
            <label>Community:</label>
            <span>{formData.community}</span>
          </div>
          <div className="summary-item">
            <label>Operation Length:</label>
            <span>{formData.operationLength} years</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Contact Information</h3>
          <div className="summary-item">
            <label>Primary Contact:</label>
            <span>{formData.contact.primaryContactName}</span>
          </div>
          <div className="summary-item">
            <label>Position:</label>
            <span>{formData.contact.contactType}</span>
          </div>
          <div className="summary-item">
            <label>Phone:</label>
            <span>{formData.contact.contactNumber}</span>
          </div>
          <div className="summary-item">
            <label>Email:</label>
            <span>{formData.contact.email}</span>
          </div>
          <div className="summary-item">
            <label>Location:</label>
            <span>{formData.address.suburb}, {formData.address.state}</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Workforce & Capabilities</h3>
          <div className="summary-item">
            <label>Employee Range:</label>
            <span>{formData.workforce.employeeNumber}</span>
          </div>
          <div className="summary-item">
            <label>Peak Workforce:</label>
            <span>{formData.workforce.largestPeakWorkforce} people</span>
          </div>
          <div className="summary-item">
            <label>Equipment Count:</label>
            <span>{formData.equipment.length} items</span>
          </div>
          <div className="summary-item">
            <label>Closure Work Interest:</label>
            <span>{formData.interestedInClosureWork ? 'Yes' : 'No'}</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Project Portfolio</h3>
          <div className="summary-item">
            <label>Current Projects:</label>
            <span>{formData.projects.length}</span>
          </div>
          <div className="summary-item">
            <label>Previous Clients:</label>
            <span>{formData.previousClients.length}</span>
          </div>
          <div className="summary-item">
            <label>Directors:</label>
            <span>{formData.directors.length}</span>
          </div>
          <div className="summary-item">
            <label>Social Media:</label>
            <span>{formData.socialMedia.length} platforms</span>
          </div>
        </div>

        <div className="dashboard-card full-width">
          <h3>Recent Projects</h3>
          {formData.projects.length > 0 ? (
            <div className="project-list">
              {formData.projects.slice(0, 3).map((project: any) => (
                <div key={project.id} className="project-summary">
                  <h4>{project.clientName}</h4>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <span>Workforce: {project.workforce}</span>
                    <span>Value: ${project.spend?.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No current projects</p>
          )}
        </div>

        <div className="dashboard-card full-width">
          <h3>Key Previous Clients</h3>
          {formData.previousClients.length > 0 ? (
            <div className="client-list">
              {formData.previousClients.slice(0, 4).map((client: any) => (
                <div key={client.id} className="client-summary">
                  <h4>{client.clientName}</h4>
                  <p>{client.projectDescription}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No previous clients recorded</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'contact': return renderContact();
      case 'directors': return renderDirectors();
      case 'workforce': return renderWorkforce();
      case 'projects': return renderProjects();
      case 'profile': return renderProfile();
      default: 
        return (
          <div className="form-section">
            <p>Content for {tabs.find(t => t.id === activeTab)?.label} coming soon...</p>
          </div>
        );
    }
  };

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? tabs[0].label;

  return (
    <div className="page business-detail-page">
      <header className="page-header business-detail-header has-tabs">
        <div className="stack">
          <button className="link-button" type="button" onClick={onBack}>
            ← Back to directory
          </button>
          <h1 className="page-title">{formData.businessName}</h1>
          <p className="page-subtitle">{formData.community} • {formData.industry.primary}</p>
        </div>
        <div className="page-actions">
          {!isEditing ? (
            <button className="btn btn-primary" type="button" onClick={() => setIsEditing(true)}>
              Edit business
            </button>
          ) : (
            <>
              <button className="btn btn-secondary" type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn btn-primary" type="button" onClick={handleSave}>
                Save changes
              </button>
            </>
          )}
        </div>
        <nav className="page-tabs" aria-label="Business sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? 'is-active' : ''}
              onClick={() => setActiveTab(tab.id)}
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
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
