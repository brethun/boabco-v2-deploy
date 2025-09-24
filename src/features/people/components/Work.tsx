import React, { useEffect, useState } from 'react';

interface JobExperience {
  id: string;
  description: string;
  rating: string;
}

interface JobTask {
  id: string;
  task: string;
  rating: string;
}

interface WorkExperience {
  id: string;
  jobTitle: string;
  employer: string;
  startYear: string;
  endYear: string;
  currentJob: boolean;
  workType: string;
  rating: string;
  summary: string;
  jobCategory: string;
  experiences: JobExperience[];
  tasks: JobTask[];
}

interface WorkProps {
  data: any;
  onDataUpdate: (data: any) => void;
}

const Work: React.FC<WorkProps> = ({ data, onDataUpdate }) => {
  const [workHistory, setWorkHistory] = useState<WorkExperience[]>(data.workHistory || []);

  useEffect(() => {
    setWorkHistory(data.workHistory || []);
  }, [data.workHistory]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const occupations = [
    'Accountant', 'Administrator', 'Carpenter', 'Chef', 'Cleaner', 'Electrician',
    'Engineer', 'Farmer', 'Gardener', 'Labourer', 'Mechanic', 'Nurse', 'Plumber',
    'Receptionist', 'Security Guard', 'Teacher', 'Welder', 'Other'
  ];

  const workTypes = ['Full-time', 'Part-time', 'Contract', 'Casual', 'Volunteer'];
  const jobCategories = ['Mining', 'Construction', 'Healthcare', 'Education', 'Retail', 'Agriculture', 'Other'];
  const ratings = ['1', '2', '3', '4', '5'];
  const commonTasks = [
    'Data Entry', 'Customer Service', 'Report Writing', 'Team Leadership',
    'Project Management', 'Quality Control', 'Safety Inspection', 'Training',
    'Maintenance', 'Sales', 'Research', 'Other'
  ];

  const addWorkExperience = () => {
    const newWork: WorkExperience = {
      id: generateId(),
      jobTitle: '',
      employer: '',
      startYear: '',
      endYear: '',
      currentJob: false,
      workType: '',
      rating: '',
      summary: '',
      jobCategory: '',
      experiences: [],
      tasks: []
    };
    const updatedHistory = [...workHistory, newWork];
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const removeWorkExperience = (id: string) => {
    const updatedHistory = workHistory.filter(work => work.id !== id);
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const updateWorkExperience = (id: string, field: keyof WorkExperience, value: any) => {
    const updatedHistory = workHistory.map(work => 
      work.id === id ? { ...work, [field]: value } : work
    );
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const addJobExperience = (workId: string) => {
    const newExperience: JobExperience = {
      id: generateId(),
      description: '',
      rating: ''
    };
    const updatedHistory = workHistory.map(work => 
      work.id === workId 
        ? { ...work, experiences: [...work.experiences, newExperience] }
        : work
    );
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const removeJobExperience = (workId: string, expId: string) => {
    const updatedHistory = workHistory.map(work => 
      work.id === workId 
        ? { ...work, experiences: work.experiences.filter(exp => exp.id !== expId) }
        : work
    );
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const updateJobExperience = (workId: string, expId: string, field: keyof JobExperience, value: string) => {
    const updatedHistory = workHistory.map(work => 
      work.id === workId 
        ? { 
            ...work, 
            experiences: work.experiences.map(exp => 
              exp.id === expId ? { ...exp, [field]: value } : exp
            ) 
          }
        : work
    );
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const addJobTask = (workId: string) => {
    const newTask: JobTask = {
      id: generateId(),
      task: '',
      rating: ''
    };
    const updatedHistory = workHistory.map(work => 
      work.id === workId 
        ? { ...work, tasks: [...work.tasks, newTask] }
        : work
    );
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const removeJobTask = (workId: string, taskId: string) => {
    const updatedHistory = workHistory.map(work => 
      work.id === workId 
        ? { ...work, tasks: work.tasks.filter(task => task.id !== taskId) }
        : work
    );
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  const updateJobTask = (workId: string, taskId: string, field: keyof JobTask, value: string) => {
    const updatedHistory = workHistory.map(work => 
      work.id === workId 
        ? { 
            ...work, 
            tasks: work.tasks.map(task => 
              task.id === taskId ? { ...task, [field]: value } : task
            ) 
          }
        : work
    );
    setWorkHistory(updatedHistory);
    onDataUpdate(updatedHistory);
  };

  return (
    <div className="work-tab">
      <div className="form-section">
        <h3>Work Experience</h3>
        
        {workHistory.map((work, index) => (
          <div key={work.id} className="repeatable-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4>Job {index + 1}</h4>
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeWorkExperience(work.id)}
              >
                Remove Job
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="required">Job Title</label>
                <select
                  value={work.jobTitle}
                  onChange={(e) => updateWorkExperience(work.id, 'jobTitle', e.target.value)}
                  required
                >
                  <option value="">Select Job Title</option>
                  {occupations.map(occupation => (
                    <option key={occupation} value={occupation}>{occupation}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="required">Employer</label>
                <input
                  type="text"
                  value={work.employer}
                  onChange={(e) => updateWorkExperience(work.id, 'employer', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="required">Start Year</label>
                <select
                  value={work.startYear}
                  onChange={(e) => updateWorkExperience(work.id, 'startYear', e.target.value)}
                  required
                >
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="required">End Year</label>
                <select
                  value={work.endYear}
                  onChange={(e) => updateWorkExperience(work.id, 'endYear', e.target.value)}
                  required
                  disabled={work.currentJob}
                >
                  <option value="">Select Year</option>
                  {work.currentJob ? (
                    <option value="Present">Present</option>
                  ) : (
                    years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={work.currentJob}
                      onChange={(e) => {
                        updateWorkExperience(work.id, 'currentJob', e.target.checked);
                        if (e.target.checked) {
                          updateWorkExperience(work.id, 'endYear', 'Present');
                        }
                      }}
                    />
                    Current Job
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Work Type</label>
                <select
                  value={work.workType}
                  onChange={(e) => updateWorkExperience(work.id, 'workType', e.target.value)}
                >
                  <option value="">Select Work Type</option>
                  {workTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Rating</label>
                <select
                  value={work.rating}
                  onChange={(e) => updateWorkExperience(work.id, 'rating', e.target.value)}
                >
                  <option value="">Select Rating</option>
                  {ratings.map(rating => (
                    <option key={rating} value={rating}>{rating} Star{rating !== '1' ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Job Category</label>
                <select
                  value={work.jobCategory}
                  onChange={(e) => updateWorkExperience(work.id, 'jobCategory', e.target.value)}
                >
                  <option value="">Select Category</option>
                  {jobCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label>Summary</label>
                <textarea
                  value={work.summary}
                  onChange={(e) => updateWorkExperience(work.id, 'summary', e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h5>Job Experiences</h5>
              {work.experiences.map((exp, expIndex) => (
                <div key={exp.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span>Experience {expIndex + 1}</span>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => removeJobExperience(work.id, exp.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateJobExperience(work.id, exp.id, 'description', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="form-group">
                      <label>Rating</label>
                      <select
                        value={exp.rating}
                        onChange={(e) => updateJobExperience(work.id, exp.id, 'rating', e.target.value)}
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
                className="btn btn-secondary add-button"
                onClick={() => addJobExperience(work.id)}
              >
                Add Experience
              </button>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h5>Job Tasks</h5>
              {work.tasks.map((task, taskIndex) => (
                <div key={task.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span>Task {taskIndex + 1}</span>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => removeJobTask(work.id, task.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Task</label>
                      <select
                        value={task.task}
                        onChange={(e) => updateJobTask(work.id, task.id, 'task', e.target.value)}
                      >
                        <option value="">Select Task</option>
                        {commonTasks.map(taskName => (
                          <option key={taskName} value={taskName}>{taskName}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Rating</label>
                      <select
                        value={task.rating}
                        onChange={(e) => updateJobTask(work.id, task.id, 'rating', e.target.value)}
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
                className="btn btn-secondary add-button"
                onClick={() => addJobTask(work.id)}
              >
                Add Task
              </button>
            </div>
          </div>
        ))}
        
        <button 
          type="button" 
          className="btn btn-primary add-button"
          onClick={addWorkExperience}
        >
          Add Work Experience
        </button>
      </div>
    </div>
  );
};

export default Work;
