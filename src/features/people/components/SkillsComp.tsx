import React, { useEffect, useState } from 'react';

interface Qualification {
  id: string;
  level: string;
  institution: string;
  name: string;
  areaOfStudy: string;
  completionDate: string;
  status: string;
  certificateAvailable: string;
}

interface Training {
  id: string;
  courseName: string;
  certificateAvailable: string;
}

interface Skill {
  id: string;
  skill: string;
  rating: string;
}

interface Competency {
  id: string;
  competency: string;
  rating: string;
}

interface SkillsCompProps {
  data: any;
  onDataUpdate: (data: any) => void;
}

const SkillsComp: React.FC<SkillsCompProps> = ({ data, onDataUpdate }) => {
  const [highestQualification, setHighestQualification] = useState(
    data.skillsComp?.highestQualification || ''
  );
  const [interestedInTraining, setInterestedInTraining] = useState(
    data.skillsComp?.interestedInTraining || 'No'
  );
  const [qualifications, setQualifications] = useState<Qualification[]>(
    data.skillsComp?.qualifications || []
  );
  const [trainings, setTrainings] = useState<Training[]>(
    data.skillsComp?.trainings || []
  );
  const [skills, setSkills] = useState<Skill[]>(
    data.skillsComp?.skills || []
  );
  const [competencies, setCompetencies] = useState<Competency[]>(
    data.skillsComp?.competencies || []
  );

  useEffect(() => {
    setHighestQualification(data.skillsComp?.highestQualification || '');
    setInterestedInTraining(data.skillsComp?.interestedInTraining || 'No');
    setQualifications(data.skillsComp?.qualifications || []);
    setTrainings(data.skillsComp?.trainings || []);
    setSkills(data.skillsComp?.skills || []);
    setCompetencies(data.skillsComp?.competencies || []);
  }, [data.skillsComp]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const qualificationLevels = [
    'Primary School',
    'High School',
    'Certificate I',
    'Certificate II',
    'Certificate III',
    'Certificate IV',
    'Diploma',
    'Advanced Diploma',
    'Bachelor Degree',
    'Graduate Certificate',
    'Graduate Diploma',
    'Masters Degree',
    'Doctoral Degree'
  ];

  const studyAreas = [
    'Agriculture',
    'Arts',
    'Business',
    'Education',
    'Engineering',
    'Health',
    'Information Technology',
    'Law',
    'Mining',
    'Science',
    'Trades',
    'Other'
  ];

  const qualificationStatuses = [
    'Completed',
    'In Progress',
    'Planned',
    'Discontinued'
  ];

  const skillsList = [
    'Communication',
    'Problem Solving',
    'Leadership',
    'Teamwork',
    'Time Management',
    'Computer Skills',
    'Customer Service',
    'Project Management',
    'Data Analysis',
    'Technical Writing',
    'Public Speaking',
    'Negotiation',
    'Other'
  ];

  const competenciesList = [
    'Safety Management',
    'Quality Control',
    'Risk Assessment',
    'Compliance',
    'Training & Development',
    'Performance Management',
    'Budget Management',
    'Strategic Planning',
    'Change Management',
    'Stakeholder Management',
    'Other'
  ];

  const ratings = ['1', '2', '3', '4', '5'];

  const updateData = () => {
    const updatedData = {
      highestQualification,
      interestedInTraining,
      qualifications,
      trainings,
      skills,
      competencies
    };
    onDataUpdate(updatedData);
  };

  const addQualification = () => {
    const newQualification: Qualification = {
      id: generateId(),
      level: '',
      institution: '',
      name: '',
      areaOfStudy: '',
      completionDate: '',
      status: '',
      certificateAvailable: ''
    };
    setQualifications([...qualifications, newQualification]);
    updateData();
  };

  const removeQualification = (id: string) => {
    setQualifications(qualifications.filter(q => q.id !== id));
    updateData();
  };

  const updateQualification = (id: string, field: keyof Qualification, value: string) => {
    setQualifications(qualifications.map(q => 
      q.id === id ? { ...q, [field]: value } : q
    ));
    updateData();
  };

  const addTraining = () => {
    const newTraining: Training = {
      id: generateId(),
      courseName: '',
      certificateAvailable: 'No'
    };
    setTrainings([...trainings, newTraining]);
    updateData();
  };

  const removeTraining = (id: string) => {
    setTrainings(trainings.filter(t => t.id !== id));
    updateData();
  };

  const updateTraining = (id: string, field: keyof Training, value: string) => {
    setTrainings(trainings.map(t => 
      t.id === id ? { ...t, [field]: value } : t
    ));
    updateData();
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: generateId(),
      skill: '',
      rating: ''
    };
    setSkills([...skills, newSkill]);
    updateData();
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter(s => s.id !== id));
    updateData();
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
    setSkills(skills.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
    updateData();
  };

  const addCompetency = () => {
    const newCompetency: Competency = {
      id: generateId(),
      competency: '',
      rating: ''
    };
    setCompetencies([...competencies, newCompetency]);
    updateData();
  };

  const removeCompetency = (id: string) => {
    setCompetencies(competencies.filter(c => c.id !== id));
    updateData();
  };

  const updateCompetency = (id: string, field: keyof Competency, value: string) => {
    setCompetencies(competencies.map(c => 
      c.id === id ? { ...c, [field]: value } : c
    ));
    updateData();
  };

  return (
    <div className="skills-comp-tab">
      <div className="form-section">
        <h3>Education Level</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Highest Qualification Level Attained</label>
            <select
              value={highestQualification}
              onChange={(e) => {
                setHighestQualification(e.target.value);
                updateData();
              }}
            >
              <option value="">Select Highest Qualification</option>
              {qualificationLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="required">Interested in More Training</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="interestedInTraining"
                  value="Yes"
                  checked={interestedInTraining === 'Yes'}
                  onChange={(e) => {
                    setInterestedInTraining(e.target.value);
                    updateData();
                  }}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="interestedInTraining"
                  value="No"
                  checked={interestedInTraining === 'No'}
                  onChange={(e) => {
                    setInterestedInTraining(e.target.value);
                    updateData();
                  }}
                />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Qualifications</h3>
        {qualifications.map((qual, index) => (
          <div key={qual.id} className="repeatable-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4>Qualification {index + 1}</h4>
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeQualification(qual.id)}
              >
                Remove
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Qualification Level</label>
                <select
                  value={qual.level}
                  onChange={(e) => updateQualification(qual.id, 'level', e.target.value)}
                >
                  <option value="">Select Level</option>
                  {qualificationLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Institution</label>
                <input
                  type="text"
                  value={qual.institution}
                  onChange={(e) => updateQualification(qual.id, 'institution', e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Qualification Name</label>
                <input
                  type="text"
                  value={qual.name}
                  onChange={(e) => updateQualification(qual.id, 'name', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Area of Study</label>
                <select
                  value={qual.areaOfStudy}
                  onChange={(e) => updateQualification(qual.id, 'areaOfStudy', e.target.value)}
                >
                  <option value="">Select Area</option>
                  {studyAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Completion Date</label>
                <input
                  type="date"
                  value={qual.completionDate}
                  onChange={(e) => updateQualification(qual.id, 'completionDate', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  value={qual.status}
                  onChange={(e) => updateQualification(qual.id, 'status', e.target.value)}
                >
                  <option value="">Select Status</option>
                  {qualificationStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Copy of Certificate Available</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name={`cert-${qual.id}`}
                      value="Yes"
                      checked={qual.certificateAvailable === 'Yes'}
                      onChange={(e) => updateQualification(qual.id, 'certificateAvailable', e.target.value)}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`cert-${qual.id}`}
                      value="No"
                      checked={qual.certificateAvailable === 'No'}
                      onChange={(e) => updateQualification(qual.id, 'certificateAvailable', e.target.value)}
                    />
                    No
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`cert-${qual.id}`}
                      value="Unsure"
                      checked={qual.certificateAvailable === 'Unsure'}
                      onChange={(e) => updateQualification(qual.id, 'certificateAvailable', e.target.value)}
                    />
                    Unsure
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button 
          type="button" 
          className="btn btn-primary add-button"
          onClick={addQualification}
        >
          Add Qualification
        </button>
      </div>

      <div className="form-section">
        <h3>Training Courses</h3>
        {trainings.map((training, index) => (
          <div key={training.id} className="repeatable-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4>Training {index + 1}</h4>
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeTraining(training.id)}
              >
                Remove
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="required">Training Course Name</label>
                <input
                  type="text"
                  value={training.courseName}
                  onChange={(e) => updateTraining(training.id, 'courseName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="required">Certificate Available</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name={`training-cert-${training.id}`}
                      value="Yes"
                      checked={training.certificateAvailable === 'Yes'}
                      onChange={(e) => updateTraining(training.id, 'certificateAvailable', e.target.value)}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`training-cert-${training.id}`}
                      value="No"
                      checked={training.certificateAvailable === 'No'}
                      onChange={(e) => updateTraining(training.id, 'certificateAvailable', e.target.value)}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button 
          type="button" 
          className="btn btn-primary add-button"
          onClick={addTraining}
        >
          Add Training
        </button>
      </div>

      <div className="form-section">
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <div key={skill.id} className="repeatable-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4>Skill {index + 1}</h4>
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeSkill(skill.id)}
              >
                Remove
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="required">Skill</label>
                <select
                  value={skill.skill}
                  onChange={(e) => updateSkill(skill.id, 'skill', e.target.value)}
                  required
                >
                  <option value="">Select Skill</option>
                  {skillsList.map(skillName => (
                    <option key={skillName} value={skillName}>{skillName}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Rating</label>
                <select
                  value={skill.rating}
                  onChange={(e) => updateSkill(skill.id, 'rating', e.target.value)}
                >
                  <option value="">Select Rating</option>
                  {ratings.map(rating => (
                    <option key={rating} value={rating}>{rating} Star{rating !== '1' ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
        <button 
          type="button" 
          className="btn btn-primary add-button"
          onClick={addSkill}
        >
          Add Skill
        </button>
      </div>

      <div className="form-section">
        <h3>Competencies</h3>
        {competencies.map((competency, index) => (
          <div key={competency.id} className="repeatable-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4>Competency {index + 1}</h4>
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeCompetency(competency.id)}
              >
                Remove
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Competency</label>
                <select
                  value={competency.competency}
                  onChange={(e) => updateCompetency(competency.id, 'competency', e.target.value)}
                >
                  <option value="">Select Competency</option>
                  {competenciesList.map(competencyName => (
                    <option key={competencyName} value={competencyName}>{competencyName}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Rating</label>
                <select
                  value={competency.rating}
                  onChange={(e) => updateCompetency(competency.id, 'rating', e.target.value)}
                >
                  <option value="">Select Rating</option>
                  {ratings.map(rating => (
                    <option key={rating} value={rating}>{rating} Star{rating !== '1' ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
        <button 
          type="button" 
          className="btn btn-primary add-button"
          onClick={addCompetency}
        >
          Add Competency
        </button>
      </div>
    </div>
  );
};

export default SkillsComp;
